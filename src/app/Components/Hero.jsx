// const Hero = () => {
//   return (
//     <main
//       id="hero"
//       className="bg-[url('/background.jpg')] bg-cover bg-center h-screen  font-sans-serif"
//     >
//       <div className="flex flex-col justify-center items-center text-center h-full  bg-black bg-opacity-50">
//         {/* content section  */}
//         <div className="xl:w-2/3 md:w-5/6 w-full px-4 md:px-0  xl:px-20 ">
//           <h1 className=" text-3xl md:text-4xl lg:text-5xl xl:text-5xl   text-white  md:leading-[3.2rem] lg:leading-[4.5rem] xl:leading-[4.0rem]  font-bold mb-4">
//              Education for all is necessary for a better world
//           </h1>
//           <p className="text-white lg:px-14 text-sm md:text-base xl:px-2 mb-6  ">
//             Our cutting-edge curriculum is designed to empower students with the
//             knowledge, skills, and experiences needed to excel in the dynamic
//             field of education
//           </p>
//         </div>
//         {/* button section  */}
//         <div>
//           <button className="border bg-white text-black text-sm md:text-base flex px-6  py-3 rounded-3xl">
//             Explore more
//           </button>
//         </div>
//       </div>
      
//     </main>
//   );
// };

// export default Hero;

const Hero = () => {
    return (
      <main
        id="home"
        className="bg-[url('/BG2.jpg')] bg-cover bg-center h-screen font-sans-serif"
      >
        <div className="flex flex-col justify-center items-start text-left h-full bg-black bg-opacity-50 pl-10"> {/* Shift content to the left */}
          {/* Content Section */}
          <div className="xl:w-2/3 md:w-5/6 w-full px-4 md:px-0 xl:px-20">
            <h1 className="relative text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-white md:leading-[3.2rem] lg:leading-[4.5rem] xl:leading-[4.0rem] font-bold mb-4 overflow-hidden">
              <span className="animate-heading  text-transparent bg-clip-text">EDUCATION </span>FOR ALL.<span>
                </span>  <span></span>
                <span className="pl-24">TOGETHER WE</span>    <span className="animate-heading bg-blue-500 text-transparent bg-clip-text">THRIVE</span>
            </h1>
            <p className="text-white lg:px-14 text-sm md:text-base xl:px-2 mb-6">
              Our cutting-edge curriculum is designed to empower students with the
              knowledge, skills, and experiences needed to excel in the dynamic
              field of education.
            </p>
          {/* Button Section */}
          <div>
            {/* <button className="border bg-white text-black text-sm md:text-base flex px-6 py-3 rounded-3xl">
              Explore more
            </button> */}
            <button className="relative px-6 py-3 font-semibold text-black bg-white hover:bg-stone-400 rounded-full overflow-hidden shadow-lg">
  <span className="relative z-10">Explore more</span>
  <span className="absolute inset-0 rounded-lg border-2 border-transparent animate-glowing-border"></span>
</button>
          </div>

          </div>
        </div>
      </main>
    );
  };
  
  export default Hero;
  
  
