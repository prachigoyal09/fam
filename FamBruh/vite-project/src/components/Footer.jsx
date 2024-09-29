import React from 'react';
import { Search, Share2, CreditCard, Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow">
        <section className="py-16 px-4">
          <h2 className="text-3xl font-bold text-center text-purple-600 mb-12">How it works</h2>
          <div className="flex justify-center items-start space-x-8">
            {[
              { icon: <Search className="w-8 h-8 text-white" />, title: 'Search', color: 'bg-purple-500' },
              { icon: <Share2 className="w-8 h-8 text-white" />, title: 'Share & Review', color: 'bg-blue-400' },
              { icon: <CreditCard className="w-8 h-8 text-white" />, title: 'Pay Securly', color: 'bg-pink-400' },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center max-w-xs">
                <div className={`${step.color} p-4 rounded-lg mb-4`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-center text-gray-600">
                  Search through thousands of creators for free and find the one best suited for the campaign.
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100">
        <div style={{backgroundColor:"#f6efec"}} className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">BookMyCollab</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              </p>
              <div className="flex space-x-4">
                {[Instagram, Linkedin, Twitter, Mail].map((Icon, index) => (
                  <a key={index} href="#" className="text-purple-600 hover:text-purple-800">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                {['About', 'Career', 'Terms & Conditions', 'Privacy Policy', 'Refund Policy'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-gray-800">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Join us</h3>
              <ul className="space-y-2">
                {['Join as a brand', 'Join as a creator', 'Find creator'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-gray-800">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div style={{backgroundColor:'#302c2c'}} className=" bg-gray-200 py-4">
          <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
            <div className="flex space-x-64 mb-4 md:mb-0">
              {['No Upfront Payment', 'Verified Creators', 'Inbuilt Messengers', 'Secure and Timely Payment'].map((item, index) => (
                <span style={{color:'white'}} key={index} className="text-sm text-gray-600">{item}</span>
              ))}
            </div>
            
          </div>
          
        </div>
        <div className="p-3 text-sm text-gray-600 flex justify-between">
              <div>© Copyright • All Rights Reserved Book</div> 
              <div>MyCollab 2024</div>   
        </div>
      </footer>
    </div>
  );
};

export default Footer;