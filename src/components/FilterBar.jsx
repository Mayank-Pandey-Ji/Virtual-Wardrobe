import React from 'react';
import { useWardrobe } from '../context/WardrobeContext';

const FilterBar = () => {
  const { activeFilter, setActiveFilter } = useWardrobe();

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'top', label: 'Tops' },
    { id: 'bottom', label: 'Bottoms' },
    { id: 'footwear', label: 'Footwear' },
    { id: 'outerwear', label: 'Outerwear' },
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {filters.map(filter => (
        <button
          key={filter.id}
          className={`px-3 py-1 rounded-full text-sm font-medium transition ${
            activeFilter === filter.id
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveFilter(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;