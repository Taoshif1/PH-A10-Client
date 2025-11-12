import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCarSide } from "react-icons/fa";

const BrowseCars = () => {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  // Fetch available cars
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch("https://gariwala-server.vercel.app/cars"); // ✅ your live API
        const data = await res.json();

        // Some cars may have "image" not "images"
        const availableCars =
          data.cars?.filter((car) => car.status === "available") || [];

        // Normalize image property
        const formattedCars = availableCars.map((car) => ({
          ...car,
          images: car.images?.length
            ? car.images
            : [car.image], // fallback if only "image" exists
        }));

        console.log("Available Cars ->", formattedCars);
        setCars(formattedCars);
      } catch (err) {
        console.error("Failed to fetch cars:", err);
      }
    };
    fetchCars();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-2 flex items-center justify-center gap-2">
        <FaCarSide /> Browse Cars
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Showing <span className="font-semibold">{cars.length}</span> available car
        {cars.length !== 1 ? "s" : ""}
      </p>

      {cars.length === 0 ? (
        <p className="text-center text-gray-500">No available cars found 😢</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-[1.03] transition duration-300"
            >
              {/* Car Image */}
              <div className="relative">
                <img
                  src={car.images?.[0] || "https://via.placeholder.com/400x250"}
                  alt={car.name}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                  {car.category || "General"}
                </span>
              </div>

              {/* Car Info */}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-1">{car.name}</h2>
                <p className="text-gray-600 text-sm mb-2">
                  {car.description?.slice(0, 60)}...
                </p>
                <p className="font-medium text-lg mt-1">
                  ৳{car.price}/day
                </p>

                {/* Book Now Button */}
                <button
                  onClick={() => navigate(`/my-bookings?id=${car._id}`)}
                  className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseCars;
