import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaCarSide } from "react-icons/fa";
import Swal from "sweetalert2";

const BrowseCars = () => {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();
  const alertShown = useRef(false); // ensures no duplicate alert

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch("https://gariwala-server.vercel.app/cars");
        const data = await res.json();

        const availableCars =
          data.cars?.filter((car) => car.status === "available") || [];

        const formattedCars = availableCars.map((car) => ({
          ...car,
          images: car.images?.length ? car.images : [car.image],
        }));

        if (formattedCars.length === 0 && !alertShown.current) {
          alertShown.current = true;
          Swal.fire({
            icon: "info",
            title: "No Cars Available",
            text: "Currently, there are no available cars. Please check back later! 😢",
            confirmButtonColor: "#3b82f6",
            confirmButtonText: "Okay",
          });
        }

        setCars(formattedCars);
      } catch (err) {
        console.error("Failed to fetch cars:", err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to load cars. Please check your connection and try again!",
          confirmButtonColor: "#3b82f6",
          confirmButtonText: "Retry",
        }).then((result) => {
          if (result.isConfirmed) window.location.reload();
        });
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-2 flex items-center justify-center gap-2 text-primary">
        <FaCarSide /> <span> Browse Cars </span>
      </h1>
      <p className="text-center font-bold text-gray-600 mb-8">
        Showing <span className="font-semibold text-primary">{cars.length}</span> available car
        {cars.length !== 1 ? "s" : ""}
      </p>

      {cars.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-[1.03] transition duration-300"
            >
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

              <div className="p-4">
                <h2 className="text-xl font-semibold mb-1">{car.name}</h2>
                <p className="text-gray-600 text-sm mb-2">
                  {car.description?.slice(0, 60)}...
                </p>
                <p className="font-medium text-lg mt-1">{car.price}$/day</p>

                <button
                  onClick={() => {
                    Swal.fire({
                      title: "Proceed to Car Details?",
                      text: `You are about to view details for ${car.name}.`,
                      icon: "info",
                      showCancelButton: true,
                      confirmButtonColor: "#3b82f6",
                      cancelButtonColor: "#f87171",
                      confirmButtonText: "Yes, take me there!",
                      cancelButtonText: "Cancel",
                    }).then((result) => {
                      if (result.isConfirmed) {
                        navigate(`/car/${car._id}`);
                      }
                    });
                  }}
                  className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  View Details
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
