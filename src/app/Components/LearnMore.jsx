// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const LearnMore = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const items = [
//     {
//       title: "Image 1",
//       description: "Description for Image 1",
//       imgSrc: "/background.jpg", // Replace with actual image source
//     },
//     {
//       title: "Image 2",
//       description: "Description for Image 2",
//       imgSrc: "/background.jpg", // Replace with actual image source
//     },
//     {
//       title: "Image 3",
//       description: "Description for Image 3",
//       imgSrc: "/background.jpg", // Replace with actual image source
//     },
//   ];

//   return (
//     <div className="w-full min-h-screen mx-auto py-24 px-4 bg-slate-100">
//       <h2 className="text-6xl text-blue-500 font-bold text-center mb-16">Learn More</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
//         {items.map((item, index) => (
//           <motion.div
//             key={index}
//             className="relative w-80 h-56 perspective" // Add perspective class for 3D effect
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             <motion.div
//               className="w-full h-full duration-300 transform-style"
//               initial={{ rotateX: 0 }} // Use rotateY for horizontal flip
//               animate={{ rotateX: hoveredIndex === index ? 180 : 0 }} // Horizontal flip
//               transition={{ duration: 0.6 }}
//             >
//               {/* Front Side */}
//               <motion.div className="w-full h-full rounded-lg overflow-hidden relative">
//                 <img
//                   src={item.imgSrc}
//                   alt={item.title}
//                   className="w-full h-full object-cover rounded-lg"
//                 />

// <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-white bg-opacity-50">
//                   <motion.h3 className="text-lg font-medium mb-2">
//                     {item.description} {/* Description on back side */}
//                   </motion.h3>
//                   <motion.button className="bg-blue-600 text-white px-4 py-2 rounded">
//                     Learn More {/* Button on back side */}
//                   </motion.button>
//                 </div>

                
//               </motion.div>

//               {/* Back Side */}
//               <motion.div className="absolute inset-0 bg-gray-800 flex flex-col items-center justify-center text-white rounded-lg backface-hidden">
//                 <img
//                   src={item.imgSrc} // Same image on the back side, without reversal
//                   alt={item.title}
//                   className="w-full h-full object-cover rounded-lg opacity-30" // Background image with lower opacity
//                 />
//                 <h3 className="absolute bottom-0 h-full flex items-center justify-center left-0 right-0 text-center text-lg font-semibold bg-white bg-opacity-10 p-2">
//                   {item.title} {/* Unique title on front side */}
//                 </h3>
               
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LearnMore;



"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const LearnMore = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const items = [
    {
      title: "About Queens",
      description: "Want to know more about Queen's College?",
      imgSrc: "/background.jpg", // Replace with actual image source
    },
    {
      title: "Admissions",
      description: " know more about enrollment and admissions?",
      imgSrc: "/img1.jpg", // Replace with actual image source
    },
    {
      title: "Student Support",
      description: "Want to know what services we provide to our students?",
      imgSrc: "/img3.jpg", // Replace with actual image source
    },
  ];

  return (
    <div id="about" className="w-full min-h-screen mx-auto py-24 px-4 bg-slate-100">
      <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-transparent pb-10  bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400 transition-transform transform hover:scale-105 text-center mb-6">Learn More</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="relative w-80 h-56 perspective"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div
              className="relative w-full h-full duration-300 transform-style preserve-3d"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: hoveredIndex === index ? 180 : 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Front Side */}
              <motion.div className="absolute w-full h-full   rounded-lg overflow-hidden">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg "
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-white bg-opacity-20">
                  <motion.h3 className="text-2xl text-white font-medium mb-2">
                    {item.title} {/* Title on front side */}
                  </motion.h3>
                </div>
              </motion.div>

              {/* Back Side */}
              <motion.div className="absolute w-full h-full bg-gray-800 flex flex-col items-center justify-center text-white rounded-lg backface-hidden"
                style={{ transform: 'rotateY(180deg)' }}
              >
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg opacity-20"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <h3 className="text-lg font-medium mb-2">{item.description}</h3>
                  <motion.button className="bg-blue-600 text-white px-4 py-2 rounded">
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LearnMore;





