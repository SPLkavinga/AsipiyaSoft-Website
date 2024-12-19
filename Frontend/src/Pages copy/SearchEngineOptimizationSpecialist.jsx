import backgroundImg from '../assets/Intern.png';
import Footer from './../Components/Footer';
import NavBar from './../Components/NabBar';
import ApplyForm from './../Components/ApplyForm';
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

function SearchEngineOptimizationSpecialist() {

     const [loading, setLoading] = useState(true);
      
        // Simulate a loading delay of 3 seconds
        useEffect(() => {
          const timer = setTimeout(() => {
            setLoading(false);
          }, 1000); // 3 seconds
          return () => clearTimeout(timer);
        }, []);
      
      
        // Loading screen
        if (loading) {
          return (
            <div className="flex items-center justify-center w-full h-screen bg-white">
              <img src={logo} alt="Loading..." className="w-[200px] h-auto animate-bounce" />
            </div>
          );
        }

    return (
        <>
            <NavBar />

            {/* Full-screen background section */}
            <div
                className="relative flex items-center justify-center w-full h-auto bg-center bg-cover md:h-screen"
                style={{
                    backgroundImage: `url(${backgroundImg})`,
                    backgroundSize: 'cover',
                }}
            >
                {/* Darker overlay */}
                <div className="absolute inset-0 z-0 bg-black bg-opacity-70"></div>

                {/* Text content centered */}
                <div className="z-10 w-full px-6 py-8 text-center md:w-2/3 md:px-20">
                    <h2 className="text-4xl font-bold text-white md:text-5xl">Search Engine Optimization Specialist</h2>
                </div>
            </div>

           {/* About This Position Section */}
            <div className="px-6 py-6 md:px-20 lg:px-32">
            <p className="text-[32px] font-semibold text-[#333333]">About This Position</p>
            <div className="h-1 max-w-screen-xl mt-2 bg-[#333333]"></div>
            <p className="mt-[4px] text-[16px] font-semibold text-[#333333]">Join Asipiya Soft Solution's Innovation Journey!</p>
            <p className="text-[16px] mt-[4px] font-normal text-[#333333]">
                This is a full-time hybrid role for a Search Engine Optimization (SEO) Specialist located in Colombo, 
                with flexibility for some remote work. The SEO Specialist will be responsible for conducting keyword research, 
                performing SEO audits, building links, analyzing web traffic with web analytics tools, and optimizing 
                on-page SEO. The SEO Specialist will also work closely with content creators to identify areas of 
                improvement for new and existing content.
            </p>
            <p className="mt-3 text-lg font-bold text-black">Qualifications:</p>

            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-[16px] font-normal text-[#333333]">
                    Over 2 years of hands-on experience in Search Engine Marketing (SEM) and E-commerce Search Engine 
                    Optimization (SEO), demonstrating a strong and proven understanding of these areas.
                </p>
            </div>

            
            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-[16px] font-normal text-[#333333]">
                    Proficient in working with popular keyword tools such as Screaming Frog, Ahrefs, SEMRush, and SimilarWeb.
                </p>
            </div>

            
            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-[16px] font-normal text-[#333333]">
                    Over 2 years of hands-on experience in Search Engine Marketing (SEM) and E-commerce Search Engine 
                    Optimization (SEO), demonstrating a strong and proven understanding of these areas.
                </p>
            </div>

            
            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-[16px] font-normal text-[#333333]">
                    Extensive experience with web analytics tools for internal reporting, including Google Analytics, 
                    Google Search Console, and Looker Studio.
                </p>
            </div>

            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-[16px] font-normal text-[#333333]">
                    Hands-on experience working with Shopify and ActiveCampaign.
                </p>
            </div>

            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-[16px] font-normal text-[#333333]">
                    Knowledgeable in HTML, CSS, JavaScript, and XML.
                </p>
            </div>

            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-[16px] font-normal text-[#333333]">
                    High-level proficiency in project management tools such as Asana, Notion, as well as Microsoft Excel, 
                    PowerPoint, and Word.
                </p>
            </div>

            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-[16px] font-normal text-[#333333]">
                    Possessing an analytical mindset with a strong numerical aptitude, always adopting critical thinking 
                    and a devil's advocate mentality.
                </p>
            </div>
            </div>
            <ApplyForm/> 
            <Footer />
        </>
    );
}

export default SearchEngineOptimizationSpecialist
;
