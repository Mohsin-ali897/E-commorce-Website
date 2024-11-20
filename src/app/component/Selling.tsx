import React from "react";
import Image from "next/image";

const Store: React.FC = () => {
  const products = [
    {
      id: 1,
      image: "/cloth5.png",
      name: "VERTICAL STRIPED SHIRT",
      price: "$212",
      rating: "4.5/5",
    },
    {
      id: 2,
      image: "/cloth6.png",
      name: "COURAGE GRAPHIC T-SHIRT",
      price: "$240",
      discountPrice: "$145",
      discount: "-20%",
      rating: "4.5/5",
    },
    {
      id: 3,
      image: "/cloth7.png",
      name: "LOOSE FIT BERMUDA SHORTS",
      price: "$80",
      rating: "4.5/5",
    },
    {
      id: 4,
      image: "/cloth8.png",
      name: "FADED SKINNY JEANS",
      price: "$130",
      originalPrice: "$210",
      discount: "-30%",
      rating: "4.5/5",
    },
  ];

  return (
    <>
      <section className="m-[72px]">
        <h2 className="text-center md:text-5xl font-IntegralCF font-bold md:leading-[57.6px] text-[27.43px] leading-[38.5px] w-[100%] h-[38px]">
          TOP SELLING
        </h2>
        <div className="gap-5 my-[50px] pl-[32px] md:pl-0 md:flex md:justify-center sm:grid sm:grid-cols-2 grid grid-cols-1">
          {products.map((product) => (
            <div key={product.id}>
              <div className="md:w-[295px] md:h-[298px] w-[198px] h-[200.01px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={295}
                  height={298}
                  className="rounded-[20px] transition-transform duration-200 ease-in transform hover:scale-105"
                />
              </div>
              <div>
                <h3 className="md:text-lg font-bold text-[16px]">
                  {product.name}
                </h3>
                <div className="flex gap-3 w-[150] h-[19] transition-transform duration-200 ease-in transform hover:scale-105">
                  <Image
                    src="/rating.png"
                    alt="Rating"
                    width={150}
                    height={19}
                  />
                  <p className="text-sm">{product.rating}</p>
                </div>
                <h3 className="text-2xl font-bold font-satoshi">
                  {product.price}{" "}
                  {product.originalPrice && (
                    <span className="line-through text-[#00000066] ml-[10px]">
                      {product.originalPrice}
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-[#FF33331A] text-[#FF3333] text-lg text-center w-[58px] h-[28px] rounded-[62px] ml-[12px] py-[6px] px-[14px]">
                      {product.discount}
                    </span>
                  )}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button className="px-[54px] py-[12px] border border-black rounded-[62px] md:w-[216px] md:h-[52px] w-[358px] h-[46px] hover:bg-black hover:text-white">
            View More
          </button>
        </div>
      </section>
    </>
  );
};

export default Store;
