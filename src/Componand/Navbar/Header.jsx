

const Header = () => {
  return (
<>
<div className="bg-hadercolor py-4">
      <div className="container text-white">
        <div className="flex items-center">
          <div className="w-[125%] xl:w-[250%] lg:w-[325%] md:w-[210%] sm:w-[212%] md:flex items-center gap-[54px]">
            <div className="flex gap-x-[5px] sm:mb-[10px] md:mb-0 items-center md:after:content-[''] md:relative md:after:absolute md:after:top-1 md:after:right-[-27px] md:after:w-0.5 md:after:h-4 md:after:bg-[#5C6A92]">
              <img src="src/assets/message.svg" alt="" />
              <h1 className="font-popping text-xs font-normal">mail@yourcompany.com</h1>
            </div>
            <div className="flex gap-x-[5px] items-center">
              <img src="src/assets/phone.svg" alt="" />
              <h1 className="font-popping text-xs font-normal">+896 120 5889 (Toll free)</h1>
            </div>
          </div>
          <div className="w-1/4 md:w-[30%] sm:w-[40%] ssm:w-[32%]">
            <div className='flex flex-wrap items-center gap-[9px] xl:gap-[19px] lg:gap-[5px] md:gap-[8px] sm:gap-[9px] ssm:gap-x-[5px]'>
             <img src="src/assets/facebook-f.svg" alt="facebook" />
             <img src="src/assets/twitter.svg" alt="twitter" />
             <img src="src/assets/linkedin-in.svg" alt="linkedin" />
             <img src="src/assets/instagram.svg" alt="instagram" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='bg-[#FFB800] py-[3px] border-black border-y-2'></div>
</>
  );
};

export default Header;
