import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-3xl font-bold text-center text-primary mb-6">Contact Us</h1>
      <p className="text-center text-gray-700 mb-8">
        Have questions or want to know more about GARIWALA? Reach out to us!
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Gariwala App Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">About <span>GARIWALA</span>
          </h2>
          <p className="text-gray-600">
            GARIWALA is a premium car rental platform, making it easy to rent your favorite cars with seamless booking experience.  
          </p>
          <div className="flex items-center gap-3">
            <FaGlobe className="text-blue-600" />
            <span>Website: <a href="https://gariwala.com" className="text-blue-600 underline">https://gariwala.com</a></span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-blue-600" />
            <span>Hotline: +880 1234 567890</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-600" />
            <span>Email: support@gariwala.com</span>
          </div>
        </div>

        {/* Founder Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Founder</h2>
          <p className="text-gray-600">
            Gazi Taoshiflex <br />
            Founder of Taoshiflex <br />
            Full Stack Web Developer
          </p>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-600" />
            <span>Email: gazi@taoshiflex.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-blue-600" />
            <span>Phone: +880 1712 345678</span>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500">
        &copy; {new Date().getFullYear()} GARIWALA. All rights reserved.
      </div>
    </div>
  );
};

export default ContactUs;
