
import React from 'react';
import Image from 'next/image';

function Review() {
  return (
    <section className="w-full px-6 md:px-16 my-12">
      {/* Title */}
      <div className="text-center md:text-left mb-8">
        <h2 className="text-2xl md:text-5xl font-bold">OUR HAPPY CUSTOMERS</h2>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {/* Review 1 */}
        <div className="bg-gray-100 p-6 rounded-2xl hover:scale-105 transition-transform">
          <Image src="/Rating5/5.png" alt="5 Star Rating" width={150} height={19} />
          <div className="flex items-center gap-2 mt-4">
            <h2 className="text-lg font-bold">Sarah M.</h2>
            <Image src="/verified.png" alt="Verified" width={24} height={24} />
          </div>
          <p className="text-gray-600 mt-3">
            I&apos;m blown away by the quality and style of the Stones I received from Shop.co.
            From casual wear to elegant Stones, every piece has exceeded my expectations.
          </p>
        </div>

        {/* Review 2 */}
        <div className="bg-gray-100 p-6 rounded-2xl hover:scale-105 transition-transform">
          <Image src="/Rating5/5.png" alt="5 Star Rating" width={150} height={19} />
          <div className="flex items-center gap-2 mt-4">
            <h2 className="text-lg font-bold">Alex K.</h2>
            <Image src="/verified.png" alt="Verified" width={24} height={24} />
          </div>
          <p className="text-gray-600 mt-3">
            Finding Stones and Gems that align with my personal style used to be a challenge until I discovered Shop.co. 
            The range of options they offer is truly remarkable.
          </p>
        </div>

        {/* Review 3 */}
        <div className="bg-gray-100 p-6 rounded-2xl hover:scale-105 transition-transform">
          <Image src="/Rating5/5.png" alt="5 Star Rating" width={150} height={19} />
          <div className="flex items-center gap-2 mt-4">
            <h2 className="text-lg font-bold">James L.</h2>
            <Image src="/verified.png" alt="Verified" width={24} height={24} />
          </div>
          <p className="text-gray-600 mt-3">
            As someone who&apos;s always on the lookout for unique fashion pieces, I&apos;m thrilled to have stumbled upon Shop.co. 
            The selection of Stones is diverse and on-trend.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Review;
