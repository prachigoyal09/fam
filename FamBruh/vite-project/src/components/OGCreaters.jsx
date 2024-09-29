import React from 'react';
import { Instagram, Youtube, Facebook } from 'lucide-react';

const creators = [
  {
    name: 'Tanmay Bhatt',
    username: 'tanmaybhat',
    followers: '1.9M',
    image: '/api/placeholder/300/300',
    background: 'bg-yellow-400'
  },
  {
    name: 'Kusha Kapila',
    username: 'kushakapila',
    followers: '3.7M',
    image: '/api/placeholder/300/300',
    background: 'bg-red-400'
  },
  {
    name: 'Rohan Joshi',
    username: 'mojorojo',
    followers: '597K',
    image: '/api/placeholder/300/300',
    background: 'bg-gray-400'
  },
  {
    name: 'Bhuvan Bam',
    username: 'bhuvan.bam22',
    followers: '19.4M',
    image: '/api/placeholder/300/300',
    background: 'bg-gray-200'
  }
];

const CreatorCard = ({ creator }) => (
  <div style={{backgroundColor:"#fafafa"}} className="rounded-lg shadow-md overflow-hidden">
    <div className={`${creator.background} h-48 relative`}>
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

const OGCreators = () => {
  return (
    <section style={{backgroundColor:'#fafafa'}} className="py-12 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-purple-600 mb-2">The OG Creators</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        </div>
        <button className="border border-gray-300 rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {creators.map((creator, index) => (
          <CreatorCard key={index} creator={creator} />
        ))}
      </div>
    </section>
  );
};

export default OGCreators;