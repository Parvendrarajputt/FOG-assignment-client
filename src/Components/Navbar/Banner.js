import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full h-52">
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{ backgroundImage: "url('/BannerImage.jpg')" }}
      ></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-black z-10">
        <h1 className="text-4xl font-bold uppercase">SHOP</h1>
        <p className="mt-2 text-lg">
          <span className="font-bold">Home</span> &gt; Shop
        </p>
      </div>
    </div>
  );
};

export default Banner;
