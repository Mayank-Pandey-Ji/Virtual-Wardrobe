import React from 'react';
import { useWardrobe } from '../context/WardrobeContext';
import ClothingCard from './ClothingCard';

const WardrobeGrid = () => {
  const { getFilteredItems } = useWardrobe();
  const items = getFilteredItems();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {items.length === 0 ? (
        <p className="col-span-full text-center text-gray-500 py-8">
          No items found. Try changing filters or add new items.
        </p>
      ) : (
        items.map(item => (
          <ClothingCard key={item.id} item={item} />
        ))
      )}
    </div>
  );
};

export default WardrobeGrid;