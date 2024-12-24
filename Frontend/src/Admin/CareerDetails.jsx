import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NabBar";
import backgroundImg from "../assets/Vacancy.png";

function CareerDetails() {
  const { title } = useParams(); // Get career title from the URL params
  console.log("Career name:", title); // Debugging line to check if the name is extracted

  const [careerDetails, setCareerDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCareerDetails = async () => {
      if (!title) {
        console.error("Career name is missing!"); // Debugging line
        return;
      }
      try {
        const response = await fetch(
          `http://localhost:5000/api/career/${title}`
        );
        if (!response.ok) {
          throw new Error("Career not found");
        }
        const data = await response.json();
        setCareerDetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching career details:", error);
        setLoading(false);
      }
    };

    fetchCareerDetails();
  }, [title]);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-white">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  if (!careerDetails) {
    return <div className="text-center text-red-500">Career not found!</div>;
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
        <div className="z-10 w-full px-6 py-8 text-center md:w-1/2 md:px-20">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            {careerDetails.title}
          </h2>
          <div className="flex justify-center mt-4">
          <p className="px-5 py-2 text-sm font-bold border-2 md:w-[200px] border-[#D9D9D9] text-gray-600 bg-white rounded-full">
            {careerDetails.job_type}
          </p>
          </div>
        </div>
      </div>

      {/* Career Details Section */}
      <div className="flex items-center justify-center min-h-screen px-4 py-10 md:p-20">
        <div className="w-full max-w-[1200px]">
          {/* Job Type Badge */}
          <div className="mb-4 w-full">
            <span className="block mt-4 text-sm text-black md:text-[16px] break-words whitespace-pre-wrap">
              {careerDetails.description}
            </span>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-[#333333]">
            Responsibilities
          </h3>

          {/* Bullet Points */}
          {careerDetails.bullet_points && (
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              {careerDetails.bullet_points.split(",").map((point, index) => (
                <li key={index} className="text-sm">
                  {point.trim()}
                </li>
              ))}
            </ul>
          )}

          {/* Apply Section */}
          <div className="p-6 border-2 border-[#D9D9D9] rounded-[15px] bg-[#F9F5FF] mt-10">
            <h1 className="text-3xl font-semibold text-gray-800 text-center mb-4">
              Apply for this Position
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
                  value={careerDetails.title} // Pre-fill with current job title
                  readOnly
                />
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
      </div>

      <Footer />
    </>
  );
}

export default CareerDetails;
