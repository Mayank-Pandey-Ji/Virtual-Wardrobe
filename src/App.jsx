import React, { useState } from 'react';
import { WardrobeProvider } from './context/WardrobeContext';
import WardrobeGrid from './components/WardrobeGrid';
import FilterBar from './components/FilterBar';
import AddItemForm from './components/AddItemForm';
import OutfitGenerator from './components/OutfitGenerator';
import OutfitDisplay from './components/OutfitDisplay';

function App() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [activeTab, setActiveTab] = useState('wardrobe'); // 'wardrobe' or 'outfits'

  return (
    <WardrobeProvider>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold">Virtual Wardrobe</h1>
          </div>
        </header>

        <main className="container mx-auto p-4">
          {/* Mobile Navigation */}
          <div className="md:hidden flex justify-around mb-4 bg-white rounded-lg shadow-sm">
            <button
              className={`py-3 px-4 font-medium ${activeTab === 'wardrobe' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('wardrobe')}
            >
              My Wardrobe
            </button>
            <button
              className={`py-3 px-4 font-medium ${activeTab === 'outfits' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('outfits')}
            >
              Outfit Generator
            </button>
          </div>

          {/* Desktop View - Two Column Layout */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Wardrobe Section */}
            <div 
              className={`w-full md:w-3/5 ${activeTab === 'wardrobe' ? 'block' : 'hidden md:block'}`}
            >
              <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">My Wardrobe</h2>
                  <button
                    onClick={() => setShowAddForm(!showAddForm)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                  >
                    {showAddForm ? 'Cancel' : '+ Add Item'}
                  </button>
                </div>

                {showAddForm && <AddItemForm onClose={() => setShowAddForm(false)} />}

                <FilterBar />
                <WardrobeGrid />
              </div>
            </div>

            {/* Outfit Generator Section */}
            <div 
              className={`w-full md:w-2/5 ${activeTab === 'outfits' ? 'block' : 'hidden md:block'}`}
            >
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h2 className="text-xl font-semibold mb-4">Outfit Generator</h2>
                <OutfitGenerator />
                <OutfitDisplay />
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>Virtual Wardrobe App - Your personal fashion assistant</p>
          </div>
        </footer>
      </div>
    </WardrobeProvider>
  );
}

export default App;