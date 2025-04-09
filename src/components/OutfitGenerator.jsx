import React, { useState } from 'react';
import { useWardrobe } from '../context/WardrobeContext';

const OutfitGenerator = () => {
  const { generateOutfit } = useWardrobe();
  const [season, setSeason] = useState('all');
  const [weatherBased, setWeatherBased] = useState(false);

  const handleGenerateOutfit = () => {
    // If weather-based is on, use the selected season, otherwise use 'all'
    const activeSeason = weatherBased ? season : 'all';
    generateOutfit(activeSeason);
  };

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={weatherBased}
              onChange={() => setWeatherBased(!weatherBased)}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Weather-Based</span>
          </label>
        </div>
        
        {weatherBased && (
          <select
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="summer">Summer</option>
            <option value="winter">Winter</option>
            <option value="fall">Fall</option>
            <option value="spring">Spring</option>
          </select>
        )}
      </div>
      
      <button
        onClick={handleGenerateOutfit}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        Generate Outfit
      </button>
      
      <p className="text-sm text-gray-500 mt-2 text-center">
        Click to generate a random outfit from your wardrobe
      </p>
    </div>
  );
};

export default OutfitGenerator;