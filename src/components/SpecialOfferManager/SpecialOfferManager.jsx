import React, { useState, useEffect } from "react";
import axiosInstance from "../../api/axiosInstance";

const SpecialOfferManager = () => {
  const [image, setImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch the uploaded image on component load
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const { data } = await axiosInstance.get("/special-offers");
        setUploadedImage(data.imageUrl);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };
    fetchImage();
  }, []);

  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image first!");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      setLoading(true);
      const { data } = await axiosInstance.post(
        "/special-offers/upload",
        formData
      );
      setUploadedImage(data.imageUrl);
      setImage(null);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      setLoading(true);
      await axiosInstance.delete("/special-offers/delete");
      setUploadedImage(null);
    } catch (error) {
      console.error("Error deleting image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen bg-gray-300 rounded">
      <h1 className="text-xl font-bold p-8 shadow-md">
        Manage Special Offer Image
      </h1>
      <div>
        <div className="p-8">
          {uploadedImage ? (
            <div className="mb-4">
              <div className="w-64 h-64 my-4 shadow-lg">
                <img
                  src={uploadedImage}
                  alt="Special Offer"
                  className="w-full h-full object-contain"
                />
              </div>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white rounded"
                disabled={loading}
              >
                {loading ? "Deleting..." : "Delete Image"}
              </button>
            </div>
          ) : (
            <p>No image uploaded yet.</p>
          )}
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="mb-2"
          />
          <button
            onClick={handleUpload}
            className="px-4 py-2 bg-blue-500 block text-white rounded"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload Image"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferManager;
