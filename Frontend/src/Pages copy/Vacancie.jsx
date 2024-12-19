import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa"; // Importing an arrow icon
import backgroundImg from "../assets/Vacancy.png";
import Footer from "./../Components/Footer";
import NavBar from "./../Components/NabBar";
import ApplyForm from "./../Components/ApplyForm";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

function Vacancie() {
  const vacancies = [
    { title: "Intern Software Engineer", link: "/intern" },
    { title: "Intern UI-UX Engineer", link: "/UiUxIntern" },
    {
      title: "Digital Marketing Specialist Intern",
      link: "/DigitalMarketingIntern",
    },
    { title: "Quality Assurance Engineer", link: "/QAEngineer" },
    {
      title: "Search Engine Optimization Specialist",
      link: "/SearchEngineOptimizationSpecialist",
    },
    { title: "Customer Care Executive", link: "/CustomerCareExecutive" },
    { title: "Business Analyst", link: "/BusinessAnalyst" },
    { title: "Graphic Designer", link: "/GraphicDesigner" },
    {
      title: "Associate Software Engineer",
      link: "/AssociateSoftwareEngineer",
    },
    { title: "Intern Business Analyst", link: "/InternBusinessAnalyst" },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen (down)
    visible: { opacity: 1, y: 0 }, // Move to its final position (up)
  };

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
        <img
          src={logo}
          alt="Loading..."
          className="w-[200px] h-auto animate-bounce"
        />
      </div>
    );
  }

  return (
    <>
      <NavBar />

      {/* Full-screen background section */}
      <div
        className="relative flex items-center justify-center w-full h-[650px] md:h-screen bg-center bg-cover "
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
        }}
      >
        {/* Darker overlay */}
        <div className="absolute inset-0 z-0 bg-black bg-opacity-70"></div>

        {/* Text content centered */}
        <div className="z-10 w-full px-6 py-8 text-center md:w-2/3 md:px-20">
          <motion.h2
            className="text-4xl font-bold text-white md:text-5xl"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={textVariants}
          >
            Come and Innovate
          </motion.h2>

          <motion.h2
            className="text-4xl font-bold text-white md:text-5xl"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={textVariants}
          >
            with Us
          </motion.h2>

          <motion.p
            className="mt-4 text-sm text-white md:text-lg"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={textVariants}
          >
            Be a part of our mission to revolutionize the future through the
            implementation of innovative and intelligent technological
            solutions. Join us on our quest to create products that have a
            meaningful impact, shaping a safer and more inclusive tomorrow.
          </motion.p>
        </div>
      </div>

      {/* Vacancies Section */}
      <div className="flex items-center justify-center min-h-screen px-4 py-10 md:p-20">
        <div className="w-full max-w-[1200px]">
          <h1 className="mb-[8px] text-3xl font-bold text-center text-[#333333]">
            Open <span className="text-[#7D00C5]"> Vacancies</span>
          </h1>
          <div className="h-1 max-w-screen-xl mt-1 bg-gray-600"></div>
          <div className="p-6">
            {vacancies.map((vacancy, index) => (
              <Link to={vacancy.link} key={index} className="block mb-4">
                <div className="flex flex-col items-start p-6 h-full xl:h-[84px] transition-colors border-2 border-[#D9D9D9] rounded-[15px] bg-[#F9F5FF] hover:border-purple-600 md:flex-row md:justify-between md:items-center">
                  {/* Vacancy Title */}
                  <span className="text-[15px] xl:text-[16px] font-semibold text-[#333333]">
                    {vacancy.title}
                  </span>

                  {/* Buttons */}
                  <div className="flex flex-wrap justify-start gap-2 mt-3 md:mt-0 md:justify-end">
                    <span className="px-5 py-2 text-[13.33px] font-bold border-2 border-[#D9D9D9] text-gray-600 bg-white rounded-full">
                      Full Time
                    </span>
                    <span className="flex items-center px-4 py-2 text-[13.33px] font-bold border-2 border-[#D9D9D9] text-gray-600 bg-white rounded-full">
                      <FaArrowRight className="text-gray-500" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen ">
        <div className="w-full max-w-4xl p-10 border border-gray-200 rounded-lg shadow-lg bg-white">
          <h1 className="text-3xl font-semibold text-gray-800 text-center mb-4">
            Position Not Available?
          </h1>
          <p className="text-center text-gray-600 mb-8 border-b pb-4">
            Submit your application, and we’ll get back to you!
          </p>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-sm"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-sm"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="contactNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-sm"
                placeholder="Enter your contact number"
              />
            </div>

            <div>
              <label
                htmlFor="nicNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                NIC Number
              </label>
              <input
                type="text"
                id="nicNumber"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-sm"
                placeholder="Enter your NIC number"
              />
            </div>

            <div>
              <label
                htmlFor="linkedinProfile"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                LinkedIn Profile
              </label>
              <input
                type="url"
                id="linkedinProfile"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-sm"
                placeholder="Provide your LinkedIn profile link"
              />
            </div>

            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                className="w-full px-4 py-3 text-sm text-gray-500 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="position"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Position Applied For
              </label>
              <input
                type="text"
                id="position"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-sm"
                placeholder="Enter desired position"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Additional Information
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-sm"
                placeholder="Share any additional details or message"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-3 text-sm font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Vacancie;
