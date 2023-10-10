const Ourservice = () => {
  return (
    <div className="mt-[28px]">
      <div className="lg:flex">
        <div className="lg:w-1/2 flex justify-end items-center">
          <div className="lg:mr-[61px] mr-[15px] sm:mr-[23%] sm:mb-[5%]">
            <h3 className="font-popping lg:text-[64px] text-[40px] font-bold">
              Our Services
            </h3>
            <p className="md:text-base text-[14px] font-popping text-[#6C6C6C] font-medium md:w-[405px] w-[364px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="bg-our bg-cover bg-no-repeat bg-center">
            <div className=" w-full h-full pt-[147px] pb-[139px] bg-overlay">
              <div className="ml-[116px]">
                <h3 className="font-popping lg:text-[36px] text-[20px] font-bold text-white mb-[33px]">
                  Modern natural oil and gas refineries.
                </h3>
                <a
                  href=""
                  className="lg:py-[14px] py-[10px] lg:px-[30px] px-[20px] bg-Primary font-popping text-white text-base font-medium"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourservice;
