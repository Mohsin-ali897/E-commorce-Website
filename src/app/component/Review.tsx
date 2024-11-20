import React from 'react'
import Image from 'next/image'

function Review() {
    return (
        <>
            <div className='w-[286px] h-[72px] md:w-[654px]  md:h-[58px] leading-[36px] md:leading-[57.6px] mt-[50px] md:mt-[80px] flex justify-around text-center ml-[20px] md:text-right text-[32px] md:text-5xl font-bold'>
                <h2 className='text-left text-[32px] font-bold font-integral p-[16px]'>OUR HAPPY CUSTOMERS</h2>
            </div>

            <div className='flex flex-col md:flex-row justify-center items-center md:justify-around md:items-center mt-[24px] md:mt-10'>
                {/* First Column */}
                <div className='w-[358px] h-[235px] mt-[12px] md:w-[400px] md:h-[240px] p-[24px] md:px-8 md:py-7 bg-[#0000001A] rounded-[20px] transition-transform duration-200 ease-in transform hover:scale-105'>
                    <Image
                        src={"/Rating5/5.png"}
                        alt='Product'
                        width={150}
                        height={19}
                        className='w[118px] h-[] md:w-[150px] md:h-[19px] transition-transform duration-200 ease-in transform hover:scale-105'
                    />

                    <div className='flex gap-1 mt-[15px] transition-transform duration-200 ease-in transform hover:scale-105'>
                        <h2 className='font-satoshi text-lg md:text-xl font-bold  h-[15px]'>Sarah M.</h2>
                        <Image
                            src={"/verified.png"}
                            alt='Product'
                            width={24}
                            height={24} />

                    </div>
                    <p className='w-[310px] h-[80px]  md:w-[336px] md:h-[88px] font-satoshi text-base font-normal mt-[12px] text-[#00000099]'>
                        I&#34;m blown away by the quality and style of the clothes I received from Shop.co.
                        From casual wear to elegant dresses, every piece I&#34;ve bought has exceeded my expectations.
                    </p>
                </div>

                {/* 2 Column */}
                <div className='hidden md:block  md:w-[400px] md:h-[240px] md:px-8 md:py-7 bg-[#0000001A] rounded-[20px] transition-transform duration-200 ease-in transform hover:scale-105 '>
                    <Image
                        src={"/Rating5/5.png"}
                        alt='Product'
                        width={150}
                        height={19}
                    />

                    <div className='flex gap-1 mt-[15px]'>
                        <h2 className='font-satoshi text-xl font-bold  h-[15px]'>Alex K.</h2>
                        <Image
                            src={"/verified.png"}
                            alt='Product'
                            width={24}
                            height={24} />

                    </div>
                    <p className='w-[336px] h-[88px] font-satoshi text-base font-normal mt-[12px] text-[#00000099]'>
                    Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.
                    </p>
                </div>

                {/* 3 Column */}
                <div className='hidden md:block md:w-[400px] md:h-[240px] md:px-8 md:py-7 bg-[#0000001A] rounded-[20px] transition-transform duration-200 ease-in transform hover:scale-105'>
                    <Image
                        src={"/Rating5/5.png"}
                        alt='Product'
                        width={150}
                        height={19}
                    />

                    <div className='flex gap-1 mt-[15px]'>
                        <h2 className='font-satoshi text-xl font-bold  h-[15px]'>James L.</h2>
                        <Image
                            src={"/verified.png"}
                            alt='Product'
                            width={24}
                            height={24} />

                    </div>
                    <p className='w-[336px] h-[88px] font-satoshi text-base font-normal mt-[12px] text-[#00000099]'>
                    As someone who&#34;s always on the lookout for unique fashion pieces, I&#34;m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.
                    </p>
                </div>

            </div>
        </>
    )
}

export default Review