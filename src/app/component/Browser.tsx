import React from "react";
import Image from "next/image";

function Browser() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 w-[358px] h-[975px] md:w-[1239px] md:h-[866px] rounded-[40px] mx-auto">
      <section className="w-[358px] h-[975px] md:w-[1239px] md:h-[866px] rounded-[40px] bg-[#F0F0F0] m-[20px] flex flex-col md:justify-center">
        <div>
          <h2 className="text-center font-integral font-bold text-[32px] md:text-5xl leading-[36px] md:leading-[57.6px] pt-[40px] md:pt-[70px]">
            BROWSE BY DRESS STYLE
          </h2>

          <div className="flex flex-col mt-[28px] md:grid md:grid-cols-12 gap-5 ml-[24px] md:ml-[64px] md:mr-[64px] cursor-pointer">
            {/* Casual */}
            <div className="grid col-span-4 md:mt-[64px] md:pl-[50px] w-[310px] h-[190px] md:w-[407px] md:h-[289px]">
              <Image
                src={"/Casual.png"}
                alt="Casual"
                width={407}
                height={289}
                className="w-[310px] h-[190px] md:pr-[40px] md:w-[407px] md:h-[289px] transition-transform duration-200 ease-in transform hover:scale-105"
              />
            </div>

            {/* Formal */}
            <div className="col-span-8 md:mr-[30px] md:mt-[64px] w-[310px] h-[190px] md:ml-[40px] md:w-[684px] md:h-[289px]">
              <Image
                src={"/Formal.png"}
                alt="Formal"
                width={289}
                height={190}
                className="w-[310px] h-[190px] md:w-[684px] md:h-[289px] transition-transform duration-200 ease-in transform hover:scale-105"
              />
            </div>

            {/* Party */}
            <div className="col-span-8 md:mr-[20px] w-[310px] h-[190px] md:w-[684px] md:h-[289px] md:ml-[20px] transition-transform duration-200 ease-in transform hover:scale-105">
              <Image
                src={"/Party.png"}
                alt="Party"
                width={684}
                height={289}
                className="w-[310px] h-[190px] md:w-[684px] md:h-[289px] transition-transform duration-200 ease-in transform hover:scale-105"
              />
            </div>

            {/* Gym */}
            <div className="col-span-4 w-[310px] h-[190px] md:w-[407px] md:h-[289px] md:pr-[40px]">
              <Image
                src={"/Gym.png"}
                alt="Gym"
                width={407}
                height={289}
                className="w-[310px] h-[190px] md:w-[407px] md:h-[289px] transition-transform duration-200 ease-in transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Browser;
