import ethereum from "../assets/icons/ethereum.png";
import ethereum2 from "../assets/icons/ethereum2.png";
import arrow from "../assets/icons/arrow.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import OperaStakeModal from "../components/OperaStakeModal";

const Stake = () => {
  const [modalOn, setModalOn] = useState(false);

  const modalHandler = () => {
    setModalOn(!modalOn);
  };

  return (
    <section>
      <div className="flex justify-between items-center pt-[44px] pb-[30px] pr-[50px]">
        <h4 className="lg:text-[24px] ml-14 lg:ml-0 tracking-[0.075em]">
          STAKE $OPERA AND ETH
        </h4>
        <div className="flex items-center">
          <img src={ethereum} className="hidden lg:block" alt="" />
          <Link className="flex items-center text-[10px] lg:text-[20px] text-[#85F983] bg-[#1A2218] pl-4 pr-4 rounded-2xl ml-1">
            0x09C73BCR4...{" "}
            <img src={arrow} className="w-[10px] lg:w-[27px]" alt="" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:pr-[50px]">
        <div className="bg-[#000000] p-[18px] pb-[45px] pl-[28px] rounded-[15px]">
          <p className="flex justify-between text-[#AAAAAA]">
            STAKE <span className="text-[8px]">CHANGE NETWORK</span>
          </p>
          <p className="text-[22px] leading-[30px] mb-14">ETHEREUM</p>

          <div className="relative lg:w-[434px]">
            <img
              className="absolute w-[19px] h-[19px] mt-[19px] ml-[10px]"
              src={ethereum}
              alt=""
            />
            <p className="absolute right-0 flex top-5 text-[10px] text-[#59FF56] mr-4">
              MAX
            </p>
            <input
              type="text"
              className="border border-white bg-black text-[22px] p-[13px] pl-[35px] w-full lg:w-[434px] rounded-[11px]"
              defaultValue="1"
            />
          </div>
          <p className="text-[#828282] mt-[6px] text-[10px] mb-[60px]">
            WALLET BALANCE: <span className="text-white">5.32 ETH</span>
          </p>

          <p className="text-[#828282] mt-[6px] text-[10px] mb-[8px]">
            PROJECTED DAILY YIELD:{" "}
            <span className="text-white">0.04 ETH ($72.83 USD)</span>
          </p>
          <p className="text-[#828282] mt-[6px] text-[10px] flex items-center gap-1 mb-8">
            STAKED BALANCE:
            <span className="text-white flex items-center gap-1">
              0.04 ETH ($72.83 USD)2.65{" "}
              <img src={arrow} className="w-[8px] h-2" alt="" /> 3.65 ETH
            </span>
          </p>
          <button
            onClick={modalHandler}
            className="pl-[47px] pr-[47px] pt-[2px] pb-[3px] border border-white rounded-[13px] mb-[13px]"
          >
            STAKE
          </button>
          <p className="text-[10px]">
            YOU MUST STAKE $OPERA + ETH TO JOIN OUR DAO AND LEND.
            <br />
            THE CURRENT MINIMUM IS 1 ETH.
          </p>
        </div>

        <div className="bg-[#000000] p-[18px] pb-[45px] pl-[28px] rounded-[15px]">
          <p className="flex justify-between text-[#AAAAAA]">
            STAKE <span className="text-[8px]">CHANGE NETWORK</span>
          </p>
          <p className="text-[22px] leading-[30px]">OPERA</p>
          <p className="text-[#AAAAAA] text-[8px] mb-14">ETHEREUM NETWORK</p>
          <div className="relative lg:w-[434px]">
            <img
              className="absolute w-7 h-w-7 mt-[15px] ml-[10px]"
              src={ethereum2}
              alt=""
            />
            <p className="absolute right-0 flex top-5 text-[10px] text-[#59FF56] mr-4">
              MAX
            </p>
            <input
              type="text"
              className="border border-white bg-black text-[22px] p-[13px] pl-[44px] w-full lg:w-[434px] rounded-[11px]"
              defaultValue="1"
            />
          </div>
          <p className="text-[#828282] mt-[6px] text-[10px] mb-[60px]">
            WALLET BALANCE: <span className="text-white">5.32 ETH</span>
          </p>

          <p className="text-[#828282] mt-[6px] text-[10px] mb-[8px]">
            PROJECTED DAILY YIELD:{" "}
            <span className="text-white">0.04 ETH ($72.83 USD)</span>
          </p>
          <p className="text-[#828282] mt-[6px] text-[10px] flex items-center gap-1 mb-8">
            STAKED BALANCE:
            <span className="text-white flex items-center gap-1">
              0.04 ETH ($72.83 USD)2.65{" "}
              <img src={arrow} className="w-[8px] h-2" alt="" /> 3.65 ETH
            </span>
          </p>
          <button className="pl-[47px] pr-[47px] pt-[2px] pb-[3px] border border-white rounded-[13px] mb-[13px]">
            STAKE
          </button>
          <p className="text-[10px]">
            YOU MUST STAKE $OPERA + ETH TO JOIN OUR DAO AND LEND.
            <br />
            THE CURRENT MINIMUM IS 1 ETH.
          </p>
        </div>
      </div>
      <p className="text-[10px] tracking-[0.075em] mt-[27px] mb-[67px]">
        <span className="text-[#828282]">NOTE:</span> YIELD FROM NORMAL STAKING
        COMES FROM OPERA TRADING FEES AND TOKEN EMISSIONS.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:pr-[50px]">
        <div className="bg-black pt-[25px] pl-[28px] pb-[17px] pr-[14px] rounded-[15px]">
          <p className="text-[#AAAAAA] text-[15px] tracking-[0.075em]">
            TOTAL STAKED FUNDS
          </p>
          <p className="text-[22px] tracking-[0.075em] mb-[31px]">
            $400,104.92 USD
          </p>
          <p className="text-15px] text-[#AAAAAA]  tracking-[0.075em]">
            YOUR SHARE
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[22px] tracking-[0.075em]">1.2%</p>
              <p className="text-[10px]">
                <span className="text-[#AAAAAA]">VALUE:</span> 2.65 ETH
                ($4801.25 USD)
              </p>
            </div>
            <button className="pl-[47px] pr-[47px] pt-[2px] pb-[2px] border border-white rounded-[13px] mb-[13px]">
              UNSTAKE
            </button>
          </div>
        </div>

        <div className="bg-black pt-[25px] pl-[28px] pb-[17px] pr-[14px] rounded-[15px]">
          <p className="text-[#AAAAAA] text-[15px] tracking-[0.075em]">
            CURRENT DAILY YIELD
          </p>
          <p className="text-[22px] tracking-[0.075em] mb-[31px]">$64.22 USD</p>
          <p className="text-15px] text-[#AAAAAA]  tracking-[0.075em]">
            CLAIMABLE
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[22px] tracking-[0.075em]">$545.54 USD</p>
              <p className="text-[10px]">
                <span className="text-[#AAAAAA]">TOTAL STAKED ETH VALUE:</span>{" "}
                2.65 ETH ($4801.25 USD)
              </p>
            </div>
            <button className="pl-[47px] pr-[47px] pt-[2px] pb-[2px] border border-white rounded-[13px] mb-[13px]">
              CLAIM
            </button>
          </div>
        </div>
      </div>
      {modalOn && (
        <OperaStakeModal modalHandler={modalHandler} />
      )}
    </section>
  );
};

export default Stake;
