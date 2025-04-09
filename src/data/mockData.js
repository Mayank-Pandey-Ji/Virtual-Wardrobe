// data/mockData.js

// Sample data for initial wardrobe with working placeholder images
export const initialWardrobe = [
  {
    id: 1,
    name: 'Blue T-Shirt',
    type: 'top',
    subtype: 't-shirt',
    color: 'blue',
    season: 'summer',
    imageUrl: 'https://placehold.co/300x300/0066cc/white?text=Blue+T-Shirt',
  },
  {
    id: 2,
    name: 'Black Jeans',
    type: 'bottom',
    subtype: 'jeans',
    color: 'black',
    season: 'all',
    imageUrl: 'https://placehold.co/300x300/333333/white?text=Black+Jeans',
  },
  {
    id: 3,
    name: 'White Sneakers',
    type: 'footwear',
    subtype: 'sneakers',
    color: 'white',
    season: 'all',
    imageUrl: 'https://placehold.co/300x300/ffffff/333333?text=White+Sneakers',
  },
  {
    id: 4,
    name: 'Red Hoodie',
    type: 'top',
    subtype: 'hoodie',
    color: 'red',
    season: 'winter',
    imageUrl: 'https://placehold.co/300x300/cc0000/white?text=Red+Hoodie',
  },
  {
    id: 5,
    name: 'Khaki Shorts',
    type: 'bottom',
    subtype: 'shorts',
    color: 'khaki',
    season: 'summer',
    imageUrl: 'https://placehold.co/300x300/c3b091/333333?text=Khaki+Shorts',
  },
  {
    id: 6,
    name: 'Gray Jacket',
    type: 'outerwear',
    subtype: 'jacket',
    color: 'gray',
    season: 'winter',
    imageUrl: 'https://placehold.co/300x300/888888/white?text=Gray+Jacket',
  },
  {
    id: 7,
    name: 'Navy Polo Shirt',
    type: 'top',
    subtype: 'polo',
    color: 'navy',
    season: 'spring',
    imageUrl: 'https://placehold.co/300x300/000080/white?text=Navy+Polo',
  },
  {
    id: 8,
    name: 'Brown Chinos',
    type: 'bottom',
    subtype: 'chinos',
    color: 'brown',
    season: 'fall',
    imageUrl: 'https://placehold.co/300x300/8b4513/white?text=Brown+Chinos',
  },
  {
    id: 9,
    name: 'Black Dress Shoes',
    type: 'footwear',
    subtype: 'dress shoes',
    color: 'black',
    season: 'all',
    imageUrl: 'https://placehold.co/300x300/000000/white?text=Dress+Shoes',
  },
  {
    id: 10,
    name: 'White Button-up Shirt',
    type: 'top',
    subtype: 'button-up',
    color: 'white',
    season: 'all',
    imageUrl: 'https://placehold.co/300x300/ffffff/333333?text=Button+Shirt',
  },
  {
    id: 11,
    name: 'Blue Denim Jacket',
    type: 'outerwear',
    subtype: 'denim jacket',
    color: 'blue',
    season: 'spring',
    imageUrl: 'https://placehold.co/300x300/4169e1/white?text=Denim+Jacket',
  },
  {
    id: 12,
    name: 'Gray Sweatpants',
    type: 'bottom',
    subtype: 'sweatpants',
    color: 'gray',
    season: 'winter',
    imageUrl: 'https://placehold.co/300x300/a9a9a9/white?text=Sweatpants',
  }
];

// Sample color combinations that work well together
export const goodColorCombinations = [
  ['white', 'black'],
  ['navy', 'white'],
  ['blue', 'gray'],
  ['black', 'gray'],
  ['khaki', 'navy'],
  ['red', 'black'],
  ['white', 'blue'],
  ['gray', 'blue']
];

// Sample outfits for inspiration
export const sampleOutfits = [
  {
    id: 'sample-1',
    name: 'Casual Day Out',
    items: [
      {
        name: 'Blue T-Shirt',
        type: 'top',
        color: 'blue'
      },
      {
        name: 'Black Jeans',
        type: 'bottom',
        color: 'black'
      },
      {
        name: 'White Sneakers',
        type: 'footwear',
        color: 'white'
      }
    ],
    season: 'spring'
  },
  {
    id: 'sample-2',
    name: 'Office Look',
    items: [
      {
        name: 'White Button-up Shirt',
        type: 'top',
        color: 'white'
      },
      {
        name: 'Brown Chinos',
        type: 'bottom',
        color: 'brown'
      },
      {
        name: 'Black Dress Shoes',
        type: 'footwear',
        color: 'black'
      }
    ],
    season: 'all'
  },
  {
    id: 'sample-3',
    name: 'Winter Warmth',
    items: [
      {
        name: 'Red Hoodie',
        type: 'top',
        color: 'red'
      },
      {
        name: 'Gray Sweatpants',
        type: 'bottom',
        color: 'gray'
      },
      {
        name: 'White Sneakers',
        type: 'footwear',
        color: 'white'
      },
      {
        name: 'Gray Jacket',
        type: 'outerwear',
        color: 'gray'
      }
    ],
    season: 'winter'
  }
];

// Weather data for the weather-based outfit feature
export const weatherConditions = {
  sunny: {
    minTemp: 25,
    maxTemp: 35,
    recommendedTypes: ['t-shirt', 'shorts', 'sunglasses', 'hat'],
    avoidTypes: ['jacket', 'sweater', 'hoodie']
  },
  cold: {
    minTemp: 0,
    maxTemp: 10,
    recommendedTypes: ['jacket', 'sweater', 'hoodie', 'long pants'],
    avoidTypes: ['t-shirt', 'shorts']
  },
  rainy: {
    minTemp: 10,
    maxTemp: 20,
    recommendedTypes: ['jacket', 'umbrella', 'waterproof shoes'],
    avoidTypes: ['suede shoes', 'white clothes']
  },
  mild: {
    minTemp: 15,
    maxTemp: 25,
    recommendedTypes: ['light jacket', 'long sleeve shirt', 'jeans'],
    avoidTypes: ['heavy jacket', 'shorts']
  }
};