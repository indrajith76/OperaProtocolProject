import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import checkIcon from "../assets/icons/checkIcon.png";
import fual from "../assets/icons/fual.png";
import twitter from "../assets/icons/twitter.png";
import discord from "../assets/icons/discord.png";
import m from "../assets/icons/m.png";
import github from "../assets/icons/github.png";
import cross from "../assets/icons/cross.png";
import React,{ useState,useEffect } from "react";
import menu from "../assets/icons/menu.png";
import Web3 from 'web3';
// import Web3 from 'web3';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import { LendingPoolABI } from "../abis/LendingPoolABI";
import { FactoryABI } from "../abis/FactoryABI";
import { OperaTokenABI } from "../abis/OperaTokenABI";
import { RewardsABI } from "../abis/RewardsABI";
import { addresses } from "../helperfunctions";
import { StakingABI } from "../abis/StakingABI";
const Main = () => {
  const [sideBarOn, setSideBarOn] = useState(false);
  const providerOptions = {}
  const sideBarHandler = () => {
    setSideBarOn(!sideBarOn);
  };
  const [timerState, setTimerState] = useState(0);
  const [addressOfUser, setAddressOfUser ] = useState(false)
  const [userBalance, setUserBalance ] = useState(0)
  const [userOperaBalance, setUserOperaBalance ] = useState(0)
  const [userStakedAmount, setStakedAmount ] = useState(0)
  const [userData, setUserData ] = useState(0)
  const [provider, setProvider ] = useState(false)
  const [txPending, setTxPending ] = useState(false)
  const [blockNumber, setBlockNumber ] = useState(0)


  useEffect( ()=>{

    const loadIntervalId = setInterval(()=>{setTimerState(timerState + 1)},60000);

    return () => clearInterval(loadIntervalId)
  },[timerState])

  useEffect( ()=>{
    if(!provider) return
    async function load(){
      if(!addressOfUser )return
      if(addressOfUser !== provider.provider.selectedAddress){
        setAddressOfUser(provider.provider.selectedAddress)
      }

      try{
        let web3;
        if(window.ethereum){
            web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        } else if(window.web3){
            web3 = new Web3(window.web3.currentProvider)
        }
        const tempNumber = await web3.eth.getBlockNumber()
        const balance = await provider.getBalance(provider.provider.selectedAddress)
        const operaTokenContract = new web3.eth.Contract(OperaTokenABI,addresses["operaToken"])
        const stakingContract = new web3.eth.Contract(StakingABI,addresses["stakingContract"])
        const userOperaBalance = await operaTokenContract.methods.balanceOf(provider.provider.selectedAddress).call()
        const usersStakedAmount = await stakingContract.methods.stakedAmountForAddress(provider.provider.selectedAddress).call()

        setUserOperaBalance(userOperaBalance )
        setStakedAmount(usersStakedAmount )
        setUserBalance(parseInt(balance._hex))
        setBlockNumber(tempNumber)

        const userData = await fetch(`https://lendertest.herokuapp.com/maindata/${provider.provider.selectedAddress}`)
        // const userData = await fetch(`http://127.0.0.1:8000/maindata/${provider.provider.selectedAddress}`)
        const userJson = await userData.json()
        setUserData(userJson)
      }catch {
        console.log("Failed to update block number")
      }


    }
    load()
  },[timerState])
  async function lendEth(inputAmount){

    try{
      let web3;
      if(window.ethereum){
          web3 = new Web3(window.ethereum)
          await window.ethereum.enable()
      } else if(window.web3){
          web3 = new Web3(window.web3.currentProvider)
      }
          const lendingPool = new web3.eth.Contract(LendingPoolABI,addresses["lendingpool"])
          
          await lendingPool.methods.lendEth().send({value:inputAmount,from:window.web3.currentProvider.selectedAddress})
          
          setTxPending(false)
  
      } catch {
        setTxPending(false)
      }
  }

  async function unstakeEth(inputAmount){
    if(inputAmount <1) return
    try{
      let web3;
      if(window.ethereum){
          web3 = new Web3(window.ethereum)
          await window.ethereum.enable()
      } else if(window.web3){
          web3 = new Web3(window.web3.currentProvider)
      }
          const lendingPool = new web3.eth.Contract(LendingPoolABI,addresses["lendingpool"])
          await lendingPool.methods.withdrawLentEth(inputAmount).send({value:0,from:window.web3.currentProvider.selectedAddress})
          
          setTxPending(false)
  
      } catch {
        setTxPending(false)
      }
  }
  async function requestRevenue(){

    try{
      let web3;
      if(window.ethereum){
          web3 = new Web3(window.ethereum)
          await window.ethereum.enable()
      } else if(window.web3){
          web3 = new Web3(window.web3.currentProvider)
      }
          const rewardContract = new web3.eth.Contract(RewardsABI,addresses["rewardContract"])
          await rewardContract.methods.requestReward().send({value:0,from:window.web3.currentProvider.selectedAddress})
          
          setTxPending(false)
  
      } catch {
        setTxPending(false)
      }
  }



  async function stakeOpera(amount){
    try{
      let web3;
      if(window.ethereum){
          web3 = new Web3(window.ethereum)
          await window.ethereum.enable()
      } else if(window.web3){
          web3 = new Web3(window.web3.currentProvider)
      }
      const operaTokenContract = new web3.eth.Contract(OperaTokenABI,addresses["operaToken"])
      const stakingContract = new web3.eth.Contract(StakingABI,addresses["stakingContract"])
            const allowanced = await operaTokenContract.methods.allowance(provider.provider.selectedAddress,addresses["stakingContract"]).call()
            console.log(allowanced)
            console.log(amount)
            if(allowanced >= amount){
              console.log("Enough allowance")
              await stakingContract.methods.stakeTokens(amount).send({value:0,from:window.web3.currentProvider.selectedAddress})
          
            } else {
              console.log("Not enough allowance")
              await operaTokenContract.methods.approve(addresses["stakingContract"],amount).send({value:0,from:window.web3.currentProvider.selectedAddress})

            }


          
          setTxPending(false)
  
      } catch {
        console.log("failed")
        setTxPending(false)
      }
  }



  async function connectWallet(){
      try{
      let web3Modal = new Web3Modal( {
        cacheProvider:false,
        providerOptions
      })
      const web3ModalInstance = await web3Modal.connect()
      const web3ModalProvider = await  new ethers.providers.Web3Provider(web3ModalInstance)
      const balance = await web3ModalProvider.getBalance(web3ModalProvider.provider.selectedAddress)

      setUserBalance(parseInt(balance._hex))
      setTimerState(1)
      setProvider(web3ModalProvider)
      setAddressOfUser(web3ModalProvider.provider.selectedAddress)
      // const userData = await fetch(`http://127.0.0.1:8000/maindata/${web3ModalProvider.provider.selectedAddress}`)
      const userData = await fetch(`https://lendertest.herokuapp.com/maindata/${web3ModalProvider.provider.selectedAddress}`)
      const userJson = await userData.json()
      setUserData(userJson)

    } catch(error){
      console.error(error)
    }
  }
  return (
    <div className="lg:flex">
      <button onClick={sideBarHandler} className=" absolute top-[50px] left-5 lg:hidden">
        <img
          src={menu}
          className="w-5"
          alt=""
        />
      </button>
      {/* small device */}
      <div
        className={`${
          sideBarOn ? "block" : "hidden"
        } lg:hidden backdrop-blur-sm bg-white/10 absolute top-0 bottom-[-100%] right-0 left-0 z-50`}
      >
        <section className="w-[305px] bg-black relative">
          <button onClick={sideBarHandler} className="absolute right-4 top-4">
            <img src={cross} className="w-5" alt="" />
          </button>
          <img
            className="w-[145px] lg:mt-11 pt-11 lg:pt-0 ml-[36px]"
            src={logo}
            alt=""
          />
          <div className="w-[188px] h-[1px] bg-[#4E4E4E] ml-[25px] mt-[33px] mb-9"></div>

          <div className="flex flex-col justify-between h-screen lg:h-[90%]">
            <div className="ml-[31px]">
              <p className="text-[#AAAAAA] text-[13px] mb-[21px]">MENU</p>
              <ul className="grid gap-[23px]">
                <li>
                  <Link
                    className="text-white text-lg leading-6 tracking-[0.1em]"
                    to="/stake"
                  >
                    Stake
                  </Link>
                </li>
                {/* <li>
                  <Link className="text-white text-lg leading-6 tracking-[0.1em]">
                    Earn{" "}
                    <small className="text-[#59FF56] text-[10px] ml-2">
                      NEW!
                    </small>
                  </Link>
                </li> */}
                <li>
                  <Link
                    to="launchToken"
                    className="text-white text-lg leading-6 tracking-[0.1em]"
                  >
                    Launch Token{" "}
                    <small className="text-[#59FF56] text-[10px] ml-2">
                      NEW!
                    </small>
                  </Link>
                </li>
                {/* <li>
                  <Link
                    to="governance"
                    className="text-white text-lg leading-6 tracking-[0.1em]"
                  >
                    Governance
                  </Link>
                </li>
                <li>
                  <Link className="text-white text-lg leading-6 tracking-[0.1em] flex items-center gap-[6px]">
                    DAO <img src={checkIcon} alt="" />
                  </Link>
                </li>
                <li>
                  <Link className="text-white text-lg leading-6 tracking-[0.1em]">
                    $OPERA
                  </Link>
                </li> */}
              </ul>
            </div>
            <div className="ml-[24px]">
              {/* <p className="text-[12px] leading-4 text-[#AAAAAA] flex items-center gap-1 ">
                <img src={fual} alt="" />
                3 GWEI
              </p> */}
              <div className="w-[188px] h-[1px] bg-[#4E4E4E] mt-[15px] mb-[14px]"></div>
              <p className="text-[13px] leading-6 text-[#AAAAAA] tracking-[0.1em] font-[275]">
                Latest Block
              </p>
              <p className="text-[18px] tracking-[0.1em] font-medium">
                #{blockNumber}
              </p>

              <div className="flex items-center gap-3 mt-[26px] mb-10">
                <a href="https://twitter.com/operaprotocol" target="blank">
                  <img src={twitter} alt="" />
                </a>
                <Link>
                  <img src={discord} alt="" />
                </Link>
                <Link>
                  <img src={m} alt="" />
                </Link>
                <Link>
                  <img src={github} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* large device */}
      <section className="w-[305px] hidden lg:block">
        <img className="w-[145px] mt-11 ml-[36px]" src={logo} alt="" />
        <div className="w-[188px] h-[1px] bg-[#4E4E4E] ml-[25px] mt-[33px] mb-9"></div>

        <div className="flex flex-col justify-between h-[90%]">
          <div className="ml-[31px]">
            <p className="text-[#AAAAAA] text-[13px] mb-[21px]">MENU</p>
            <ul className="grid gap-[23px]">
              <li>
                <Link
                  className="text-white text-lg leading-6 tracking-[0.1em]"
                  to="/stake"
                >
                  Stake
                </Link>
              </li>
              {/* <li>
                <Link className="text-white text-lg leading-6 tracking-[0.1em]">
                  Earn{" "}
                  <small className="text-[#59FF56] text-[10px] ml-2">
                    NEW!
                  </small>
                </Link>
              </li> */}
              <li>
                <Link
                  to="launchToken"
                  className="text-white text-lg leading-6 tracking-[0.1em]"
                >
                  Launch Token{" "}
                  <small className="text-[#59FF56] text-[10px] ml-2">
                    NEW!
                  </small>
                </Link>
              </li>
              {/* <li>
                <Link
                  to="governance"
                  className="text-white text-lg leading-6 tracking-[0.1em]"
                >
                  Governance
                </Link>
              </li> */}
              {/* <li>
                <Link className="text-white text-lg leading-6 tracking-[0.1em] flex items-center gap-[6px]">
                  DAO <img src={checkIcon} alt="" />
                </Link>
              </li>
              <li>
                <Link className="text-white text-lg leading-6 tracking-[0.1em]">
                  $OPERA
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="ml-[24px]">
            {/* <p className="text-[12px] leading-4 text-[#AAAAAA] flex items-center gap-1 ">
              <img src={fual} alt="" />
              3 GWEI
            </p> */}
            <div className="w-[188px] h-[1px] bg-[#4E4E4E] mt-[15px] mb-[14px]"></div>
            <p className="text-[13px] leading-6 text-[#AAAAAA] tracking-[0.1em] font-[275]">
              Latest Block
            </p>
            <p className="text-[18px] tracking-[0.1em] font-medium">
              #{blockNumber}
            </p>

            <div className="flex items-center gap-3 mt-[26px] mb-10">
            <a href="https://twitter.com/operaprotocol" target="blank">
                  <img src={twitter} alt="" />
                </a>
              <Link>
                <img src={discord} alt="" />
              </Link>
              <Link>
                <img src={m} alt="" />
              </Link>
              <Link>
                <img src={github} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">

          <Outlet context={{ stakeOpera,userStakedAmount,userOperaBalance,requestRevenue,blockNumber,unstakeEth,lendEth,txPending,userData,userBalance,connectWallet, addressOfUser}} />

      </section>
    </div>
  );
};

export default Main;
