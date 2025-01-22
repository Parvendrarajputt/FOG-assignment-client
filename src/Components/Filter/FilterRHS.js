import React from 'react';
import { useSorting } from '../../Context/ContextProvider'; // Correct the relative path

const FilterRHS = () => {
  const { sortBy, setSortBy } = useSorting();  // Access sortBy and setSortBy

  return (
    <div className="flex justify-end mb-4">
      <div>
        <span className='mr-5 text-lg'>Sort By</span>
        <select
          className="border border-gray-400 bg-white px-4 py-2 rounded-md"
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)} 
        >
          <option value="">Default</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
          <option value="A-Z">Name: A-Z</option>
          <option value="Z-A">Name: Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default FilterRHS;
