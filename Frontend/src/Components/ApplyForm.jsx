import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa"; // Importing success icon

function ApplyForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contactNumber: "",
        nicNumber: "",
        linkedinProfile: "",
        position: "",
        message: "",
        image: null,
    });

    const [successMessage, setSuccessMessage] = useState(""); // State for success message
    const [showModal, setShowModal] = useState(false); // State to control modal visibility

    // Handle input and file changes
    const handleChange = (e) => {
        const { id, value, files } = e.target;
        setFormData({
            ...formData,
            [id]: files ? files[0] : value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare the form data for submission
        const formPayload = new FormData();
        Object.keys(formData).forEach((key) => {
            formPayload.append(key, formData[key]);
        });

        try {
            const response = await fetch("http://localhost:5000/apply", {
                method: "POST",
                body: formPayload,
            });

            if (response.ok) {
                setSuccessMessage("Application submitted successfully!");
            } else {
                setSuccessMessage("Failed to submit the application.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setSuccessMessage("An error occurred while submitting the form.");
        }

        // Show modal after submission
        setShowModal(true);

        // Automatically close the modal after 4 seconds
        setTimeout(() => {
            setShowModal(false);
        }, 4000);
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen mt-10">
                <div className="w-full max-w-4xl p-8 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                        Apply for this Job
                    </h1>
                    <div className="h-1 w-full bg-gray-300 mb-6"></div>

                    {/* Form Section */}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {Object.keys(formData).map((key) =>
                            key !== "image" ? (
                                <div key={key}>
                                    <label
                                        htmlFor={key}
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        {key
                                            .charAt(0)
                                            .toUpperCase() +
                                            key.slice(1).replace(/([A-Z])/g, " $1")}
                                    </label>
                                    {key === "message" ? (
                                        <textarea
                                            id={key}
                                            rows="3"
                                            value={formData[key]}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
                                            placeholder={`Enter your ${key}`}
                                        />
                                    ) : (
                                        <input
                                            type={key === "email" ? "email" : "text"}
                                            id={key}
                                            value={formData[key]}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 text-sm"
                                            placeholder={`Enter your ${key}`}
                                        />
                                    )}
                                </div>
                            ) : (
                                <div key={key}>
                                    <label
                                        htmlFor={key}
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Upload Image
                                    </label>
                                    <input
                                        type="file"
                                        id={key}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 text-sm text-gray-500 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
                                    />
                                </div>
                            )
                        )}

                        {/* Submit Button */}
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="px-6 py-3 text-sm font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            >
                                Submit
                            </button>
                        </div>
                    </form>

                    {/* Success Modal */}
                    {showModal && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <div className="w-80 p-6 text-center bg-white rounded-lg shadow-lg">
                                <div className="flex items-center justify-center mb-3 space-x-2">
                                    <FaCheckCircle className="text-3xl text-green-500" />
                                    <p className="font-semibold text-green-600">{successMessage}</p>
                                </div>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 mt-4 text-sm text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default ApplyForm;
