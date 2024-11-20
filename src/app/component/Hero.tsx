import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="my-[10px] h-[700px] "
      style={{
        background: `url("/Rectangle 2 (1).png")  center / cover`,
      }}
    >
      <div className="container mx-auto  flex flex-row items-center ">
        <div className="w-1/2  text-left mt-[103px] pl-[100px]">
          <h1 className=" text-[64px] leading-[64px] font-[Integral CF] font-bold text-gray-900">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-base font-normal text-[#00000099] mt-[32px]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
          </p>
          <button className="bg-black text-white rounded-[62px] text-[16px] font-medium mt-[32px] 
          px-[54px] py-[16px] w-[210px] h-[52px] hover:bg-black hover:text-white 
          transition-transform duration-200 ease-in transform hover:scale-105
          ">
            Shop Now
          </button>

          <div className="container mt-[48px]  flex  flex-row justify-center items-center space-y-0 space-x-12">
            <div className="text-center w-[141px] h-[74px]">
              <h2 className="text-[40px] font-bold text-gray-900">200+</h2>
              <p className="text-gray-600 text-[16px]">International Brands</p>
            </div>
            <div className="text-center w-[141px] h-[74px]">
              <h2 className="text-[40px] font-bold text-gray-900">2,000+</h2>
              <p className="text-gray-600 text-[16px]">High-Quality Products</p>
            </div>
            <div className="text-center w-[141px] h-[74px]">
              <h2 className="text-[40px] font-bold text-gray-900">30,000+</h2>
              <p className="text-gray-600 text-[16px]">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Image
          src={"/star.png"}
          alt="Star"
          width={104}
          height={104}
          className="absolute right-[5%] top-[35%]"
        />
      </div>

      <div>
        <Image
          src={"/star.png"}
          alt="Star"
          width={56}
          height={56}
          className="absolute left-[52%] top-[75%]"
        />
      </div>

      <div className="bg-black w-full h-[146px] md:h-[122px]  mt-[116px] flex justify-center items-center">
        <div className="grid grid-cols-3 gap-y-4 justify-center md:grid-cols-3 md:gap-y-0 md:flex md:justify-center md:gap-[106px]">
          {/* Row 1: Versace, Zara, Gucci */}
          <div className="col-span-1 flex justify-center ml-[16px] md:ml-0 w-[116px] h-[23px] md:w-[166.48px] md:h-[33.16px]">
            <Image
              src="/versace.png"
              alt="Versace"
              width={166.48}
              height={33.16}
              className="w-full h-full transition-transform duration-200 ease-in transform hover:scale-105"
            />
          </div>

          <div className="col-span-1 flex justify-center  ml-[34px]  md:ml-0 w-[63px] h-[26.65px] md:w-[91px] md:h-[38px]">
            <Image
              src="/zara-logo-1 1.png"
              alt="Zara"
              width={91}
              height={38}
              className="w-full h-full transition-transform duration-200 ease-in transform hover:scale-105"
            />
          </div>

          <div className="col-span-1 flex justify-center w-[109px] h-[25.24px] md:w-[156px] md:h-[36px]">
            <Image
              src="/gucci-logo-1 1.png"
              alt="Gucci"
              width={156}
              height={36}
              className="w-full h-full transition-transform duration-200 ease-in transform hover:scale-105"
            />
          </div>

          {/* Row 2: Prada, Calvin Klein */}
          <div className="col-span-1 flex justify-center w-[127px] h-[21px] ml-[48px]  md:ml-0 md:w-[194px] md:h-[32px] md:col-start-1">
            <Image
              src="/prada-logo-1 1.png "
              alt="Prada"
              width={194}
              height={32}
              className="w-full h-full transition-transform duration-200 ease-in transform hover:scale-105"
            />
          </div>

          <div className="col-span-1 flex justify-center w-[134px] h-[21.75px] ml-[60.16px] md:w-[206px] md:h-[33.35px] md:col-start-2">
            <Image
              src="/calvin.png"
              alt="Calvin Klein"
              width={206}
              height={33.35}
              className="w-full h-full transition-transform duration-200 ease-in transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
