import React from "react";
import { products } from "../constant/constant";
import Image from "next/image";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Offers from "../component/offer";
export default function Shop() {
  return (
    <div>
      <Header />
      <Navbar />

      {/* Product Listing Section */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-10 uppercase">Our Shop Collection</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg p-4 transition duration-300 ease-in-out transform hover:scale-105">
             {/* Product Image */}
              <div className="relative w-full h-[250px] flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={product.img}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="rounded-md object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate uppercase">{product.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-1">
                  <Image src="/rating.png" alt="Rating" width={100} height={20} />
                  <p className="text-sm text-gray-500">{product.rating}</p>
                </div>

                {/* Price & Discount */}
                <div className="flex items-center mt-2 text-xl font-bold text-gray-900">
                  {product.price}
                  {product.originalPrice && (
                    <span className="line-through text-gray-400 ml-2">{product.originalPrice}</span>
                  )}
                  {product.discount && (
                    <span className="ml-3 text-sm bg-red-100 text-red-600 px-2 py-1 rounded-lg">
                      {product.discount}
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
      <div className="py-5">

      <Offers/>
      </div>
      <Footer />
    </div>
  );
}
