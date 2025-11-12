import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaCarAlt, FaTrashAlt } from "react-icons/fa";
import LoadingSpinner from "../components/LoadingSpinner";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useLocation } from "react-router";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const car = location.state?.car; // auto-filled car data

  console.log("Car to book:", car);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch(
          `https://gariwala-server.vercel.app/bookings/user/${user?.email}`
        );
        const data = await res.json();
        setBookings(data.bookings || []);
      } catch (err) {
        console.error("Failed to fetch bookings:", err);
        toast.error("Failed to load your bookings 😔");
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) fetchBookings();
  }, [user?.email]);

  const handleCancel = async (id) => {
    const confirmResult = await Swal.fire({
      title: "Cancel Booking?",
      text: "Are you sure you want to cancel this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, cancel it!",
    });

    if (!confirmResult.isConfirmed) return;

    try {
      const res = await fetch(
        `https://gariwala-server.vercel.app/bookings/${id}`,
        { method: "DELETE" }
      );
      const data = await res.json();
      if (data.success) {
        Swal.fire("Cancelled!", "Your booking has been cancelled.", "success");
        setBookings((prev) => prev.filter((b) => b._id !== id));
      } else {
        toast.error("Something went wrong ❌");
      }
    } catch (err) {
      console.error("Cancel failed:", err);
      toast.error("Cancel failed! Please try again.");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <LoadingSpinner />
      </div>
    );

  if (bookings.length === 0)
    return (
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold text-blue-600 mb-2">
          🚗 My Bookings
        </h2>
        <p className="text-gray-600 mb-6">
          You haven’t booked any cars yet. Browse and book one to get started!
        </p>
        <a
          href="/browse-cars"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Browse Cars
        </a>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 flex items-center gap-2">
        <FaCarAlt /> My Bookings ({bookings.length})
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {bookings.map((booking) => (
          <div
            key={booking._id}
            className="bg-white shadow-xl rounded-2xl overflow-hidden border hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={booking.carImage || "https://via.placeholder.com/400x250"}
              alt={booking.carName}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-1">
                {booking.carName}
              </h3>
              <p className="text-gray-600 mb-2">{booking.rentPrice}$/day</p>
              <p
                className={`text-sm font-semibold mb-4 ${
                  booking.status === "booked"
                    ? "text-green-600"
                    : "text-gray-500"
                }`}
              >
                Status: {booking.status}
              </p>

              <button
                onClick={() => handleCancel(booking._id)}
                className="flex items-center justify-center gap-2 bg-red-600 text-white w-full py-2 rounded-lg hover:bg-red-700 transition"
              >
                <FaTrashAlt /> Cancel Booking
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
