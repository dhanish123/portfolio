"use client"
import { useState , useEffect } from "react";
import HeroSection from "./Components/HeroSection";
import Navbar  from "./Components/Navbar";
import AboutSection from "./Components/AboutSection";
import ProjectSection from "./Components/ProjectSection";
import EmailSection from "./Components/EmailSection";
import Footer from "./Components/Footer";
import AchievementsSection from "./Components/AchievementsSection";
import Image from "next/image";
import Login from "./Components/Login";


export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    const timer   = setTimeout(()=>{
      setLoading(false);  // Hide loading after 2 seconds
    },2000)
    return() =>clearTimeout(timer);

  },[]);


  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <Image src="/images/loading.gif" alt="Loading..."   width={300}
              height={300} />
        </div>
      ) : (
        <>
      <Navbar/>
      <div className="container mt-16 mx-auto px-12 py-4">
      <HeroSection />
      <AchievementsSection />
      <AboutSection /> 
      <ProjectSection />
      <EmailSection />
      </div>
      <Footer />
      </>
           )}
    </main>
  );
}


// "use client";
// import { useState, useEffect } from "react";
// import HeroSection from "./Components/HeroSection";
// import Navbar from "./Components/Navbar";
// import AboutSection from "./Components/AboutSection";
// import ProjectSection from "./Components/ProjectSection";
// import EmailSection from "./Components/EmailSection";
// import Footer from "./Components/Footer";
// import AchievementsSection from "./Components/AchievementsSection";
// import Image from "next/image";
// import Login from "./Components/Login";

// export default function Home() {
//   const [loading, setLoading] = useState(true); // Loading state
//   const [showMainContent, setShowMainContent] = useState(false); // State for showing main content

//   // Simulate loading for 2 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false); // Stop loading
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   // Function to handle navigation from Login to Main Content
//   const handleLoginSuccess = () => {
//     setShowMainContent(true); // Display main content
//   };

//   return (
//     <main className="flex min-h-screen flex-col bg-[#121212]">
//       {loading ? (
//         // Show loading screen
//         <div className="flex items-center justify-center h-screen">
//           <Image
//             src="/images/loading.gif"
//             alt="Loading..."
//             width={300}
//             height={300}
//           />
//         </div>
//       ) : showMainContent ? (
//         // Show Navbar and Main Content after successful login
//         <>
//           <Navbar />
//           <div className="container mt-16 mx-auto px-12 py-4">
//             <HeroSection />
//             <AchievementsSection />
//             <AboutSection />
//             <ProjectSection />
//             <EmailSection />
//           </div>
//           <Footer />
//         </>
//       ) : (
//         // Show Login page initially
//         <Login onLoginSuccess={handleLoginSuccess} />
//       )}
//     </main>
//   );
// }

