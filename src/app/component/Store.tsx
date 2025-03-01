
// export default Store;
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Store: React.FC = () => {
  const products = [
    {
      id: 1,
      image: "/Swarovski 4470 Cushion Square Fancy Stone Crystal Laguna.png",
      name: "Swarovski Pear Stone",
      price: "$120",
      rating: "4.5/5",
    },
    {
      id: 2,
      image: "/Gems Of Sri Lanka, Stone, Purple.png",
      name: "Gems Of Sri Lanka, Stone, Purple",
      price: "$240",
      discountPrice: "$192",
      discount: "-20%",
      rating: "4.5/5",
    },
    {
      id: 3,
      image: "/Amethyst Cactus.png",
      name: "Amethyst Cactus",
      price: "$180",
      rating: "4.5/5",
    },
    {
      id: 4,
      image: "/Amethyst Crystal.png",
      name: "Amethyst Crystal",
      price: "$130",
      originalPrice: "$160",
      discount: "-30%",
      rating: "4.5/5",
    },
  ];

  return (
    <>
      <section className="m-6 md:m-[72px]">
        <h2 className="text-center text-2xl md:text-5xl font-bold leading-tight md:leading-[57.6px]">
          TOP SELLING
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12 px-4 md:px-0">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center text-center">
              <div className="w-[198px] h-[200px] md:w-[295px] md:h-[298px] flex items-center justify-center bg-gray-200 rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="rounded-[20px] transition-transform duration-200 ease-in-out hover:scale-105"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold uppercase mt-2">{product.name}</h3>
              <div className="flex items-center gap-2">
                <Image src="/rating.png" alt="Rating" width={100} height={20} />
                <p className="text-sm">{product.rating}</p>
              </div>
              <h3 className="text-xl md:text-2xl font-bold">
                {product.price} 
                {product.originalPrice && (
                  <span className="line-through text-gray-400 ml-2">
                    {product.originalPrice}
                  </span>
                )}
                {product.discount && (
                  <span className="bg-red-100 text-red-600 text-sm md:text-lg px-3 py-1 rounded-full ml-2">
                    {product.discount}
                  </span>
                )}
              </h3>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href={'/shop'} className="px-6 py-3 border border-black rounded-full md:w-[216px] w-full max-w-[358px] text-center hover:bg-black hover:text-white">
            View More
          </Link>
        </div>
      </section>
    </>
  );
};

export default Store;
