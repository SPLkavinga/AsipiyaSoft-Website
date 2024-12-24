import { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "./Admincomponent/AdminNavbar";

function ShowCareer() {
  const [data, setData] = useState([]);
  const [editItem, setEditItem] = useState(null); // For managing the item being edited
  const [newName, setNewName] = useState(""); // For holding the new title value
  const [newDescription, setNewDescription] = useState(""); // For holding the new description value
  const [newJobType, setNewJobType] = useState(""); // For holding new job type value
  const [newShortTitle, setNewShortTitle] = useState(""); // For short title
  const [newShortDis, setNewShortDis] = useState(""); // For short description

  // Fetch data from the backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/data")
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  // Handle row deletion
  const deleteRow = (id) => {
    axios
      .delete(`http://localhost:5000/api/data/${id}`)
      .then(() => setData(data.filter((item) => item.id !== id)))
      .catch((error) => console.error(error));
  };

  // Open modal for editing
  const openEditModal = (item) => {
    setEditItem(item);
    setNewName(item.title);
    setNewDescription(item.description);
    setNewJobType(item.jobType);
    setNewShortTitle(item.shortTitle);
    setNewShortDis(item.shortDis);
  };

  // Handle data update
  const handleUpdate = () => {
    if (!newName || !newDescription || !newJobType || !newShortTitle || !newShortDis) {
      alert("All fields are required.");
      return;
    }

    axios
      .put(`http://localhost:5000/api/update/${editItem.id}`, {
        title: newName,
        jobType: newJobType,
        description: newDescription,
        shortTitle: newShortTitle,
        shortDis: newShortDis,
      })
      .then(() => {
        setData(
          data.map((item) =>
            item.id === editItem.id
              ? {
                  ...item,
                  title: newName,
                  description: newDescription,
                  jobType: newJobType,
                  shortTitle: newShortTitle,
                  shortDis: newShortDis,
                }
              : item
          )
        );
        setEditItem(null);
        alert("Data updated successfully!");
      })
      .catch((error) => {
        console.error("Update failed:", error);
        alert("Failed to update item. Please try again.");
      });
  };

  return (
    <>
      <AdminNavbar />
      <div className="container p-4 mx-auto">
        <h1 className="mb-4 text-2xl font-bold text-center">Career Data Table</h1>
        <table className="min-w-full border border-collapse border-gray-300 table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-300">Title</th>
              <th className="px-4 py-2 border border-gray-300">Description</th>
              <th className="px-4 py-2 border border-gray-300">Job Type</th>
              <th className="px-4 py-2 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2 border border-gray-300">{item.title}</td>
                <td className="px-4 py-2 border border-gray-300">
                  <ul className="pl-4 space-y-1 list-disc">
                    {item.description
                      .replace(/[[]]/g, "")
                      .split(",")
                      .map((point, index) => (
                        <li key={index} className="text-gray-700">
                          {point.trim()}
                        </li>
                      ))}
                  </ul>
                </td>
                <td className="px-4 py-2 border border-gray-300">{item.jobType}</td>
                <td className="px-4 py-2 border border-gray-300">
                  <button
                    className="px-2 py-1 mr-2 text-white bg-red-500 rounded hover:bg-red-600"
                    onClick={() => deleteRow(item.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="px-2 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
                    onClick={() => openEditModal(item)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Update Modal */}
        {editItem && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
            <div className="w-1/3 p-6 bg-white rounded shadow-lg">
              <h2 className="mb-4 text-xl font-bold">Update Career Data</h2>
              <label className="block mb-2 text-gray-700">Title:</label>
              <input
                type="text"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <label className="block mb-2 text-gray-700">Description:</label>
              <textarea
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              ></textarea>
              <label className="block mb-2 text-gray-700">Job Type:</label>
              <select
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                value={newJobType}
                onChange={(e) => setNewJobType(e.target.value)}
              >
                <option value="">Select Job Type</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
              </select>
              <label className="block mb-2 text-gray-700">Short Title:</label>
              <input
                type="text"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                value={newShortTitle}
                onChange={(e) => setNewShortTitle(e.target.value)}
              />
              <label className="block mb-2 text-gray-700">Short Description:</label>
              <textarea
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                value={newShortDis}
                onChange={(e) => setNewShortDis(e.target.value)}
              ></textarea>
              <button
                className="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                onClick={handleUpdate}
              >
                Save
              </button>
              <button
                className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600"
                onClick={() => setEditItem(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ShowCareer;
