import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaCarSide } from "react-icons/fa";

const BookCar = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await fetch(`https://gariwala-server.vercel.app/cars/${id}`);
        const data = await res.json();
        setCar(data.car);
      } catch (err) {
        console.error("Error fetching car:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCar();
  }, [id]);

  const handleConfirmBooking = async () => {
    if (!user) {
      alert("Please log in first.");
      return navigate("/login");
    }

    try {
      const res = await fetch("https://gariwala-server.vercel.app/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          carId: car._id,
          userEmail: user.email,
          userName: user.displayName,
        }),
      });

      const data = await res.json();
      if (data.success) {
        alert("✅ Booking confirmed!");
        navigate("/my-bookings");
      } else {
        alert(`❌ ${data.message}`);
      }
    } catch (err) {
      console.error("Booking error:", err);
      alert("Something went wrong while booking.");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading car details...</p>;
  if (!car) return <p className="text-center mt-10 text-red-500">Car not found!</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
      <h1 className="text-3xl font-bold mb-4 flex items-center gap-2 text-primary">
        <FaCarSide /> Confirm Booking
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={car.image || car.images?.[0] || "https://via.placeholder.com/400x250"}
          alt={car.name}
          className="w-full md:w-1/2 h-56 object-cover rounded-xl"
        />

        <div className="flex-1">
          <h2 className="text-2xl font-semibold">{car.name}</h2>
          <p className="text-gray-600 mt-1 mb-3">{car.description}</p>
          <p className="text-lg font-semibold mb-2">Price: ${car.price}/day</p>
          <p className="text-sm text-gray-500 mb-4">
            Category: {car.category || "General"}
          </p>

          <button
            onClick={handleConfirmBooking}
            className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCar;
