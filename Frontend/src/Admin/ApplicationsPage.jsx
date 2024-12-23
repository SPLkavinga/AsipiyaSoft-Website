import React, { useEffect, useState } from "react";

const ApplicationsPage = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    const fetchApplications = async () => {
      try {
        const response = await fetch("http://localhost:5000/applications");
        const data = await response.json();
        setApplications(data);
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-8xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Job Applications</h1>
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gradient-to-r from-[#95759b] to-[#95759b] text-white text-sm uppercase font-semibold tracking-wide">
                <th className="border border-gray-300 px-4 py-3 text-left">ID</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Name</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Email</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Contact Number</th>
                <th className="border border-gray-300 px-4 py-3 text-left">NIC Number</th>
                <th className="border border-gray-300 px-4 py-3 text-left">LinkedIn Profile</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Position</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Message</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Resume</th>
              </tr>
            </thead>
            <tbody>
              {applications.length > 0 ? (
                applications.map((application) => (
                  <tr
                    key={application.id}
                    className="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200"
                  >
                    <td className="border border-gray-300 px-4 py-2">{application.id}</td>
                    <td className="border border-gray-300 px-4 py-2">{application.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{application.email}</td>
                    <td className="border border-gray-300 px-4 py-2">{application.contactNumber}</td>
                    <td className="border border-gray-300 px-4 py-2">{application.nicNumber}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <a
                        href={application.linkedinProfile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#5C0091] hover:underline"
                      >
                        LinkedIn
                      </a>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">{application.position}</td>
                    <td className="border border-gray-300 px-4 py-2">{application.message}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      {application.filePath ? (
                        <a
                          href={`http://localhost:5000/${application.filePath}`}
                          className="inline-block px-3 py-1 text-sm text-white bg-[#7D00C5] rounded hover:bg-[#5C0091]"
                          download
                        >
                          Download
                        </a>
                      ) : (
                        <span className="text-gray-500">No File</span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="9"
                    className="text-center text-gray-600 py-4 font-medium"
                  >
                    No applications found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsPage;
