import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Welcome to GARIWALA
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Premium Car Rentals at Your Fingertips
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn btn-primary">Browse Cars</button>
            <button className="btn btn-secondary">Add Your Car</button>
          </div>
        </div>

        {/* Sample Cars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card bg-white shadow-xl hover:shadow-2xl transition-shadow">
              <figure className="h-48 bg-gradient-to-br from-blue-100 to-purple-100">
                <div className="flex items-center justify-center h-full">
                  <span className="text-6xl">🚗</span>
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Sample Car {i}</h2>
                <p className="text-gray-600">Luxury sedan with premium features</p>
                <div className="card-actions justify-end mt-4">
                  <span className="text-2xl font-bold text-blue-600">$120/day</span>
                  <button className="btn btn-primary btn-sm">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;