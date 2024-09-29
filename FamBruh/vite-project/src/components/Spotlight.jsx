import React from 'react';
import { ChevronRight, Instagram, Youtube, Facebook } from 'lucide-react';

const categories = [
  { name: 'The Foodies', color: 'bg-yellow-400', image: '/api/placeholder/150/150' },
  { name: 'The Techies', color: 'bg-green-400', image: '/api/placeholder/150/150' },
  { name: 'The Fashionistas', color: 'bg-blue-400', image: '/api/placeholder/150/150' },
  { name: 'The Podcasters', color: 'bg-red-400', image: '/api/placeholder/150/150' },
  { name: 'The Travellers', color: 'bg-purple-400', image: '/api/placeholder/150/150' },
];

const spotlightCreators = [
  { name: 'Sharan Hegde', username: 'financewithsharan', followers: '2.6M', image: '/api/placeholder/300/300' },
  { name: 'Dolly Singh', username: 'dollysingh', followers: '1.6M', image: '/api/placeholder/300/300' },
  { name: 'Kritika Khurana', username: 'thatbohogirl', followers: '1.8M', image: '/api/placeholder/300/300' },
  { name: 'Bhuvan Bam', username: 'bhuvan.bam22', followers: '19.4M', image: '/api/placeholder/300/300' },
];

const CategoryCard = ({ category }) => (
  <div className={`${category.color} rounded-lg overflow-hidden flex items-center p-2 w-48`}>
    <div className="flex-1">
      <h3 className="text-white text-sm font-semibold mb-2">{category.name}</h3>
      <ChevronRight className="text-white" size={20} />
    </div>
    <img src={category.image} alt={category.name} className="w-16 h-16 object-cover rounded" />
  </div>
);

const CreatorCard = ({ creator }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="h-48 relative">
      <img src={creator.image} alt={creator.name} className="w-full h-full object-cover" />
      <span className="absolute top-2 left-2 bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
        Entertainment
      </span>
    </div>
    <div className="p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold flex items-center">
          {creator.name}
          <svg className="w-4 h-4 text-blue-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </h3>
        <span className="text-gray-600 font-medium">{creator.followers}</span>
      </div>
      <p className="text-gray-500 text-sm mb-4">{creator.username}</p>
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <Instagram className="w-5 h-5 text-gray-400" />
          <Youtube className="w-5 h-5 text-gray-400" />
          <Facebook className="w-5 h-5 text-gray-400" />
        </div>
        <button className="bg-purple-600 text-white px-4 py-1 rounded text-sm">Compare</button>
      </div>
    </div>
  </div>
);

const Spotlight = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Categories</h2>
          <button className="text-sm font-medium text-gray-600 hover:text-gray-800">View All</button>
        </div>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-purple-600">In The Spotlight</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
          <button className="text-sm font-medium text-gray-600 hover:text-gray-800">View All</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {spotlightCreators.map((creator, index) => (
            <CreatorCard key={index} creator={creator} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Spotlight;