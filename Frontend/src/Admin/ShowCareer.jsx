import { useState, useEffect } from "react";
import axios from "axios";

function ShowCareer() {
  const [data, setData] = useState([]);
  const [editItem, setEditItem] = useState(null); // For managing the item being edited
  const [newName, setNewName] = useState(""); // For holding the new name value
  const [newDescription, setNewDescription] = useState(""); // For holding the new description value

  // Fetch data from the backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/data") // Fetch data from backend API
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);

  // Handle row deletion
  const deleteRow = (id) => {
    axios
      .delete(`http://localhost:5000/api/data/${id}`) // Delete request to the backend
      .then(() => setData(data.filter((item) => item.id !== id))) // Update local state after deletion
      .catch((error) => console.error(error));
  };

  // Open modal for editing
  const openEditModal = (item) => {
    setEditItem(item);
    setNewName(item.name); // Prepopulate with the existing name
    setNewDescription(item.description); // Prepopulate with the existing description
  };

  // Handle data update
  const handleUpdate = () => {
    if (!newName || !newDescription) {
      alert("Name and description cannot be empty.");
      return;
    }

    // Make PUT request to update data
    axios
      .put(`http://localhost:5000/api/updata/${editItem.id}`, {
        name: newName,
        description: newDescription,
      })
      .then((response) => {
        console.log(response.data); // Optional logging for debugging
        setData(
          data.map((item) =>
            item.id === editItem.id ? { ...item, name: newName, description: newDescription } : item
          )
        );
        setEditItem(null); // Close the modal
        alert("Data updated successfully!"); // Show success message
      })
      .catch((error) => {
        console.error("Update failed:", error);
        alert("Failed to update item. Please try again."); // Show error message
      });
  };

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Data Table</h1>
      <table className="min-w-full border border-collapse border-gray-300 table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300">Name</th>
            <th className="px-4 py-2 border border-gray-300">Description</th>
            <th className="px-4 py-2 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-4 py-2 border border-gray-300">{item.name}</td>
              <td className="px-4 py-2 border border-gray-300">
                <ul className="pl-4 space-y-1 list-disc">
                  {item.description
                    .replace(/[[]]/g, "") // Remove square brackets
                    .split(",")
                    .map((point, index) => (
                      <li key={index} className="text-gray-700">
                        {point.trim()}
                      </li>
                    ))}
                </ul>
              </td>
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
            <h2 className="mb-4 text-xl font-bold">Update Data</h2>
            <label className="block mb-2 text-gray-700">Name:</label>
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
            <button
              className="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              onClick={handleUpdate}
            >
              Save
            </button>
            <button
              className="px-4 py-2 text-white bg-gray-500 rounded hover:bg-gray-600"
              onClick={() => setEditItem(null)} // Close the modal
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowCareer;
