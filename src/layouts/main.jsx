import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import checkIcon from "../assets/icons/checkIcon.png";
import fual from "../assets/icons/fual.png";
import twitter from "../assets/icons/twitter.png";
import discord from "../assets/icons/discord.png";
import m from "../assets/icons/m.png";
import github from "../assets/icons/github.png";
import cross from "../assets/icons/cross.png";
import { useState } from "react";
import menu from "../assets/icons/menu.png";

const Main = () => {
  const [sideBarOn, setSideBarOn] = useState(false);

  const sideBarHandler = () => {
    setSideBarOn(!sideBarOn);
  };

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
                <li>
                  <Link className="text-white text-lg leading-6 tracking-[0.1em]">
                    Earn{" "}
                    <small className="text-[#59FF56] text-[10px] ml-2">
                      NEW!
                    </small>
                  </Link>
                </li>
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
                <li>
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
                </li>
              </ul>
            </div>
            <div className="ml-[24px]">
              <p className="text-[12px] leading-4 text-[#AAAAAA] flex items-center gap-1 ">
                <img src={fual} alt="" />
                52 GWEI
              </p>
              <div className="w-[188px] h-[1px] bg-[#4E4E4E] mt-[15px] mb-[14px]"></div>
              <p className="text-[13px] leading-6 text-[#AAAAAA] tracking-[0.1em] font-[275]">
                Latest Block
              </p>
              <p className="text-[18px] tracking-[0.1em] font-medium">
                #20039529
              </p>

              <div className="flex items-center gap-3 mt-[26px] mb-10">
                <Link>
                  <img src={twitter} alt="" />
                </Link>
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
              <li>
                <Link className="text-white text-lg leading-6 tracking-[0.1em]">
                  Earn{" "}
                  <small className="text-[#59FF56] text-[10px] ml-2">
                    NEW!
                  </small>
                </Link>
              </li>
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
              <li>
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
              </li>
            </ul>
          </div>
          <div className="ml-[24px]">
            <p className="text-[12px] leading-4 text-[#AAAAAA] flex items-center gap-1 ">
              <img src={fual} alt="" />
              52 GWEI
            </p>
            <div className="w-[188px] h-[1px] bg-[#4E4E4E] mt-[15px] mb-[14px]"></div>
            <p className="text-[13px] leading-6 text-[#AAAAAA] tracking-[0.1em] font-[275]">
              Latest Block
            </p>
            <p className="text-[18px] tracking-[0.1em] font-medium">
              #20039529
            </p>

            <div className="flex items-center gap-3 mt-[26px] mb-10">
              <Link>
                <img src={twitter} alt="" />
              </Link>
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
        <Outlet />
      </section>
    </div>
  );
};

export default Main;
