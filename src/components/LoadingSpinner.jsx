import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gray-50/50 backdrop-blur-sm fixed inset-0 z-[9999]">
      {/* Daisy UI Large Spinner with GARIWALA colors */}
      <div className="flex flex-col items-center gap-4">
        <span className="loading loading-ring loading-lg text-primary"></span>
        <p className="text-xl font-bold text-gray-700 animate-pulse">
            Loading Wheels...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;