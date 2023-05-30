import { Link } from "react-router-dom";
import ethereum3 from "../assets/icons/ethereum3.png";

const LaunchModal = ({ modalHandler }) => {
  return (
    <div
      className="absolute top-0 backdrop-blur-sm bg-black/10 bottom-[-100%] right-0 left-0"
      onClick={modalHandler}
    >
      <div className="bg-black lg:w-[578px] mx-auto mt-[150px] pt-[50px] pb-[25px] border border-slate-900 rounded-[15px]">
        <img
          className="mx-auto animate-spin rounded-full mb-3"
          src={ethereum3}
          alt=""
        />
        <p className="text-[22px] text-center tracking-[0.075em] font-medium">
          YOUR TOKEN IS
          <br />
          NOW LIVE! 🥳
        </p>
        <p className="text-[8px] text-center mt-[7px] tracking-[0.075em]">
          GO TO <Link className="font-semibold underline">ETHERSCAN</Link> TO
          SEE THE DEPLOYMENT TXN.
        </p>

        <p className="text-[22px] font-bold tracking-[0.075em] text-center my-[55px]">
          SHARK INU
        </p>
        <p className="text-white text-center text-[10px] tracking-[0.075em]">
          YOU CAN NOW CLOSE THIS POPUP AND MANAGE YOUR TOKEN
          <br />
          VIA ETHERSCAN.{" "}
          <span className="text-[#59FF56]">YOU STILL MUST ENABLE TRADING.</span>
        </p>
      </div>
    </div>
  );
};

export default LaunchModal;
