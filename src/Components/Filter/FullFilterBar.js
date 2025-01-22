import React from 'react';
import FilterLHS from './FilterLHS';
import FilterRHS from './FilterRHS';

const FullFilterBar = () => {
    return (
        <div className="w-full bg-[#F9F1E7] h-24 px-12 my-1 border border-gray-300 flex items-center justify-between">

            <FilterLHS/>
            <FilterRHS/>
        </div>
    );
}

export default FullFilterBar;
