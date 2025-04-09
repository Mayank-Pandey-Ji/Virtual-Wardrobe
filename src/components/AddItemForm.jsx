import React, { useState } from 'react';
import { useWardrobe } from '../context/WardrobeContext';

const AddItemForm = ({ onClose }) => {
  const { addItem } = useWardrobe();
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    subtype: '',
    color: '',
    season: 'all',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // In a real app, you'd upload this to a server
      // For now, we'll just create a local URL for preview
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.type || !formData.color) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Create a new item
    const newItem = {
      ...formData,
      imageUrl: imagePreview || 'https://placehold.co/300x300/cccccc/333333?text=New+Item',
    };
    
    addItem(newItem);
    onClose();
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-4 border border-gray-200">
      <h3 className="text-lg font-medium mb-4">Add New Item</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Image Upload */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image
            </label>
            <div className="flex items-center">
              <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden mr-4">
                {imagePreview ? (
                  <img 
                    src={imagePreview} 
                    alt="Preview" 
                    className="w-full h-full object-cover" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    No image
                  </div>
                )}
              </div>
              
              <label className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer transition">
                Upload Image
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleImageChange} 
                />
              </label>
            </div>
          </div>
          
          {/* Item Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="e.g., Blue T-Shirt"
              required
            />
          </div>
          
          {/* Item Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Type *
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select type</option>
              <option value="top">Top</option>
              <option value="bottom">Bottom</option>
              <option value="footwear">Footwear</option>
              <option value="outerwear">Outerwear</option>
              <option value="accessory">Accessory</option>
            </select>
          </div>
          
          {/* Item Subtype */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subtype
            </label>
            <input
              type="text"
              name="subtype"
              value={formData.subtype}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="e.g., T-shirt, Jeans, etc."
            />
          </div>
          
          {/* Item Color */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Color *
            </label>
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="e.g., Blue, Black, etc."
              required
            />
          </div>
          
          {/* Season */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Season
            </label>
            <select
              name="season"
              value={formData.season}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="all">All Seasons</option>
              <option value="summer">Summer</option>
              <option value="winter">Winter</option>
              <option value="fall">Fall</option>
              <option value="spring">Spring</option>
            </select>
          </div>
        </div>
        
        {/* Form Actions */}
        <div className="flex justify-end mt-4 space-x-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItemForm;