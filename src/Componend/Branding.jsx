import brandinglogo1 from "../assets/brandinglogo1.png";
import brandinglogo2 from "../assets/brandinglogo2.png";
import brandinglogo3 from "../assets/brandinglogo3.png";
import brandinglogo4 from "../assets/brandinglogo4.png";

const Branding = () => {
  return (
    <div className="container">
      <div className="md:flex md:py-[116px] sm:pl-[160px] py-[20px] md:pl-0 pl-[60px] items-center gap-[65px] justify-center">
        <img src={brandinglogo1} alt="" />
        <img src={brandinglogo2} alt="" />
        <img src={brandinglogo3} alt="" />
        <img src={brandinglogo4} alt="" />
      </div>
    </div>
  );
};

export default Branding;
