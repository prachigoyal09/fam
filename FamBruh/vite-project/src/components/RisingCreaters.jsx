import React from 'react';
import { ArrowUpRight, Instagram, Youtube, Facebook } from 'lucide-react';

const featuredCreator = {
  name: 'Aman k.',
  role: 'Design Creator',
  image: '/api/placeholder/60/60',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini',
};

const teamMembers = Array(6).fill().map((_, i) => ({ image: `/api/placeholder/${40 + i}/${40 + i}` }));

const risingCreators = [
  { name: 'Tanmay Bhatt', username: 'tanmaybhat', followers: '1.9M', image: '/api/placeholder/300/300', background: 'bg-yellow-400' },
  { name: 'Kusha Kapila', username: 'kushakapila', followers: '3.7M', image: '/api/placeholder/300/300', background: 'bg-red-400' },
  { name: 'Rohan Joshi', username: 'mojorojo', followers: '597K', image: '/api/placeholder/300/300', background: 'bg-gray-400' },
  { name: 'Bhuvan Bam', username: 'bhuvan.bam22', followers: '19.4M', image: '/api/placeholder/300/300', background: 'bg-gray-200' },
];

const CreatorCard = ({ creator }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
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

const RisingCreaters = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row mb-12 bg-pink-50 rounded-lg overflow-hidden">
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-6xl font-bold mb-4">
            Meet<br />The Design<br />Creator
          </h1><br /><br />
          <div className="text-purple-600 text-4xl flex items-center">
            <u>Read more</u> <ArrowUpRight className="ml-2" size={40} />
          </div>
        </div>
        <div className="md:w-1/2 p-8">
          <div className="flex items-center mb-4">
            <img src={featuredCreator.image} alt={featuredCreator.name} className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h3 className="text-2xl font-bold">{featuredCreator.name}</h3>
              <p className="text-gray-600">{featuredCreator.role}</p>
            </div>
          </div>
          <p className="text-gray-700 mb-6">{featuredCreator.description}</p>
          <div className="flex -space-x-2 overflow-hidden">
            {teamMembers.map((member, index) => (
              <img key={index} className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src={member.image} alt="" />
            ))}
          </div>
        </div>
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-purple-600">On The Rise</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          </div>
          <button className="text-sm font-medium text-gray-600 hover:text-gray-800">View All</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {risingCreators.map((creator, index) => (
            <CreatorCard key={index} creator={creator} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RisingCreaters;