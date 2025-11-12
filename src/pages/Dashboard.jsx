import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaCarSide, FaClipboardList, FaMoneyBillWave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import Swal from "sweetalert2";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({
    totalCars: 0,
    totalBookings: 0,
    revenue: 0,
    available: 0,
    booked: 0,
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [carsRes, bookingsRes] = await Promise.all([
          fetch(`https://gariwala-server.vercel.app/cars/user/${user?.email}`),
          fetch(`https://gariwala-server.vercel.app/bookings/user/${user?.email}`),
        ]);

        const carsData = await carsRes.json();
        const bookingsData = await bookingsRes.json();

        const cars = carsData.cars || [];
        const bookings = bookingsData.bookings || [];

        const bookedCars = cars.filter((c) => c.status === "booked").length;
        const availableCars = cars.filter((c) => c.status === "available").length;
        const totalRevenue = bookings.reduce(
          (sum, b) => sum + (b.rentPrice ? parseFloat(b.rentPrice) : 0),
          0
        );

        setStats({
          totalCars: cars.length,
          totalBookings: bookings.length,
          revenue: totalRevenue,
          available: availableCars,
          booked: bookedCars,
        });
      } catch (err) {
        console.error("Error fetching dashboard stats:", err);
        Swal.fire("Error", "Failed to load dashboard data", "error");
      } finally {
        setLoading(false);
      }
    };

    if (user?.email) fetchStats();
  }, [user?.email]);

  const COLORS = ["#2563eb", "#22c55e"]; // Blue for available, Green for booked

  if (loading)
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <LoadingSpinner />
      </div>
    );

  const chartData = [
    { name: "Available Cars", value: stats.available },
    { name: "Booked Cars", value: stats.booked },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">
        🚀 Dashboard Overview
      </h1>

      {/* KPI Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-blue-50 shadow-md p-6 rounded-2xl flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Total Cars</h2>
            <p className="text-3xl font-bold text-blue-600">{stats.totalCars}</p>
          </div>
          <FaCarSide className="text-blue-500 text-5xl" />
        </div>

        <div className="bg-green-50 shadow-md p-6 rounded-2xl flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Total Bookings</h2>
            <p className="text-3xl font-bold text-green-600">{stats.totalBookings}</p>
          </div>
          <FaClipboardList className="text-green-500 text-5xl" />
        </div>

        <div className="bg-yellow-50 shadow-md p-6 rounded-2xl flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-600">Total Revenue</h2>
            <p className="text-3xl font-bold text-yellow-600">
              {stats.revenue.toLocaleString()}$
            </p>
          </div>
          <FaMoneyBillWave className="text-yellow-500 text-5xl" />
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white shadow-lg rounded-2xl p-8 mb-10">
        <h3 className="text-2xl font-bold text-center mb-6 text-blue-600">
          📊 Car Availability Overview
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap justify-center gap-6">
        <button
          onClick={() => navigate("/my-listings")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          🚗 Manage My Listings
        </button>

        <button
          onClick={() => navigate("/my-bookings")}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          📅 View My Bookings
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
