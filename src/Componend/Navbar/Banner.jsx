const Banner = () => {
  return (
    <div className="bg-bannerImg bg-cover bg-center bg-no-repeat">
      <div className="bg-overlay lg:py-[258px] py-[150px]">
        <div className="container items-center text-white">
          <h1 className="font-popping lg:text-[64px] md:text-[40px] text-[35px] font-bold lg:max-w-[842px] mb-[31px]">
            We exist since 1975 on the oil and gas industry.
          </h1>
          <a
            href=""
            className="lg:py-3.5 lg:px-10 py-2 px-5 bg-Primary font-popping text-base font-semibold hover:bg-transparent hover:border-2 duration-300 ease-in"
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
};
export default Banner;
