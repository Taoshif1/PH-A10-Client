import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import CarCard from '../components/CarCard';
import LoadingSpinner from '../components/LoadingSpinner';

const BrowseCars = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // TODO: Replace this with your actual Vercel Server URL from .env
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'YOUR_VERCEL_SERVER_LINK_HERE'; 

    useEffect(() => {
        // Fetch the full list of cars from the server
        const fetchCars = async () => {
            try {
                // Assuming your server endpoint for all cars is /api/v1/cars
                const response = await axios.get(`${API_BASE_URL}/api/v1/cars`);
                
                // Assuming your server returns the data in the format: { success: true, cars: [...] }
                // Use a functional update to safely set the cars
                setCars(response.data.cars || []);
                setLoading(false);
                
            } catch (err) {
                console.error("Failed to fetch car data:", err);
                setError("Failed to load car data. Please check the server connection.");
                toast.error("Error loading cars. Please check the network.");
                setLoading(false);
            }
        };

        fetchCars();
    }, [API_BASE_URL]);

    // Show loading state
    if (loading) {
        return <LoadingSpinner />;
    }

    // Show error state
    if (error) {
        return (
            <div className="container mx-auto p-8 min-h-[60vh] flex justify-center items-center">
                <div role="alert" className="alert alert-error max-w-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{error}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-800">
                    Explore Our Fleet
                </h1>
                <p className="text-xl text-gray-500 mt-2">
                    {cars.length} vehicles available for rent in Bangladesh.
                </p>
            </header>

            {cars.length === 0 ? (
                <div className="text-center p-12 bg-gray-100 rounded-xl max-w-xl mx-auto">
                    <p className="text-2xl font-semibold text-gray-600">
                        No Cars Found! 😟
                    </p>
                    <p className="text-gray-500 mt-2">
                        Try adding a car to your server data.
                    </p>
                </div>
            ) : (
                // Car Grid
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cars.map(car => (
                        <CarCard key={car._id} car={car} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default BrowseCars;