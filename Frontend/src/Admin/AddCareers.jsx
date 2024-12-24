import React, { useState } from "react";
import axios from "axios";
import AdminNavbar from "./Admincomponent/AdminNavbar";

function AddCareers() {
  const [formData, setFormData] = useState({
    title: "",
    jobType: "", // Full-time or Part-time
    description: "",
    bulletPoints: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/save",
        formData
      );
      alert(response.data.message);
      setFormData({
        title: "",
        jobType: "",
        description: "",
        bulletPoints: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to save data");
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="flex  bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="p-[45px] space-y-4 bg-white rounded shadow-md w-full"
        >
          <h1 className="text-xl font-bold">Add Career Form</h1>

          <div>
            <label htmlFor="title" className="block text-sm font-medium">
              Job Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="jobType" className="block text-sm font-medium">
              Job Type
            </label>
            <select
              id="jobType"
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select Job Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
            </select>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium">
              Description
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

          <div>
            <label htmlFor="bulletPoints" className="block text-sm font-medium">
              Bullet Point Descriptions (separate with commas)
            </label>
            <textarea
              id="bulletPoints"
              name="bulletPoints"
              value={formData.bulletPoints}
              onChange={handleChange}
              rows="4"
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              placeholder="Example: Flexible work hours, Great benefits, Collaborative team, etc."
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-[160px] py-2 text-white bg-[#7D00C5] hover:bg-[#5C0091] rounded-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddCareers;
