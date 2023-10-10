import { MdOutlineArrowForwardIos } from "react-icons/md";

const Card = () => {
  return (
    <div className="bg-[#F0F0F0] pt-[110px] md:pb-[162px] pb-[40px]">
      <div className="container">
        <div className="flex justify-center flex-wrap md:gap-x-[62px] gap-y-[32px]">
          <div className="bg-card1 bg-center bg-cover bg-no-repeat">
            <div className="bg-overlay pt-[75px] pb-[55.28px] pl-[46px] pr-[44px]">
              <h2 className="w-[249px] text-[24px] font-bold font-popping text-white mb-[63px]">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h2>
              <a
                href=""
                className="py-[10px] px-[22px] bg-[#FFFFFF80] text-white text-[12px] font-popping font-semibold hover:bg-transparent duration-300 hover:border"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="bg-card2 bg-center bg-cover bg-no-repeat lg:my-0 my-[10px]">
            <div className="bg-overlay pt-[75px] pb-[55.28px] pl-[46px] pr-[44px]">
              <h2 className="w-[249px] text-[24px] font-bold font-popping text-white mb-[63px]">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h2>
              <a
                href=""
                className="py-[10px] px-[22px] bg-[#FFFFFF80] text-white text-[12px] font-popping font-semibold hover:bg-transparent duration-300 hover:border"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="bg-card3 bg-center bg-cover bg-no-repeat">
            <div className="bg-overlay pt-[75px] pb-[55.28px] pl-[46px] pr-[44px]">
              <h2 className="max-w-[249px] text-[24px] font-bold font-popping text-white mb-[63px]">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h2>
              <a
                href=""
                className="py-[10px] px-[22px] bg-[#FFFFFF80] text-white text-[12px] font-popping font-semibold hover:bg-transparent duration-300 hover:border"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center xl:justify-end sm:justify-center font-bold text-base font-popping text-black mt-[29px]">
          <a href="">MORE FROM THE BLLOG</a>
          <MdOutlineArrowForwardIos />
        </div>
      </div>
    </div>
  );
};

export default Card;
