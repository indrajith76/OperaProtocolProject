import ethereum from "../assets/icons/ethereum.png";
import arrow from "../assets/icons/arrow.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import LaunchModal from "../components/LaunchModal";

const LaunchToken = () => {
  const [modalOn, setModalOn] = useState(false);

  const modalHandler = () => {
    setModalOn(!modalOn);
  };

  return (
    <section>
      <div className="flex justify-between items-center pt-[44px] pb-[30px] pr-[50px]">
        <h4 className="text-[20px] lg:text-[24px] ml-14 lg:ml-0 tracking-[0.075em]">Launch Token</h4>
        <div className="flex items-center">
          <img src={ethereum} className="hidden lg:block" alt="" />
          <Link className="flex items-center text-[10px] lg:text-[20px] text-[#85F983] bg-[#1A2218] pl-4 pr-4 rounded-2xl ml-1">
            0x09C73BCR4...{" "}
            <img src={arrow} className="w-[10px] lg:w-[27px]" alt="" />
          </Link>
        </div>
      </div>

      <div className="bg-black pt-[27px] pb-[57px] pl-[30px] pr-[30px] lg:mr-[50px] rounded-[15px]">
        <ul className="flex flex-wrap items-center gap-4 lg:gap-8">
          <li className="text-[15px]">🚀 Opera Trending</li>
          <li className="text-[9px] tracking-[0.075em]">
            #1{" "}
            <Link className="text-white hover:text-[#9847FF]">SHARKBITE</Link>
          </li>
          <li className="text-[9px] tracking-[0.075em]">
            #2 <Link className="text-white hover:text-[#9847FF]">bingAI</Link>
          </li>
          <li className="text-[9px] tracking-[0.075em]">
            #3{" "}
            <Link className="text-white hover:text-[#9847FF]">PAPA POWELL</Link>
          </li>
          <li className="text-[9px] tracking-[0.075em]">
            #4{" "}
            <Link className="text-white hover:text-[#9847FF]">MIAMICOIN</Link>
          </li>
          <li className="text-[9px] tracking-[0.075em]">
            #5{" "}
            <Link className="text-white hover:text-[#9847FF]">BEGONE THOT</Link>
          </li>
          <li className="text-[9px] tracking-[0.075em]">
            #6{" "}
            <Link className="text-white hover:text-[#9847FF]">
              JEKYL FINANCE
            </Link>
          </li>
        </ul>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <label htmlFor="" className="text-[15px]">
              Token Type (Smart Contract)
            </label>
            <select
              name=""
              id=""
              className="text-[#696969] w-full h-[37px] block mt-[14px] bg-black border rounded-[6px] text-[11px] px-[10px]"
            >
              <option value="">Normal Token</option>
            </select>
            <p className="text-[9px] ml-[10px] mt-[5px] mb-[13px]">
              Cost: 0.1 ETH
            </p>

            <label htmlFor="" className="text-[15px]">
              Name
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Pepe Coin"
              className="text-[#696969] w-full h-[37px] block mt-[14px] mb-[30px] bg-black border rounded-[6px] text-[11px] px-[10px]"
            />

            <label htmlFor="" className="text-[15px]">
              Symbol (Don’t use the “$”)
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Pepe"
              className="text-[#696969] w-full h-[37px] block mt-[14px] mb-[30px] bg-black border rounded-[6px] text-[11px] px-[10px]"
            />
            <label htmlFor="" className="text-[15px]">
              Decimals
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="9"
              className="text-[#696969] w-full h-[37px] block mt-[14px] mb-[30px] bg-black border rounded-[6px] text-[11px] px-[10px]"
            />
            <label htmlFor="" className="text-[15px]">
              Total Supply
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="1,000,000,0009"
              className="text-[#696969] w-full h-[37px] block mt-[14px] mb-[30px] bg-black border rounded-[6px] text-[11px] px-[10px]"
            />
            <label htmlFor="" className="text-[15px]">
              Transaction Tax
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="3%"
              className="text-[#696969] w-full h-[37px] block mt-[14px] mb-[14px] bg-black border rounded-[6px] text-[11px] px-[10px]"
            />

            <div className="flex  items-center gap-[47px]">
              <div>
                <input type="checkbox" name="" id="tax" className="mr-[7px]" />
                <label htmlFor="tax">0% tax?</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name=""
                  id="sell-tax"
                  className="mr-[7px]"
                />
                <label htmlFor="sell-tax">Separate buy/sell tax?</label>
              </div>
              <div></div>
            </div>
          </div>

          {/* right */}
          <div>
            <div className="bg-[#000000] pr-[14px] pt-[18px] pb-[18px] rounded-[15px] mb-[60px]">
              <p className="text-[#AAAAAA] text-[15px] tracking-[0.075em] mt-[7px]">
                BORROW LAUNCH LIQUIDITY
              </p>
              <p className="text-[22px] font-medium tracking-[0.075em] mb-[24px]">
                ETHEREUM
              </p>
              <div className="flex items-center gap-1">
                <img src={ethereum} alt="" />
                <div>
                  <p className="text-[22px] font-medium tracking-[0.075em]">
                    + 1 ETH -
                  </p>
                  <p className="text-[13px] text-[#AAAAAA] tracking-[0.075em]">
                    (~$3,612.56 USD)
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center mt-7">
                <p className="text-[10px] text-[#AAAAAA]">
                  WHEN YOU HIT LAUNCH, YOUR TOKEN WILL BE DEPLOYED WITH THE
                  BORROWED ETH.
                </p>
                <div className="flex flex-col items-end gap-[9px]">
                  <Link className="underline text-[8px]">CHANGE NETWORK</Link>
                  <button
                    onClick={modalHandler}
                    className="text-[14px] px-[40px] border-[1px] pt-[1px] rounded-[15px] bg-white text-black font-semibold tracking-[0.185em]"
                  >
                    LAUNCH
                  </button>
                </div>
              </div>
            </div>

            <label htmlFor="" className="text-[15px]">
              Revenue Wallet
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="0x..."
              className="text-[#696969] w-full h-[37px] block mt-[14px] mb-[14px] bg-black border rounded-[6px] text-[11px] px-[10px]"
            />
            <p className="text-[9px] ml-[10px] mt-[5px] mb-[29px]">
              Need a dev wallet?
            </p>
            <label htmlFor="" className="text-[15px]">
              Revenue Wallet
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="0x..."
              className="text-[#696969] w-full h-[37px] block mt-[14px] mb-[14px] bg-black border rounded-[6px] text-[11px] px-[10px]"
            />
          </div>
        </div>
      </div>

      {modalOn && <LaunchModal modalHandler={modalHandler} />}
    </section>
  );
};

export default LaunchToken;
