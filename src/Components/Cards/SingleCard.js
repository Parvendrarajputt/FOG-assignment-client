import React from 'react';
import { FaShareAlt, FaExchangeAlt, FaRegHeart } from 'react-icons/fa'; 

const SingleCard = ({ product }) => {
  return (
    <div className="relative max-w-sm rounded overflow-hidden shadow-lg border w-72 group transition-all duration-300">
      {product.discount && (
        <span
          className={`absolute top-4 right-4 text-white text-xs font-bold flex items-center justify-center w-12 h-12 rounded-full 
            ${product.discount === 'New' ? 'bg-[#2EC1AC]' : 'bg-[#E97171]'}
          `}
        >
          {product.discount}
        </span>
      )}

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-[#3A3A3A] opacity-0 group-hover:opacity-90 flex flex-col items-center justify-center transition-opacity duration-300">
        {/* Add to Cart Button */}
        <button className="text-[#E89F71] font-bold text-lg bg-[background: #FFFFFF;  
            ] px-5 p-2 shadow-md bg-white transition">
          Add to Cart
        </button>

        {/* Icons Container */}
        <div className="flex space-x-2 mt-4 px-8">
          {/* Share Icon */}
          <button className="text-white text-lg hover:text-[#E89F71] flex items-center space-x-2 transition">
            <FaShareAlt />
            <span>Share</span>
          </button>

          {/* Compare Icon */}
          <button className="text-white text-lg  hover:text-[#E89F71] flex items-center space-x-2 transition">
            <FaExchangeAlt />
            <span>Compare</span>
          </button>

          {/* Like Icon */}
          <button className="text-white text-lg hover:text-[#E89F71] flex items-center space-x-2 transition">
          <FaRegHeart />
            <span>Like</span>
          </button>
        </div>

      </div>

      {/* Product Image */}
      <img
        src={product.image}
        alt="Card Image"
        className="w-full h-[301px] object-cover"
      />

      {/* Product Details */}
      <div className="px-4 py-4 h-32">
        <div className="text-xl font-semibold text-left">{product.brandName}</div>

        <p className="text-gray-600 text-left mt-2">{product.description}</p>

        <div className="text-left mt-4">
          <span className="text-gray-600 text-left mt-2 font-bold">
            {product.currency} {product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
