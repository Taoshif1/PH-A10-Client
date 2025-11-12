import React, { useEffect, useState } from "react";
import axios from "axios";

const BrowseCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("all");

  const baseURL = "https://gariwala-server-7ob70ngzp-taoshifs-projects.vercel.app"; 
  // or http://localhost:3000 if testing locally

  useEffect(() => {
    fetchCars();
  }, [search, sort, category]);

  const fetchCars = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${baseURL}/cars`, {
        params: { search, sort, category },
      });
      setCars(res.data.cars || []);
    } catch (err) {
      console.error("Error fetching cars:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">🚗 Browse Cars</h1>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <input
            type="text"
            placeholder="Search cars..."
            className="input input-bordered w-full md:w-1/3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="select select-bordered w-full md:w-1/4"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Luxury">Luxury</option>
          </select>

          <select
            className="select select-bordered w-full md:w-1/4"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="price-low">Price: Low → High</option>
            <option value="price-high">Price: High → Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Cars Grid */}
        {loading ? (
          <div className="text-center py-10 text-lg font-semibold">Loading cars...</div>
        ) : cars.length === 0 ? (
          <div className="text-center py-10 text-lg font-semibold text-error">
            No cars found 😢
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <div key={car._id} className="card bg-base-100 shadow-xl">
                <figure>
                  <img
                    src={car.image}
                    alt={car.name}
                    className="h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{car.name}</h2>
                  <p className="text-sm text-gray-600">{car.category}</p>
                  <p className="font-semibold text-primary">${car.price} / day</p>
                  <p className="text-yellow-500">⭐ {car.rating || 4.5}</p>
                  <div className="card-actions justify-end mt-2">
                    <button className="btn btn-primary btn-sm">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseCars;
