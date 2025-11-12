const MyListings = () => {
  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h2 className="text-3xl font-bold text-center my-8 text-blue-600">
        📝 My Car Listings (Protected)
      </h2>
      <div className="text-center text-gray-600 p-10 bg-blue-50 rounded-xl">
        <p>This page will show cars the logged-in user has added.</p>
      </div>
    </div>
  );
};

export default MyListings;