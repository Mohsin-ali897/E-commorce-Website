import React from 'react'
import Image from 'next/image'

function Hero2() {
  return (
    <>  
        <section className='w-[100%] h-[853px] bg-[#F2F0F1]'>
          <div className='mt-[40px] p-4 font-integral'>
            <h2 className='text-4xl font-bold leading-[34px] text-left text-black'>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>

            <p className='mt-[20px] text-sm font-normal text-[#00000099]'>
              Browse through our diverse range of meticulously crafted garments, designed to 
              bring out your individuality and cater to your sense of style.
            </p>
            <button className='mt-[24px] px-[54px] py-[16px] w-[358px] h-[52px]
              bg-black text-white rounded-[62px] text-center cursor-pointer transition-transform duration-200 ease-in transform hover:scale-105'>Shop Now</button>
          </div>

          <div className='mt-[20px] flex flex-col items-center justify-center'>
            <div className='w-[278px] h-[52px] flex justify-between items-center'>

              <div className='w-[106px] h-[48px]'>
                  <h2 className='w-[64px] h-[32px] font-satoshi font-bold text-2xl leading-[32.4px]'>200+</h2>
                  <p className='text-[#00000099] font-satoshi font-normal text-xs text-left w-[108px] h-[22px]'>International Brands</p>
              </div>

              <div className='w-[106px] h-[48px]'>
                  <h2 className='w-[64px] h-[32px] font-satoshi font-bold text-2xl leading-[32.4px]'>2,000+</h2>
                  <p className='text-[#00000099] font-satoshi font-normal text-xs text-left w-[117px] h-[22px]'>High-Quality Products</p>
              </div>

            </div>

            <div className='w-[106px] h-[48px] mt-[15px]'>
                  <h2 className='w-[64px] h-[32px] font-satoshi font-bold text-2xl leading-[32.4px]'>30,000+</h2>
                  <p className='text-[#00000099] font-satoshi font-normal text-xs text-left w-[117px] h-[22px]'>Happy Customers</p>
              </div>
          </div>

          {/* For Image */}

          <div className='flex flex-col justify-center items-center'>
            <Image
            src={"/Hero.png"}
            alt='Hero image'
            width={433}
            height={448}
            className='bg-cover text-center'
            />

        <div>
        <Image
          src={"/star.png"}
          alt="Star"
          width={76}
          height={76}
          className="absolute right-[10%] top-[65%]"
        />
      </div>

      <div>
        <Image
          src={"/star.png"}
          alt="Star"
          width={44}
          height={44}
          className="absolute left-[6%] top-[78%]"
        />
      </div>
          </div>




          <div className="bg-black w-full h-[146px] md:h-[122px]   flex justify-center items-center">
  <div className="grid grid-cols-3 gap-y-4 justify-center md:grid-cols-3 md:gap-y-0 md:flex md:justify-center md:gap-[106px]">
    {/* Row 1: Versace, Zara, Gucci */}
    <div className="col-span-1 flex justify-center ml-[16px] md:ml-0 w-[116px] h-[23px] md:w-[166.48px] md:h-[33.16px]">
      <Image
        src="/versace.png"
        alt="Versace"
        width={166.48}
        height={33.16}
        className="w-full h-full"
      />
    </div>

    <div className="col-span-1 flex justify-center  ml-[34px]  md:ml-0 w-[63px] h-[26.65px] md:w-[91px] md:h-[38px]">
      <Image
        src="/zara-logo-1 1.png"
        alt="Zara"
        width={91}
        height={38}
        className="w-full h-full"
      />
    </div>

    <div className="col-span-1 flex justify-center w-[109px] h-[25.24px] md:w-[156px] md:h-[36px]">
      <Image
        src="/gucci-logo-1 1.png"
        alt="Gucci"
        width={156}
        height={36}
        className="w-full h-full"
      />
    </div>

    {/* Row 2: Prada, Calvin Klein */}
    <div className="col-span-1 flex justify-center w-[127px] h-[21px] ml-[48px]  md:ml-0 md:w-[194px] md:h-[32px] md:col-start-1">
      <Image
        src="/prada-logo-1 1.png"
        alt="Prada"
        width={194}
        height={32}
        className="w-full h-full"
      />
    </div>

    <div className="col-span-1 flex justify-center w-[134px] h-[21.75px] ml-[60.16px] md:w-[206px] md:h-[33.35px] md:col-start-2">
      <Image
        src="/calvin.png"
        alt="Calvin Klein"
        width={206}
        height={33.35}
        className="w-full h-full"
      />
    </div>
  </div>
</div>
        </section>


    </>
  )
}

export default Hero2