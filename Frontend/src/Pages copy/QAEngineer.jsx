import backgroundImg from '../assets/Intern.png';
import Footer from './../Components/Footer';
import NavBar from './../Components/NabBar';
import ApplyForm from './../Components/ApplyForm';
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

function QAEngineer() {

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
                    <h2 className="text-4xl font-bold text-white md:text-5xl">Quality </h2>
                    <h2 className="text-4xl font-bold text-white md:text-5xl">Assurance Engineer</h2>
                </div>
            </div>

           {/* About This Position Section */}
            <div className="px-6 py-6 md:px-20 lg:px-32">
            <p className="text-[32px] font-semibold text-[#333333]">About This Position</p>
            <div className="h-1 max-w-screen-xl mt-2 bg-[#333333]"></div>
            <p className="mt-[4px] text-[16px] font-semibold text-[#333333]">Join Asipiya Soft Solution's Innovation Journey!</p>
            <p className="mt-3 text-[16px] font-normal text-[#333333]">
                This is a full-time Quality Assurance Engineer role with Asipiya Soft Solutions. 
                The Quality Assurance Engineer will be responsible for ensuring quality and proper functionality 
                of software applications. The Engineer will be expected to conduct manual testing and develop test 
                cases to ensure that software applications are performing as expected. This is a hybrid role, 
                located in Colombo with some flexibility to work from home.
            </p>
            <p className="mt-3 text-lg font-bold text-black">Qualifications:</p>

             {/* Sub-point with dot icon and tab space */}
             <div className="flex items-start pl-6 mt-1 space-x-2">
                <div className="w-2 h-2 mt-1 bg-gray-600 rounded-full"></div> {/* Dot icon */}
                <p className="text-[16px] font-normal text-[#333333]">
                    Quality Assurance and Software Testing skills
                </p>
            </div>

            {/* Sub-point with dot icon and tab space */}
            <div className="flex items-start pl-6 mt-1 space-x-2">
                <div className="w-2 h-2 mt-1 bg-gray-600 rounded-full"></div> {/* Dot icon */}
                <p className="text-[16px] font-normal text-[#333333]">
                    Ability to execute tests and develop test cases
                </p>
            </div>

             {/* Sub-point with dot icon and tab space */}
             <div className="flex items-start pl-6 mt-1 space-x-2">
                <div className="w-2 h-2 mt-1 bg-gray-600 rounded-full"></div> {/* Dot icon */}
                <p className="text-[16px] font-normal text-[#333333]">
                    Manual Testing skills
                </p>
            </div>

            <p className="mt-10 text-lg font-bold text-black">Relevant qualifications and skills that would be beneficial include:</p>
            
            {/* Sub-point with dot icon and tab space */}
            <div className="flex items-start pl-6 mt-1 space-x-2">
                <div className="w-2 h-2 mt-1 bg-gray-600 rounded-full"></div> {/* Dot icon */}
                <p className="text-[16px] font-normal text-[#333333]">
                    Bachelor's degree in Computer Science or related field
                </p>
            </div>

            {/* Sub-point with dot icon and tab space */}
            <div className="flex items-start pl-6 mt-1 space-x-2">
                <div className="w-2 h-2 mt-1 bg-gray-600 rounded-full"></div> {/* Dot icon */}
                <p className="text-[16px] font-normal text-[#333333]">
                    Experience with automation testing tools
                </p>
            </div>

             {/* Sub-point with dot icon and tab space */}
             <div className="flex items-start pl-6 mt-1 space-x-2">
                <div className="w-2 h-2 mt-1 bg-gray-600 rounded-full"></div> {/* Dot icon */}
                <p className="text-[16px] font-normal text-[#333333]">
                    Experience in Agile development environments
                </p>
            </div>

             {/* Sub-point with dot icon and tab space */}
             <div className="flex items-start pl-6 mt-1 space-x-2">
                <div className="w-2 h-2 mt-1 bg-gray-600 rounded-full"></div> {/* Dot icon */}
                <p className="text-[16px] font-normal text-[#333333]">
                    Excellent written and verbal communication skills
                </p>
            </div>

            {/* Sub-point with dot icon and tab space */}
            <div className="flex items-start pl-6 mt-1 space-x-2">
                <div className="w-2 h-2 mt-1 bg-gray-600 rounded-full"></div> {/* Dot icon */}
                <p className="text-[16px] font-normal text-[#333333]">
                    Ability to work independently and in a team environment
                </p>
            </div>

            
            </div>
            <ApplyForm/> 
            <Footer />
        </>
    );
}

export default QAEngineer;
