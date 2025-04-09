import React, { createContext, useState, useContext } from 'react';
import { initialWardrobe } from '../data/mockData';
import { generateSmartOutfit } from '../utils/outfitUtils';
const WardrobeContext = createContext();

export const WardrobeProvider = ({ children }) => {
  const [wardrobe, setWardrobe] = useState(initialWardrobe);
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentOutfit, setCurrentOutfit] = useState(null);
  const [likedOutfits, setLikedOutfits] = useState([]);

  // Add new clothing item
  const addItem = (item) => {
    const newItem = {
      ...item,
      id: wardrobe.length + 1,
    };
    setWardrobe([...wardrobe, newItem]);
  };

  // Filter wardrobe items
  const getFilteredItems = () => {
    if (activeFilter === 'all') {
      return wardrobe;
    }
    return wardrobe.filter(item => 
      item.type === activeFilter || item.subtype === activeFilter
    );
  };

  const generateOutfit = (season = 'all') => {
    const outfit = generateSmartOutfit(wardrobe, season);
    setCurrentOutfit(outfit);
    return outfit;
  };

  // Like current outfit
  const likeOutfit = () => {
    if (currentOutfit && !likedOutfits.some(outfit => outfit.id === currentOutfit.id)) {
      setLikedOutfits([...likedOutfits, currentOutfit]);
    }
  };

  // Dislike current outfit (just generate a new one)
  const dislikeOutfit = () => {
    generateOutfit();
  };

  const value = {
    wardrobe,
    addItem,
    activeFilter,
    setActiveFilter,
    getFilteredItems,
    generateOutfit,
    currentOutfit,
    likedOutfits,
    likeOutfit,
    dislikeOutfit,
  };

  return (
    <WardrobeContext.Provider value={value}>
      {children}
    </WardrobeContext.Provider>
  );
};

export const useWardrobe = () => {
  const context = useContext(WardrobeContext);
  if (context === undefined) {
    throw new Error('useWardrobe must be used within a WardrobeProvider');
  }
  return context;
};