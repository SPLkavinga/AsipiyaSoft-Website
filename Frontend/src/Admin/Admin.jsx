import { Link } from "react-router-dom";

function Admin() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 via-purple-50 to-purple-500">
        <Link className="px-5 py-3 mb-4 text-center text-white bg-black rounded" to="/AddCareers">ADD CAREERS</Link>
        <Link className="px-5 py-3 text-center text-white bg-black rounded" to="/ShowCareer">SEE CAREERS</Link>
      </div>
    </>
  );
}

export default Admin;