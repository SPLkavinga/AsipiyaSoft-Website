import backgroundImg from '../assets/Intern.png';
import Footer from './../Components/Footer';
import NavBar from './../Components/NabBar';
import ApplyForm from './../Components/ApplyForm';
import { useState , useEffect } from 'react';
import logo from "../assets/logo.png";



function AssociateSoftwareEngineer() {
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
                    <h2 className="text-4xl font-bold text-white md:text-5xl">Associate</h2>
                    <h2 className="text-4xl font-bold text-white md:text-5xl">Software Engineer</h2>
                </div>
            </div>

           {/* About This Position Section */}
            <div className="px-6 py-6 md:px-20 lg:px-32">
            <p className="text-[32px] font-semibold text-[#333333]">About This Position</p>
            <div className="h-1 max-w-screen-xl mt-2 bg-[#333333]"></div>
            <p className="mt-[4px] text-[16px] font-semibold text-[#333333]">Join Asipiya Soft Solution's Innovation Journey!</p>
            <p className="mt-[4px] text-[16px] font-semibold text-[#333333]">
                Ready to make an impact? We are looking for Associate Software Engineer to join our dynamic team.
            </p>
            <p className="mt-3 text-lg font-bold text-black">Requirements:</p>

              {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-[16px] font-normal text-[#333333]">
                    Strong understanding of programming fundamentals, data structures, and algorithms.
                </p>
            </div>

             {/* Web Markup Proficiency with a diamond bullet */}
             <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-[16px] font-normal text-[#333333]">
                    Proficiency in React.js with JavaScript/TypeScript, JSX, Redux, and asynchronous programming.
                </p>
            </div>

             {/* Web Markup Proficiency with a diamond bullet */}
             <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-[16px] font-normal text-[#333333]">
                    Strong backend development skills using PHP with Laravel, covering MVC architecture, RESTful API 
                    development, routing, middleware, and authentication.
                </p>
            </div>

             {/* Web Markup Proficiency with a diamond bullet */}
             <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-[16px] font-normal text-[#333333]">
                    Good knowledge of PostgreSQL for database design, querying, and optimization.
                </p>
            </div>

            {/* Web Markup Proficiency with a diamond bullet */}
            <div className="flex items-center mt-3 space-x-2">
                <div className="w-3 h-3 transform rotate-45 bg-gradient-to-t from-blue-400 to-blue-600"></div>
                <p className="text-[16px] font-normal text-[#333333]">
                    Excellent problem-solving skills, with the ability to analyze complex issues and implement effective solutions.
                </p>
            </div>

            
            </div>
            <ApplyForm/> 
            <Footer />
        </>
    );
}

export default AssociateSoftwareEngineer;
