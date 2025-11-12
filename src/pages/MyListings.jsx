import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaCarSide, FaEdit, FaTrashAlt, FaPlus } from "react-icons/fa";
import LoadingSpinner from "../components/LoadingSpinner";
import Swal from "sweetalert2";

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Fetch all listings by current user
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch(
          `https://gariwala-server.vercel.app/cars/user/${user?.email}`
        );
        const data = await res.json();
        setCars(data.cars || []);
      } catch (err) {
        console.error("Failed to fetch listings:", err);
        Swal.fire("Error", "Could not load your listings", "error");
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) fetchCars();
  }, [user?.email]);

  // 🔹 Delete Listing
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Delete this car?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    });

    if (!confirm.isConfirmed) return;

    try {
      const res = await fetch(
        `https://gariwala-server.vercel.app/cars/${id}`,
        { method: "DELETE" }
      );
      const data = await res.json();

      if (data.success) {
        setCars((prev) => prev.filter((c) => c._id !== id));

        Swal.fire({
          toast: true,
          icon: "success",
          title: "Listing deleted",
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        Swal.fire("Error", "Failed to delete car", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong", "error");
    }
  };

  // 🔹 Edit Listing
  const handleEdit = async (car) => {
    const { value: formValues } = await Swal.fire({
      title: "Edit Car Info",
      html: `
        <input id="carName" class="swal2-input" placeholder="Car Name" value="${car.name}" />
        <input id="rentPrice" class="swal2-input" placeholder="Rent Price (৳)" value="${car.rentPrice}" type="number" />
        <input id="image" class="swal2-input" placeholder="Image URL" value="${car.image}" />
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Save Changes",
      preConfirm: () => {
        return {
          name: document.getElementById("carName").value,
          rentPrice: document.getElementById("rentPrice").value,
          image: document.getElementById("image").value,
        };
      },
    });

    if (!formValues) return;

    try {
      const res = await fetch(
        `https://gariwala-server.vercel.app/cars/${car._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formValues),
        }
      );

      const data = await res.json();

      if (data.success) {
        setCars((prev) =>
          prev.map((c) =>
            c._id === car._id ? { ...c, ...formValues } : c
          )
        );

        Swal.fire({
          toast: true,
          icon: "success",
          title: "Car updated successfully",
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        Swal.fire("Error", "Failed to update car", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong", "error");
    }
  };

  // 🔹 Create new listing
  const handleAddCar = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Add New Car",
      html: `
        <input id="carName" class="swal2-input" placeholder="Car Name" />
        <input id="rentPrice" class="swal2-input" placeholder="Rent Price (৳)" type="number" />
        <input id="image" class="swal2-input" placeholder="Image URL" />
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Add Car",
      preConfirm: () => {
        return {
          name: document.getElementById("carName").value,
          rentPrice: document.getElementById("rentPrice").value,
          image: document.getElementById("image").value,
          ownerEmail: user?.email,
        };
      },
    });

    if (!formValues) return;

    try {
      const res = await fetch("https://gariwala-server.vercel.app/cars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      const data = await res.json();

      if (data.success) {
        setCars((prev) => [...prev, data.car]);

        Swal.fire({
          toast: true,
          icon: "success",
          title: "Car added successfully",
          position: "top-end",
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        Swal.fire("Error", "Failed to add car", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong", "error");
    }
  };

  // 🔹 Loading UI
  if (loading)
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <LoadingSpinner />
      </div>
    );

  // 🔹 No listings UI
  if (cars.length === 0)
    return (
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold text-blue-600 mb-2">
          🚘 My Listings
        </h2>
        <p className="text-gray-600 mb-6">
          You haven’t listed any cars yet. Add one now!
        </p>
        <button
          onClick={handleAddCar}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <FaPlus className="inline mr-2" /> Add Car
        </button>
      </div>
    );

  // 🔹 Main UI
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-blue-600 flex items-center gap-2">
          <FaCarSide /> My Listings ({cars.length})
        </h2>

        <button
          onClick={handleAddCar}
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <FaPlus /> Add New
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div
            key={car._id}
            className="bg-white shadow-xl rounded-2xl overflow-hidden border hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={car.image || "https://via.placeholder.com/400x250"}
              alt={car.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-1">{car.name}</h3>
              <p className="text-gray-600 mb-2">{car.price}$/day</p>
              <p className="text-sm text-gray-500 mb-4">
                Status:{" "}
                <span
                  className={`font-semibold ${
                    car.status === "booked" ? "text-green-600" : "text-blue-500"
                  }`}
                >
                  {car.status || "available"}
                </span>
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => handleEdit(car)}
                  className="flex-1 flex items-center justify-center gap-2 bg-yellow-400 text-white py-2 rounded-lg hover:bg-yellow-500 transition"
                >
                  <FaEdit /> Edit
                </button>
                <button
                  onClick={() => handleDelete(car._id)}
                  className="flex-1 flex items-center justify-center gap-2 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                >
                  <FaTrashAlt /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyListings;
