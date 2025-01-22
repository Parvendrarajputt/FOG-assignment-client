import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleCard from './SingleCard';
import { API_URL } from '../../Constants/constants';
import { useSorting } from '../../Context/ContextProvider';


const TotalCardFrame = () => {
  const [productData, setProductData] = useState([]);
  const { sortBy } = useSorting();

   
  useEffect(() => {
    axios.get(`${API_URL}/api/products/`)
      .then(response => {
        console.log('Data received:', response.data);
        setProductData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data:', error);
      });
  }, []);

  useEffect(() => {
    let endpoint = `${API_URL}/api/products/`;

    if (sortBy === "low-to-high" || sortBy === "high-to-low") {
      endpoint = `${API_URL}/products/price/sort?sort=${sortBy}`;
    } else if (sortBy === "A-Z" || sortBy === "Z-A") {
      endpoint = `${API_URL}/products/name/sort?order=${sortBy}`;
    }

    axios.get(endpoint)
      .then(response => {
        console.log('Sorted Data received:', response.data);
        setProductData(response.data);
      })
      .catch(error => {
        console.error('Error fetching sorted data:', error);
      });
  }, [sortBy]);

  

  return (
    <div className='px-6 py-8'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6'>
        {productData.length > 0 ? (
          productData.map((product, index) => (
            <SingleCard key={index} product={product} />
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center text-lg text-gray-600">
            Loading...
          </div>
        )}
      </div>
    </div>
  );
};

export default TotalCardFrame;
