import React from 'react';
import { Camera, Instagram, Twitter, Youtube } from 'lucide-react';
import Google from '../assets/google-logo.png';
import Spotify from '../assets/SpotifyLogo.png';
import Stripe from '../assets/Stripe-Logo.png';
import YouTube from '../assets/YouTube-Logo.png';
import Microsoft from '../assets/Microsoft.png';
import Medium from '../assets/Medium.png';
import Zoom from '../assets/Zoom-Logo.png';
import Uber from '../assets/Uber-Logo.png';
import Grab from '../assets/grab-logo.png';


const creators = [
  { name: 'Sharan Hegde', followers: '2.6M', image: '/api/placeholder/100/100' },
  { name: 'Dolly Singh', followers: '1.6M', image: '/api/placeholder/100/100' },
  { name: 'kritika Khurana', followers: '1.8M', image: '/api/placeholder/100/100' },
  { name: 'Bhuvan Bam', followers: '19.4M', image: '/api/placeholder/100/100' },
];

const brands = [
  { name: 'Spotify', logo: <Google size={100} /> },
  { name: 'Google', logo: '/api/placeholder/100/40' },
  { name: 'Stripe', logo: '/api/placeholder/100/40' },
  { name: 'YouTube', logo: '/api/placeholder/100/40' },
  { name: 'Microsoft', logo: '/api/placeholder/100/40' },
  { name: 'Medium', logo: '/api/placeholder/100/40' },
  { name: 'Zoom', logo: '/api/placeholder/100/40' },
  { name: 'Uber', logo: '/api/placeholder/100/40' },
  { name: 'Grab', logo: '/api/placeholder/100/40' },
];

const UGCComponent = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-purple-600">UGC</h1>
        <button className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-full">View All</button>
      </div>
      <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {creators.map((creator, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <img src={creator.image} alt={creator.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">{creator.name}</h3>
              <span className="text-sm text-gray-600">{creator.followers}</span>
            </div>
            <div className="flex space-x-2">
              <Instagram size={16} />
              <Twitter size={16} />
              <Youtube size={16} />
            </div>
            <button className="mt-4 w-full py-2 bg-purple-600 text-white rounded-full">Compare</button>
          </div>
        ))}
      </div>
    <div style={{backgroundColor:'#fafafa'}}>
      <h2 className="text-2xl font-bold mb-6 text-purple-500 flex justify-center">Associated Brands</h2>
      <p className="text-gray-600 mb-8 flex justify-center">Lorem ipsum dolor sit amet, consectetur adipiscing</p>

      <div className="grid grid-cols-3 sm:grid-cols-5 gap-8">
        {/* {brands.map((brand, index) => (
          <img key={index} src={brand.logo} alt={brand.name} className="h-8 object-contain" />
        ))} */}
        <img src={Spotify} alt="Google" className="h-[110px] object-contain" />
        <img src={Google} alt="Google" className="h-[120px] object-contain" />
        <img src={Stripe} alt="Google" className="h-[100px] object-contain" />
        <img src={YouTube} alt="Google" className="h-[110px] object-contain" />
        <img src={Microsoft} alt="Google" className="h-[120px] object-contain" />
        <img src={Medium} alt="Google" className="h-[110px] object-contain" />
        <img src={Zoom} alt="Google" className="h-[110px] object-contain" />
        <img src={Uber} alt="Google" className="h-[90px] object-contain" />
        <img src={Grab} alt="Google" className="h-[110px] object-contain" />
      </div>
    </div>
    </div>
  );
};

export default UGCComponent;