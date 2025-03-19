import React, { useState } from "react";
import defaultLogo from "./assets/football.png"

const App = () => {
  const [bgColor, setBgColor] = useState("#1E3A8A");
  const [title, setTitle] = useState("I love watching football because it is a game of passion and excitement. It brings me great joy, and the thrills, intensity, and excitement always make me feel alive.");
  const [image, setImage] = useState(null);

  
  function getImage(event) {
    setImage(URL.createObjectURL(event.target.files[0]));
  }

  return (
    <div className="bg-gray-100 flex flex-col items-center p-10 min-h-screen">
      {/* Banner */}
      <div
        className="w-full relative flex items-center justify-center text-white text-lg p-4 font-bold transition-all duration-500 h-[40vh] rounded"
        style={{ backgroundColor: bgColor }}
      >
        {title}
        <img
          src={image || defaultLogo} // Show uploaded image or default Wikimedia logo
          alt="Banner Logo"
          className="absolute top-5 left-5 h-16 rounded-lg shadow-md"
        />
      </div>

      {/* Form to change banner background color */}
      <div className="mt-5 p-5 bg-white shadow-md rounded-lg w-80 text-center">
        <label className="block mb-2 text-gray-700 font-semibold">
          Choose a background color:
        </label>
        <input
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
          className="border p-2 rounded "
        />
      </div>

      {/* Form to change banner title */}
      <div className="mt-5 p-5 bg-white shadow-md rounded-lg w-80 text-center">
        <label className="block mb-2 text-gray-700 font-semibold">
          Banner Title:
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 bg-white text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter banner title..."
        />
      </div>

      {/* Upload Image */}
      <div className="mt-5 p-5 bg-white shadow-md rounded-lg w-80 text-center">
        <label className="block mb-2 text-gray-700 font-semibold">
          Upload Banner Image:
        </label>
        <input
          type="file"
          onChange={getImage}
          className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-700"
        />
      </div>
    </div>
  );
};

export default App;
