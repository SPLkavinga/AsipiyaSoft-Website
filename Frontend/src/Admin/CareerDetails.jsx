import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./../Components/NabBar";
import Footer from "./../Components/Footer";

function CareerDetails() {
  const { id } = useParams();  // Extract the ID from the URL
  const [career, setCareer] = useState(null);

  useEffect(() => {
    const fetchCareerDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/career/${id}`);
        const data = await response.json();

        console.log(data); // Check the fetched data structure

        // If the response is an array, use the first item
        if (Array.isArray(data)) {
          setCareer(data[0]);
        } else {
          setCareer(data); // Otherwise, assume it's an object
        }
      } catch (error) {
        console.error("Error fetching career details:", error);
      }
    };

    fetchCareerDetails();
  }, [id]);

  if (!career) {
    return <div>Loading career details...</div>;
  }

  return (
    <>
      <NavBar />
      <div className="p-10">
        <h1 className="text-3xl font-semibold">{career.name}</h1>
        <p className="mt-4 text-lg">{career.description}</p>
      </div>
      <Footer />
    </>
  );
}

export default CareerDetails;
