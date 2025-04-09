// utils/outfitUtils.js

/**
 * Check if two clothing items can be worn together
 * @param {Object} item1 - First clothing item
 * @param {Object} item2 - Second clothing item
 * @returns {boolean} - Whether the items can be paired
 */
export const isGoodPairing = (item1, item2) => {
    // Simple pairing rules based on color compatibility
    const colorMatches = {
      'black': ['white', 'red', 'blue', 'gray', 'pink', 'yellow', 'green', 'purple', 'orange'],
      'white': ['black', 'blue', 'red', 'gray', 'brown', 'navy', 'green', 'purple'],
      'blue': ['white', 'black', 'gray', 'khaki', 'navy', 'light blue'],
      'red': ['black', 'white', 'gray', 'denim', 'khaki'],
      'gray': ['black', 'white', 'blue', 'red', 'navy', 'pink', 'purple'],
      'navy': ['white', 'gray', 'light blue', 'khaki'],
      'khaki': ['blue', 'black', 'red', 'navy', 'white'],
      'brown': ['white', 'beige', 'green', 'blue'],
      'green': ['white', 'black', 'khaki', 'brown'],
      'pink': ['black', 'white', 'gray', 'navy'],
      'purple': ['white', 'gray', 'black'],
      'orange': ['black', 'white', 'navy']
    };
  
    // If we have a defined color match, use it
    if (colorMatches[item1.color] && colorMatches[item1.color].includes(item2.color)) {
      return true;
    }
    
    if (colorMatches[item2.color] && colorMatches[item2.color].includes(item1.color)) {
      return true;
    }
  
    // Default conservative pairing if colors not in our match table
    const neutralColors = ['black', 'white', 'gray', 'navy', 'khaki', 'beige'];
    if (neutralColors.includes(item1.color) || neutralColors.includes(item2.color)) {
      return true;
    }
  
    return false;
  };
  
  /**
   * Generate a smart outfit based on color matching and seasonality
   * @param {Array} wardrobe - Array of clothing items
   * @param {string} season - Target season ('summer', 'winter', 'fall', 'spring', 'all')
   * @returns {Object} - Generated outfit object
   */
  export const generateSmartOutfit = (wardrobe, season = 'all') => {
    let filteredWardrobe = wardrobe;
    
    // Filter by season if specified
    if (season !== 'all') {
      filteredWardrobe = wardrobe.filter(item => 
        item.season === season || item.season === 'all'
      );
    }
    
    // Group clothes by type
    const tops = filteredWardrobe.filter(item => item.type === 'top');
    const bottoms = filteredWardrobe.filter(item => item.type === 'bottom');
    const footwear = filteredWardrobe.filter(item => item.type === 'footwear');
    const outerwear = filteredWardrobe.filter(item => item.type === 'outerwear');
    
    // No outfit possible if we're missing essentials
    if (tops.length === 0 || bottoms.length === 0) {
      return null;
    }
    
    // Try to find good top-bottom pairing
    let foundMatch = false;
    let randomTop, randomBottom;
    
    // Try up to 10 times to find a good match
    for(let i = 0; i < 10; i++) {
      randomTop = tops[Math.floor(Math.random() * tops.length)];
      randomBottom = bottoms[Math.floor(Math.random() * bottoms.length)];
      
      if (isGoodPairing(randomTop, randomBottom)) {
        foundMatch = true;
        break;
      }
    }
    
    // If no match found after attempts, just use random
    if (!foundMatch) {
      randomTop = tops[Math.floor(Math.random() * tops.length)];
      randomBottom = bottoms[Math.floor(Math.random() * bottoms.length)];
    }
    
    // Get footwear that pairs with bottoms
    let outfitItems = [randomTop, randomBottom];
    
    if (footwear.length > 0) {
      let matchingFootwear = null;
      
      // Try to find matching footwear
      for(let i = 0; i < footwear.length; i++) {
        if (isGoodPairing(randomBottom, footwear[i])) {
          matchingFootwear = footwear[i];
          break;
        }
      }
      
      // If no match, just pick random footwear
      if (!matchingFootwear) {
        matchingFootwear = footwear[Math.floor(Math.random() * footwear.length)];
      }
      
      outfitItems.push(matchingFootwear);
    }
    
    // Add outerwear for cold seasons
    if ((season === 'winter' || season === 'fall') && outerwear.length > 0) {
      const randomOuterwear = outerwear[Math.floor(Math.random() * outerwear.length)];
      outfitItems.push(randomOuterwear);
    }
    
    return {
      id: Date.now(),
      items: outfitItems,
      season: season,
      score: foundMatch ? 'good match' : 'random match'
    };
  };
  
  /**
   * Get weather-appropriate season based on temperature
   * @param {number} temperature - Temperature in Celsius
   * @returns {string} - Appropriate season
   */
  export const getSeasonByTemperature = (temperature) => {
    if (temperature > 25) return 'summer';
    if (temperature < 10) return 'winter';
    if (temperature >= 10 && temperature < 18) return 'fall';
    return 'spring';
  };