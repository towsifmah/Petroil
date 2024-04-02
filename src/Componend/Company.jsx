const Company = () => {
  return (
    <div className="bg-[#F0F0F0]">
      <div className="container">
        <div className="md:flex items-center justify-center py-[100px] px-[70px]">
          <p className="w-[35%] bg-Primary text-white md:text-[36px] text-[20px] font-bold font-popping md:px-[70px] sm:px-[141px] md:py-[50px] sm:py-[50px]">
            Learn more about our company
          </p>
          <div className="bg-company object-cover bg-no-repeat w-[65%]">
            <div className="flex items-center justify-center py-[105px]">
              <a className="py-[14px] px-[30px] bg-white text-Primary hover:bg-Primary hover:text-white duration-300 cursor-pointer text-base font-popping font-semibold">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
