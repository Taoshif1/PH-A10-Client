import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const CarDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await fetch(`https://gariwala-server.vercel.app/cars/${id}`);
        if (!res.ok) throw new Error("Car not found");
        const data = await res.json();
        setCar(data.car);
      } catch (error) {
        console.error("Error fetching car:", error);
        Swal.fire({
          icon: "error",
          title: "Car Not Found",
          text: "The car you are looking for does not exist.",
          confirmButtonColor: "#3b82f6",
          confirmButtonText: "Go Back",
        }).then(() => navigate(-1));
      } finally {
        setLoading(false);
      }
    };
    fetchCar();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (!car) return null; // Already handled by SweetAlert

  const handleBookNow = async () => {
    if (!user) {
      return Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please log in before booking a car.",
        confirmButtonColor: "#3b82f6",
        confirmButtonText: "Go to Login",
      }).then(() => navigate("/login"));
    }

    // Confirm booking
    Swal.fire({
      title: `Book ${car.name}?`,
      text: `Price: $${car.price}/day`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3b82f6",
      cancelButtonColor: "#f87171",
      confirmButtonText: "Yes, Book Now",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
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
            Swal.fire({
              icon: "success",
              title: "Booking Confirmed 🎉",
              text: `You have successfully booked ${car.name}!`,
              confirmButtonColor: "#3b82f6",
              confirmButtonText: "View My Bookings",
            }).then(() => navigate("/my-bookings"));
          } else {
            Swal.fire({
              icon: "error",
              title: "Booking Failed ❌",
              text: data.message || "Something went wrong while booking.",
              confirmButtonColor: "#3b82f6",
              confirmButtonText: "Try Again",
            });
          }
        } catch (err) {
          console.error("Booking error:", err);
          Swal.fire({
            icon: "error",
            title: "Booking Error",
            text: "Something went wrong while booking.",
            confirmButtonColor: "#3b82f6",
          });
        }
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src={car.image || car.images?.[0]}
          alt={car.name}
          className="w-full h-96 object-cover rounded-2xl shadow-lg"
        />
        <div>
          <h1 className="text-4xl font-bold mb-4">{car.name}</h1>
          <p className="text-gray-600 mb-2">Category: {car.category}</p>
          <p className="text-gray-600 mb-2">Location: {car.location}</p>
          <p className="text-gray-600 mb-2">Provider: {car.providerName}</p>
          <p className="text-gray-600 mb-2">Provider Email: {car.providerEmail}</p>
          <p className="text-gray-600 mb-6">
            Status:{" "}
            <span className={`font-semibold ${car.status === "available" ? "text-green-600" : "text-red-600"}`}>
              {car.status}
            </span>
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">{car.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-primary">{car.price}$/day</span>
            <button
              onClick={handleBookNow}
              disabled={car.status !== "available"}
              className={`btn ${car.status === "available" ? "btn-primary" : "bg-gray-400 cursor-not-allowed"}`}
            >
              {car.status === "available" ? "Book Now" : "Not Available"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
