import React, { useState } from "react";
import axios from "axios";

function AddCareers() {
    const [formData, setFormData] = useState({ name: "", description: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/save", formData);
      alert(response.data.message);
      setFormData({ name: "", description: "" });
    } catch (error) {
      console.error(error);
      alert("Failed to save data");
    }
  };
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="p-6 space-y-4 bg-white rounded shadow-md w-96"
      >
        <h1 className="text-xl font-bold">Add Form</h1>

        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium">
            Description (Point-wise, separate by commas)
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
    </>

  )
}

export default AddCareers;