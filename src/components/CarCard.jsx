import { FaMapMarkerAlt, FaStar, FaDollarSign, FaBolt, FaBook } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CarCard = ({ car }) => {
  const { 
    _id,
    name, 
    description, 
    category, 
    price, 
    location, 
    image, 
    rating, 
    status 
  } = car;

  const isBooked = status === 'booked';
  
  return (
    // Daisy UI Card component
    <div className={`card card-compact bg-base-100 shadow-xl border-t-4 ${isBooked ? 'border-red-500' : 'border-blue-500'} hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1`}>
      
      {/* Image with Booking Badge */}
      <figure className="relative h-56 w-full">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        {isBooked && (
            <div className="badge badge-error text-white absolute top-4 right-4 text-sm p-3 font-semibold shadow-lg">
                <FaBook className="mr-1" /> BOOKED
            </div>
        )}
      </figure>

      {/* Card Body */}
      <div className="card-body p-5">
        
        {/* Title and Rating */}
        <div className="flex justify-between items-start mb-2">
            <h2 className="card-title text-2xl text-gray-800 line-clamp-1">{name}</h2>
            <div className="flex items-center gap-1 text-lg font-bold text-yellow-500">
                <FaStar />
                <span>{rating}</span>
            </div>
        </div>

        {/* Details and Description */}
        <p className="text-gray-500 text-sm line-clamp-2 mb-3">{description}</p>
        
        <div className="space-y-2 border-t pt-3">
            <div className="flex items-center gap-2 text-md text-gray-700 font-medium">
                <FaMapMarkerAlt className="text-blue-500" />
                <span>{location}</span>
            </div>
            
            <div className="flex items-center gap-2 text-md text-gray-700 font-medium">
                <span className="badge badge-lg bg-gray-200 text-gray-700 border-none font-semibold">
                    {category}
                </span>
                {category === 'Electric' && <FaBolt className="text-green-500 text-xl" title="Electric Vehicle"/>}
            </div>
        </div>
        
        {/* Price and Action */}
        <div className="card-actions justify-between items-center mt-4 pt-4 border-t border-dashed">
            <div className="flex items-end font-extrabold text-blue-600">
                <FaDollarSign className="text-2xl" />
                <span className="text-3xl">{price}</span>
                <span className="text-lg font-normal text-gray-500">/day</span>
            </div>
            
            <Link to={`/car/${_id}`} className="btn btn-primary btn-sm md:btn-md font-semibold">
                {isBooked ? 'View Details' : 'Rent Now'}
            </Link>
        </div>
      </div>
    </div>
  );
};

CarCard.propTypes = {
    car: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        location: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        status: PropTypes.string.isRequired,
    }).isRequired,
};

export default CarCard;

