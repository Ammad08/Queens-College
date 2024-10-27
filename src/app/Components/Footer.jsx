"use client"; // Required if using in Next.js
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const [isInView, setIsInView] = useState(false);

  // Observer for scroll-triggered animation
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      const rect = footer.getBoundingClientRect();
      setIsInView(rect.top < window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 }, // Start off-screen
    visible: { opacity: 1, y: 0 },  // Move to its final position
  };

  return (
    <footer id="footer" className="bg-stone-800 text-white py-16 px-8">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
        className="container mx-auto text-center"
      >
        {/* College Logo */}
        <motion.h2
          variants={variants}
          className="text-4xl font-semibold mb-8"
        >
          Queens College
        </motion.h2>

        {/* Footer Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* About Us */}
          <motion.div
            variants={variants}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-xl font-medium mb-4">About Us</h3>
            <p className="text-sm text-gray-300 text-center">
              Queens College is dedicated to providing top-tier education and resources for a brighter future.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={variants}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-xl font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm text-center">
              <li><a href="#admissions" className="hover:text-white">Admissions</a></li>
              <li><a href="#programs" className="hover:text-white">Programs</a></li>
              <li><a href="#campus" className="hover:text-white">Campus Life</a></li>
              <li><a href="#alumni" className="hover:text-white">Alumni</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={variants}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-xl font-medium mb-4">Contact</h3>
            <p className="text-sm text-gray-300 text-center">
              Queens College, 123 University St.<br /> City, State, Zip
            </p>
            <p className="text-sm text-gray-300 mt-2 text-center">Email: contact@queenscollege.edu</p>
            <p className="text-sm text-gray-300 text-center">Phone: (123) 456-7890</p>
          </motion.div>
        </div>

        {/* Additional Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {/* Mission Statement */}
          <motion.div
            variants={variants}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-xl font-medium mb-4">Our Mission</h3>
            <p className="text-sm text-gray-300 text-center">
              To empower students through a comprehensive educational experience, fostering innovation and leadership.
            </p>
          </motion.div>

          {/* Events */}
          <motion.div
            variants={variants}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-xl font-medium mb-4">Upcoming Events</h3>
            <ul className="space-y-2 text-gray-300 text-sm text-center">
              <li><a href="#event1" className="hover:text-white">Open House - Jan 15</a></li>
              <li><a href="#event2" className="hover:text-white">Career Fair - Feb 20</a></li>
              <li><a href="#event3" className="hover:text-white">Graduation Ceremony - May 10</a></li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            variants={variants}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-xl font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300 text-sm text-center">
              <li><a href="#library" className="hover:text-white">Library</a></li>
              <li><a href="#student-services" className="hover:text-white">Student Services</a></li>
              <li><a href="#counseling" className="hover:text-white">Counseling Services</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Social Icons */}
        <motion.div
          variants={variants}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex justify-center space-x-6 text-gray-300 mt-8"
        >
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-lg">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-lg">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-lg">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-lg">
            <FaLinkedinIn />
          </a>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-gray-500 mt-8 text-sm"
        >
          © {new Date().getFullYear()} Queens College. All rights reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
