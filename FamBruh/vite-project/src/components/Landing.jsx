import React from 'react';
import { Search } from 'lucide-react';

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="flex justify-between items-center p-4 border-b">
        <h1 className="text-2xl font-bold">BookMyCollab</h1>
        <nav className="flex space-x-16">
          <a href="#" className="text-gray-600 hover:text-gray-900">What We Do</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">How It Works</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Join Us As Brand</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Join Us As Creator</a>
          <button className="bg-purple-600 text-white px-4 py-2 rounded">Login</button>
        </nav>
      </header>
      
      <main className="flex-grow flex">
        <div className="w-1/2 p-12 flex flex-col justify-center">
          <div className="text-yellow-400 text-4xl mb-4">👋</div>
          <h2 className="text-4xl font-bold text-purple-600 mb-4">
            Simplifying Influencer<br />Marketing For You!
          </h2>
          <p className="text-gray-600 mb-8">
            Explore creators across YouTube, Instagram &<br />
            Facebook to curate unique content for your brand
          </p>
          <div className="flex mb-4">
            <div className="relative">
              <select className="appearance-none bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option>Facebook</option>
                <option>Instagram</option>
                <option>Snapchat</option>
                <option>YouTube</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
            <input type="text" placeholder="Select Category" className="border border-gray-300 rounded-md px-4 py-2 ml-2" />
            <button className="bg-purple-600 text-white px-6 py-2 rounded ml-2 flex items-center">
              {/* <Search size={20} className="mr-2" /> */}
              Search
            </button>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>Trusted By</span> 
            <br /> 
            {['CHANEL', 'LOUIS VUITTON', 'PRADA', 'Calvin Klein', 'DENIM'].map((brand, index) => (
              <span key={index} className="font-semibold">{brand}</span>
            ))}
          </div>
        </div>
        
        <div className="w-1/2 p-12 flex items-center justify-center relative">
          <div className="bg-purple-100 rounded-full w-96 h-96 flex items-center justify-center">
            <img src="/api/placeholder/400/600" alt="Influencer" className="rounded-lg shadow-lg" />
          </div>
          <div className="absolute top-1/4 right-1/4 bg-pink-500 text-white p-2 rounded">
            <div className="text-xs">+48%</div>
            <div className="flex space-x-1">
              {[1,2,3,4].map(i => <div key={i} className="w-2 bg-white" style={{height: `${i*4}px`}}></div>)}
            </div>
          </div>
          <div className="absolute bottom-1/4 left-1/4 bg-white p-2 rounded shadow-lg">
            <div className="text-sm font-semibold">New Followers</div>
            <div className="text-lg font-bold">1,34,002</div>
            <div className="flex -space-x-2 overflow-hidden">
              {[1,2,3,4,5].map(i => (
                <img key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src={`/api/placeholder/${30+i}/${30+i}`} alt="" />
              ))}
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-bold text-red-500 opacity-20" style={{writingMode: 'vertical-rl'}}>
              ENGAGE • GROW • EARN
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;