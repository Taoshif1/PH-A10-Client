import { useContext, useState } from "react";
import { API_BASE_URL } from "../api";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const AddCar = () => {
  const { user } = useContext(AuthContext);

  const [car, setCar] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    location: "",
    image: "",
  });

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleAddCar = async (e) => {
    e.preventDefault();
    try {
      const carData = {
        ...car,
        providerName: user?.displayName,
        providerEmail: user?.email,
      };

      const res = await fetch(`${API_BASE_URL}/cars`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(carData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("🚗 Car added successfully!");
        setCar({ name: "", description: "", category: "", price: "", location: "", image: "" });
      } else {
        toast.error("Failed to add car!");
      }
    } catch (err) {
      toast.error("Something went wrong!");
      console.error(err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Add a New Car</h2>
      <form onSubmit={handleAddCar} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Car Name"
          value={car.name}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="category"
          placeholder="Category (SUV, Sedan, etc)"
          value={car.category}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Price per day"
          value={car.price}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={car.location}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="url"
          name="image"
          placeholder="Image URL"
          value={car.image}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={car.description}
          onChange={handleChange}
          required
          className="border p-2 rounded md:col-span-2"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded md:col-span-2"
        >
          Add Car
        </button>
      </form>
    </div>
  );
};

export default AddCar;
