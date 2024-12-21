import { Link } from "react-router-dom";

function Landingpage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 via-purple-50 to-purple-500">
      <div className="flex flex-col items-center justify-center bg-black w-[400px] h-[500px]">
        {/* First Button */}
        <Link className="block px-5 py-3 mb-4 text-white bg-purple-400 rounded hover:bg-purple-300" to="/AddCareers">
          ADD CAREERS
        </Link>
        {/* Second Button */}
        <Link className="block px-5 py-3 text-white bg-purple-400 rounded hover:bg-purple-300" to="/ShowCareer">
          SEE CAREERS
        </Link>
      </div>
    </div>
  );
}

export default Landingpage;
