import slid1 from "../assets/slid_1.svg";
import slid2 from "../assets/slid_2.svg";
import slid3 from "../assets/slid_3.svg";
import slid4 from "../assets/slid_4.svg";

const Slide = () => {
  return (
    <div className="md:flex justify-center md:gap-x-[30px] overflow-hidden">
      <img className="sm:w-full" src={slid1} alt="" />
      <img className="sm:w-full" src={slid2} alt="" />
      <img className="sm:w-full" src={slid3} alt="" />
      <img className="sm:w-full" src={slid4} alt="" />
    </div>
  );
};

export default Slide;
