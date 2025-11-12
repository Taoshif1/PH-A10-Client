import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const res = await fetch(
          `https://gariwala-server.vercel.app/cars/${id}`
        );
        if (!res.ok) throw new Error("Car not found");
        const data = await res.json();
        setCar(data.car); // ✅ access the "car" property inside the response
      } catch (error) {
        console.error("Error fetching car:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCar();
  }, [id]);

  if (loading) return <LoadingSpinner />;

  if (!car)
    return (
      <div className="text-center text-gray-500 py-20">
        <h2 className="text-2xl font-semibold">Car not found!</h2>
      </div>
    );

  const handleBookNow = () => {
    navigate(`/book/${car._id}`, { state: { car } });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-96 object-cover rounded-2xl shadow-lg"
        />

        <div>
          <h1 className="text-4xl font-bold mb-4">{car.name}</h1>
          <p className="text-gray-600 mb-2">Category: {car.category}</p>
          <p className="text-gray-600 mb-2">Location: {car.location}</p>
          <p className="text-gray-600 mb-2">Provider: {car.providerName}</p>
          <p className="text-gray-600 mb-2">
            Provider Email: {car.providerEmail}
          </p>
          <p className="text-gray-600 mb-6">
            Status:{" "}
            <span
              className={`font-semibold ${
                car.status === "available" ? "text-green-600" : "text-red-600"
              }`}
            >
              {car.status}
            </span>
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {car.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-primary">
              {car.price}$/day
            </span>
            <button
              onClick={handleBookNow}
              disabled={car.status !== "available"}
              className={`btn ${
                car.status === "available"
                  ? "btn-primary"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
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
