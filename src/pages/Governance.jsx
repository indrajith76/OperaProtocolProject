import ethereum from "../assets/icons/ethereum.png";
import arrow from "../assets/icons/arrow.png";
import { Link } from "react-router-dom";

const Governance = () => {
  return (
    <section>
      <div className="flex justify-between items-center pt-[44px] pb-[30px] pr-[50px]">
        <h4 className="text-[24px] ml-14 lg:ml-0 tracking-[0.075em]">
          Governance
        </h4>
        <div className="flex items-center">
          <img src={ethereum} className="hidden lg:block" alt="" />
          <Link className="flex items-center text-[10px] lg:text-[20px] text-[#85F983] bg-[#1A2218] pl-4 pr-4 rounded-2xl ml-1">
            0x09C73BCR4...{" "}
            <img src={arrow} className="w-[10px] lg:w-[27px]" alt="" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:mr-[50px]">
        <div className="pt-[28px] px-[18px] pb-[32px] bg-black rounded-[15px]">
          <p className="text-[#AAAAAA] text-[15px] tracking-[0.075em] ml-[10px]">
            LIQUIDITY USAGE
          </p>
          <p className="text-[31px] ml-[10px]">
            100 ETH IN <br />
            DAO POOL
          </p>
          <p className="text-[18px] text-[#AAAAAA] font-medium tracking-[0.075em] ml-[10px]">
            70 LENDERS
          </p>

          <div className="w-full h-[11px] bg-[#5A5A5A] rounded-[17px] overflow-hidden mt-14">
            <div className="bg-[#D9D9D9] h-full w-[35%]"></div>
          </div>
          <p className="text-[15px] text-[#AAAAAA] tracking-[0.075em] mt-[11px] mb-[63px] ml-[10px]">
            27 ETH BEING USED
          </p>
          <button className="bg-white text-black w-[182px] h-[25px] font-semibold text-[14px] tracking-[0.0185em] rounded-[13px] ml-[10px]">
            ALL PROJECTS
          </button>
        </div>

        <div className="pt-[28px] px-[28px] pb-[32px] bg-black rounded-[15px]">
          <p className="text-[#AAAAAA] text-[15px] tracking-[0.075em]">
            POOL HEALTH
          </p>
          <p className="text-[22px]">1,542 ETH ALL-TIME</p>
          <p className="text-[11px] text-[#AAAAAA] font-medium tracking-[0.075em]">
            2,040 LENDERS PAID
          </p>

          <p className="text-[#AAAAAA] text-[15px] tracking-[0.075em] mt-[45px]">
            CURRENT DAO REVENUE
          </p>
          <p className="text-[22px]">
            7.55 ETH PER DAY <span className="text-[15px]">approx.</span>{" "}
          </p>

          <p className="text-[22px] font-medium tracking-[0.075em] mt-[37px] mb-[30px]">
            27% OF DAO FUNDS
            <br />
            ARE BEING USED.
          </p>
          <button className="bg-white text-black w-[182px] h-[25px] font-semibold text-[14px] tracking-[0.0185em] rounded-[13px]">
            LEND NOW
          </button>
        </div>

        <div className="pt-[28px] px-[28px] pb-[32px] bg-black rounded-[15px]">
          <p className="text-[#AAAAAA] text-[15px] tracking-[0.075em]">
            OVERALL PERFORMANCE
          </p>
          <p className="text-[29px] font-medium mt-5">200 - 300</p>
          <p className="text-[15px] text-[#AAAAAA] tracking-[0.075em]">
            TOTAL PROJECTS FUNDED
          </p>

          <div className="flex gap-5 mt-[35px] mb-[60px]">
            <div className="border pt-[59px] pl-[7px] pb-[6px] rounded-[6px] w-[101px]">
              <p className="text-[9px]">
                77
                <br />
                PROJECTS
                <br />
                ALIVE NOW
              </p>
            </div>
            <div className="border pt-[59px] pl-[7px] pb-[6px] rounded-[6px] w-[101px]">
              <p className="text-[9px]">
                700+
                <br />
                PEOPLE HAVE
                <br />
                USED OPERA
              </p>
            </div>
            <div className="border pt-[59px] pl-[7px] pb-[6px] rounded-[6px] w-[101px]">
              <p className="text-[9px]">
                1,500+
                <br />
                TOTAL ETH
                <br />
                LENT
              </p>
            </div>
          </div>
          <button className="bg-white text-black w-[182px] h-[25px] font-semibold text-[14px] tracking-[0.0185em] rounded-[13px]">
            ALL PROJECTS
          </button>
        </div>
      </div>

      <div className="mt-[43px]">
        <p className="text-[24px] tracking-[0.075em] mb-9">
          VOTE TO RETURN LIQUIDITY
        </p>
        <div className="overflow-scroll">
          <table className="mr-[50px] border-separate border-spacing-y-[13px]">
            <thead>
              <tr>
                <th className="text-[#AAAAAA] text-[15px] tracking-[0.075em] font-normal text-left pl-[18px]">
                  NAME
                </th>
                <th className="text-[#AAAAAA] text-[15px] tracking-[0.075em] font-normal text-left">
                  SYMBOL
                </th>
                <th className="text-[#AAAAAA] text-[15px] tracking-[0.075em] font-normal text-left">
                  MARKETCAP
                </th>
                <th className="text-[#AAAAAA] text-[15px] tracking-[0.075em] font-normal">
                  TOTAL VOLUME
                </th>
                <th className="text-[#AAAAAA] text-[15px] tracking-[0.075em] font-normal">
                  VOTE
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-black">
                <td className="text-xl tracking-[0.075em] py-[18px] pl-[18px]  rounded-tl-[6px] rounded-bl-[6px] w-[25%]">
                  0xMafia
                </td>
                <td className="text-[#828282] text-[14px] tracking-[0.075em]  w-[16.6%]">
                  MAFIA
                </td>
                <td className="text-[16px] tracking-[0.075em]  w-[16.6%]">
                  $1,976
                </td>
                <td className="text-[16px] tracking-[0.075em] pl-10 w-[16.6%]">
                  $200k
                </td>
                <td className="pl-10 w-[16.6%]">
                  <button className="bg-transparent border rounded-[6px] w-[119px] text-[14px] font-semibold tracking-[0.185em]">
                    VOTE
                  </button>
                </td>
                <td className=" w-[16.6%] pl-10 text-[12px] font-semibold tracking-[0.185em] pr-[18px] rounded-tr-[6px] rounded-br-[6px]">
                  VETO
                </td>
              </tr>
              <tr className="bg-black">
                <td className="text-xl tracking-[0.075em] py-[18px] pl-[18px]  rounded-tl-[6px] rounded-bl-[6px] w-[25%]">
                  0xMafia
                </td>
                <td className="text-[#828282] text-[14px] tracking-[0.075em]  w-[16.6%]">
                  MAFIA
                </td>
                <td className="text-[16px] tracking-[0.075em]  w-[16.6%]">
                  $1,976
                </td>
                <td className="text-[16px] tracking-[0.075em] pl-10 w-[16.6%]">
                  $200k
                </td>
                <td className="pl-10 w-[16.6%]">
                  <button className="bg-transparent border rounded-[6px] w-[119px] text-[14px] font-semibold tracking-[0.185em]">
                    VOTE
                  </button>
                </td>
                <td className=" w-[16.6%] pl-10 text-[12px] font-semibold tracking-[0.185em] pr-[18px] rounded-tr-[6px] rounded-br-[6px]">
                  VETO
                </td>
              </tr>
              <tr className="bg-black">
                <td className="text-xl tracking-[0.075em] py-[18px] pl-[18px]  rounded-tl-[6px] rounded-bl-[6px] w-[25%]">
                  0xMafia
                </td>
                <td className="text-[#828282] text-[14px] tracking-[0.075em]  w-[16.6%]">
                  MAFIA
                </td>
                <td className="text-[16px] tracking-[0.075em]  w-[16.6%]">
                  $1,976
                </td>
                <td className="text-[16px] tracking-[0.075em] pl-10 w-[16.6%]">
                  $200k
                </td>
                <td className="pl-10 w-[16.6%]">
                  <button className="bg-transparent border rounded-[6px] w-[119px] text-[14px] font-semibold tracking-[0.185em]">
                    VOTE
                  </button>
                </td>
                <td className=" w-[16.6%] pl-10 text-[12px] font-semibold tracking-[0.185em] pr-[18px] rounded-tr-[6px] rounded-br-[6px]">
                  VETO
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Governance;
