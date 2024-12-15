"use client"; // For client-side interactivity

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [selectedCountry, setSelectedCountry] = useState(""); // State for selected country
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedCountry) {
      // Store the selected country in localStorage
      localStorage.setItem("selectedCountry", selectedCountry);

      // Navigate to the home page
      router.push("/");
    } else {
      alert("Please select a country before proceeding.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login Page
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Country Dropdown */}
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Select Country
            </label>
            <select
              id="country"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Country</option>
              <option value="USA">United States</option>
              <option value="India">India</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              GO
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

//dropdown

// "use client";
// import { useState } from "react";

// const Login = ({ onLoginSuccess }) => {
//   const [selectedCountry, setSelectedCountry] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (selectedCountry) {
//       localStorage.setItem("selectedCountry", selectedCountry);
//       onLoginSuccess(); // Navigate to the main content
//     } else {
//       alert("Please select a country before proceeding.");
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
//       <div className="w-full max-w-sm sm:max-w-md p-6 sm:p-8 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
//           Select Your Country
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6" id="form1">
//           {/* Country Dropdown */}
//           <div>
//             <label
//               htmlFor="country"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Country
//             </label>
//             <select
//               id="country"
//               value={selectedCountry}
//               onChange={(e) => setSelectedCountry(e.target.value)}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             >
//               <option value="">Select Country</option>
//               <option value="USA">United States</option>
//               <option value="India">India</option>
//               <option value="Canada">Canada</option>
//               <option value="Australia">Australia</option>
//               <option value="Germany">Germany</option>
//             </select>
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
//             >
//               GO
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

//push data layer

//working of capturing caountryname in drop down
// "use client";
// import { useState } from "react";

// const Login = ({ onLoginSuccess }) => {
//   const [selectedCountry, setSelectedCountry] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (selectedCountry) {
//       // Save selected country to local storage
//       localStorage.setItem("selectedCountry", selectedCountry);

//       // Push the selected country to the data layer
//       window.dataLayer = window.dataLayer || [];
//       window.dataLayer.push({
//         event: "select_country",
//         country: selectedCountry
//       });

//       console.log("Data Layer:", window.dataLayer); // Debugging

//       onLoginSuccess(); // Navigate to the main content
//     } else {
//       alert("Please select a country before proceeding.");
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
//       <div className="w-full max-w-sm sm:max-w-md p-6 sm:p-8 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
//           Select Your Country
//         </h2>

//         {/* Country Selection Form */}
//         <form onSubmit={handleSubmit} className="space-y-6" id="form1">
//           <div>
//             <label htmlFor="country" className="block text-sm font-medium text-gray-700">
//               Country
//             </label>
//             <select
//               id="country"
//               value={selectedCountry}
//               onChange={(e) => setSelectedCountry(e.target.value)}
//               className="mt-1 block w-full p-2 border rounded-lg bg-gray-50"
//             >
//               <option value="">Select Country</option>
//               <option value="USA">United States</option>
//               <option value="India">India</option>
//               <option value="Canada">Canada</option>
//               <option value="Australia">Australia</option>
//               <option value="Germany">Germany</option>
//             </select>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg"
//           >
//             GO
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
