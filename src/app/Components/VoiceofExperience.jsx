import Image from "next/image";

const VoicesOfExperience = () => {
  const voices = [
    {
      name: "John Doe",
      testimonial:
        "I completed the Computer Networking & Security diploma at Queen's College. The supportive staff, especially Professor Gaurav, and unique teaching methods made it a great experience.",
      image: "/testimonials1.jpg",
    },
    {
      name: "Sarah",
      testimonial:
        "I studied Computer Networking and Security at Queen's College. This course enriched my knowledge and provided a profound skill set used to strive in the job market. Thank you, Queen's College staff and instructors.",
      image: "/testimonials2.jpg",
    },
    {
      name: "Mike Johnson",
      testimonial:
        "I joined the Business Analyst Program here at Queen's College. The staff is awesome; professors and instructors are knowledgeable and friendly. This diploma helped me learn the skills required to excel in my career.",
      image: "/testimonial3.jpg",
    },
  ];

  return (
    <main id="program" className="flex flex-col lg:flex-row items-center bg-gradient-to-r from-blue-50 via-white to-blue-50 p-4 md:p-8 py-14">
      <div className="w-full p-0  md:p-8 space-y-6">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-transparent pb-10  bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400 transition-transform transform hover:scale-105 text-center mb-6">
          Voices of Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {voices.map((voice, index) => (
            <div
              key={index}
              className="border border-blue-500 bg-white rounded-lg p-4 transition-transform transform hover:scale-105 shadow-md max-w-xs mx-auto hover:bg-blue-100"
            >
              <img
                src={voice.image}
                alt={voice.name}
                className="w-24 h-24 rounded-full mb-4 mx-auto object-cover border-4 border-blue-300"
              />
              <h3 className="text-xl font-semibold mb-2 text-center text-blue-600">
                {voice.name}
              </h3>
              <p className="text-gray-700 text-sm md:textbase mb-4 text-center">
                {voice.testimonial}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default VoicesOfExperience;