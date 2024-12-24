import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "./Admincomponent/AdminNavbar";

const ContactFormDetails = () => {
  const [contactDetails, setContactDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch contact form data from the server
  useEffect(() => {
    axios
      .get("http://localhost:5000/get-email-details")
      .then((response) => {
        setContactDetails(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching contact details");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  }

  return (
    <>
    <AdminNavbar/>
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-8xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Form Submissions</h1>
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gradient-to-r from-[#95759b] to-[#95759b] text-white text-sm uppercase font-semibold tracking-wide">
                <th className="border border-gray-300 px-4 py-3 text-left">First Name</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Last Name</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Email</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Phone Number</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Message</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Interests</th>
              </tr>
            </thead>
            <tbody>
              {contactDetails.length > 0 ? (
                contactDetails.map((detail) => (
                  <tr
                    key={detail.id}
                    className="odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200"
                  >
                    <td className="border border-gray-300 px-4 py-2">{detail.firstName}</td>
                    <td className="border border-gray-300 px-4 py-2">{detail.lastName}</td>
                    <td className="border border-gray-300 px-4 py-2">{detail.email}</td>
                    <td className="border border-gray-300 px-4 py-2">{detail.phoneNumber}</td>
                    <td
                      className="border border-gray-300 px-4 py-2 break-words whitespace-normal"
                      style={{
                        maxWidth: "300px",
                        wordWrap: "break-word",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      {detail.message}
                    </td>
                    <td
                      className="border border-gray-300 px-4 py-2 break-words whitespace-normal"
                      style={{
                        maxWidth: "300px",
                        wordWrap: "break-word",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      {detail.interests}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-gray-600 py-4 font-medium">
                    No contact details found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactFormDetails;
