import React from 'react';

const ClothingCard = ({ item }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition">
      <div className="h-48 bg-gray-200 overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3">
        <h3 className="font-medium text-gray-800 truncate">{item.name}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
            {item.subtype}
          </span>
          <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded-full">
            {item.color}
          </span>
          <span className="text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded-full">
            {item.season}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ClothingCard;
