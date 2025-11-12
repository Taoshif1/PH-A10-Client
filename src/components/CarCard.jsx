import { FaMapMarkerAlt, FaStar, FaDollarSign, FaBolt, FaBook } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

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
    <>
      {/* Animated Card with Framer Motion */}
      <motion.div 
        className={`card card-compact bg-base-100 shadow-xl border-t-4 ${isBooked ? 'border-red-500' : 'border-blue-500'} hover:shadow-2xl transition-shadow duration-300`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ 
          y: -8, 
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
        data-tooltip-id={`car-tooltip-${_id}`}
        data-tooltip-place="top"
      >
        {/* Image with Booking Badge */}
        <figure className="relative h-56 w-full overflow-hidden">
          <motion.img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
          {isBooked && (
            <motion.div 
              className="badge badge-error text-white absolute top-4 right-4 text-sm p-3 font-semibold shadow-lg"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaBook className="mr-1" /> BOOKED
            </motion.div>
          )}
        </figure>

        {/* Card Body */}
        <div className="card-body p-5">
          
          {/* Title and Rating */}
          <div className="flex justify-between items-start mb-2">
            <motion.h2 
              className="card-title text-2xl text-gray-800 line-clamp-1"
              whileHover={{ scale: 1.05, x: 5 }}
              transition={{ duration: 0.2 }}
            >
              {name}
            </motion.h2>
            <motion.div 
              className="flex items-center gap-1 text-lg font-bold text-yellow-500"
              whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
              data-tooltip-id={`rating-tooltip-${_id}`}
            >
              <FaStar />
              <span>{rating}</span>
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-sm line-clamp-2 mb-3">{description}</p>
          
          {/* Details */}
          <div className="space-y-2 border-t pt-3">
            <motion.div 
              className="flex items-center gap-2 text-md text-gray-700 font-medium"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <FaMapMarkerAlt className="text-blue-500" />
              <span>{location}</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-2 text-md text-gray-700 font-medium"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="badge badge-lg bg-gray-200 text-gray-700 border-none font-semibold">
                {category}
              </span>
              {category === 'Electric' && (
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <FaBolt className="text-green-500 text-xl" title="Electric Vehicle"/>
                </motion.div>
              )}
            </motion.div>
          </div>
          
          {/* Price and Action */}
          <div className="card-actions justify-between items-center mt-4 pt-4 border-t border-dashed">
            <motion.div 
              className="flex items-end font-extrabold text-blue-600"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              data-tooltip-id={`price-tooltip-${_id}`}
            >
              <FaDollarSign className="text-2xl" />
              <span className="text-3xl">{price}</span>
              <span className="text-lg font-normal text-gray-500">/day</span>
            </motion.div>
            
            <Link to={`/car/${_id}`}>
              <motion.button 
                className={`btn btn-sm md:btn-md font-semibold ${isBooked ? 'btn-outline' : 'btn-primary'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={!isBooked ? {
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0.7)",
                    "0 0 0 10px rgba(59, 130, 246, 0)",
                  ]
                } : {}}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              >
                {isBooked ? 'View Details' : 'Rent Now'}
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* React Tooltip - Car Info */}
      <Tooltip 
        id={`car-tooltip-${_id}`}
        style={{ 
          backgroundColor: '#1e40af', 
          color: 'white',
          borderRadius: '12px',
          padding: '12px 16px',
          fontWeight: '600',
          fontSize: '14px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          zIndex: 9999
        }}
      >
        <div className="space-y-1">
          <p className="font-bold text-base">{name}</p>
          <p className="text-sm">💰 ${price}/day</p>
          <p className="text-sm">📍 {location}</p>
          <p className="text-sm">🚗 {category}</p>
          <p className="text-sm">⭐ Rating: {rating}</p>
          <p className="text-sm font-bold mt-2">
            {isBooked ? '❌ Currently Booked' : '✅ Available Now'}
          </p>
        </div>
      </Tooltip>

      {/* Rating Tooltip */}
      <Tooltip 
        id={`rating-tooltip-${_id}`}
        style={{ 
          backgroundColor: '#fbbf24', 
          color: '#1f2937',
          borderRadius: '8px',
          padding: '8px 12px',
          fontWeight: '700',
          fontSize: '13px'
        }}
      >
        ⭐ Customer Rating: {rating}/5.0
      </Tooltip>

      {/* Price Tooltip */}
      <Tooltip 
        id={`price-tooltip-${_id}`}
        style={{ 
          backgroundColor: '#10b981', 
          color: 'white',
          borderRadius: '8px',
          padding: '10px 14px',
          fontWeight: '600',
          fontSize: '14px'
        }}
      >
        <div>
          <p className="font-bold">Daily Rate: ${price}</p>
          <p className="text-xs mt-1">💡 Weekly: ${(price * 7 * 0.9).toFixed(0)} (10% off)</p>
          <p className="text-xs">💡 Monthly: ${(price * 30 * 0.8).toFixed(0)} (20% off)</p>
        </div>
      </Tooltip>
    </>
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