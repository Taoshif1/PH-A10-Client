import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* Animated 404 */}
        <div className="mb-8 animate-bounce-slow">
          <h1 className="text-[150px] md:text-[200px] font-bold text-gradient-secondary leading-none">
            404
          </h1>
        </div>

        {/* Warning Icon */}
        <div className="mb-6">
          <FaExclamationTriangle className="text-6xl text-orange-500 mx-auto animate-pulse" />
        </div>

        {/* Error Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <button className="btn btn-primary flex items-center gap-2 px-8">
              <FaHome />
              Back to Home
            </button>
          </Link>
          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline border-2 border-gray-300 hover:border-blue-500 px-8"
          >
            Go Back
          </button>
        </div>

        {/* Fun Animation */}
        <div className="mt-12 text-6xl animate-bounce-slow">🚗💨</div>
      </div>
    </div>
  );
};

export default ErrorPage;
