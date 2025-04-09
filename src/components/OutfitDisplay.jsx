import React from 'react';
import { useWardrobe } from '../context/WardrobeContext';

const OutfitDisplay = () => {
  const { currentOutfit, likeOutfit, dislikeOutfit } = useWardrobe();

  if (!currentOutfit) {
    return (
      <div className="text-center py-8 bg-gray-50 rounded-lg border border-dashed border-gray-300">
        <p className="text-gray-500">
          No outfit generated yet. Click the button above to create one!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
      <h3 className="font-medium text-lg mb-4 text-center">Your Outfit</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
        {currentOutfit.items.map(item => (
          <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="h-32 bg-gray-200">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-2">
              <h4 className="font-medium text-sm truncate">{item.name}</h4>
              <p className="text-xs text-gray-500">{item.subtype}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center space-x-4">
        <button
          onClick={dislikeOutfit}
          className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-red-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Dislike
        </button>
        
        <button
          onClick={likeOutfit}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
          Like
        </button>
      </div>
    </div>
  );
};

export default OutfitDisplay;