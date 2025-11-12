import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { FaStar, FaMapMarkerAlt, FaUser, FaCheckCircle, FaDollarSign, FaHeadset, FaShieldAlt } from 'react-icons/fa';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = () => {
  const [featuredCars, setFeaturedCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch featured cars from MongoDB
  useEffect(() => {
    fetchFeaturedCars();
  }, []);

  const fetchFeaturedCars = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch('https://gariwala-server.vercel.app/cars/featured');
      const data = await response.json();
      // console.log(data);
      setFeaturedCars(data.cars || []);
    } catch (error) {
      console.error('Error fetching cars:', error);
      // Fallback to mock data if API fails
      setFeaturedCars(mockCars);
    } finally {
      setLoading(false);
    }
  };

  // Mock data as fallback
  const mockCars = [
    {
      _id: '1',
      name: 'Tesla Model 3',
      model: 'Electric',
      price: 120,
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800',
      provider: 'Elite Motors',
      location: 'Dhaka',
      status: 'available',
      rating: 4.9
    },
    {
      _id: '2',
      name: 'BMW 5 Series',
      model: 'Luxury',
      price: 150,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
      provider: 'Luxury Drive',
      location: 'Chittagong',
      status: 'available',
      rating: 4.8
    },
    {
      _id: '3',
      name: 'Toyota Corolla',
      model: 'Sedan',
      price: 50,
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800',
      provider: 'City Rentals',
      location: 'Sylhet',
      status: 'available',
      rating: 4.6
    },
    {
      _id: '4',
      name: 'Honda CR-V',
      model: 'SUV',
      price: 80,
      image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800',
      provider: 'Adventure Rides',
      location: 'Dhaka',
      status: 'booked',
      rating: 4.7
    },
    {
      _id: '5',
      name: 'Mercedes-Benz E-Class',
      model: 'Luxury',
      price: 180,
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800',
      provider: 'Premium Rentals',
      location: 'Dhaka',
      status: 'available',
      rating: 4.9
    },
    {
      _id: '6',
      name: 'Hyundai i10',
      model: 'Hatchback',
      price: 40,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
      provider: 'Budget Cars',
      location: 'Rajshahi',
      status: 'available',
      rating: 4.3
    }
  ];

  const filteredCars = featuredCars.filter(car =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen">
      
      {/* Hero Carousel Section */}
      <section className="relative h-[600px] md:h-[700px]">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop={true}
          className="h-full"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920"
                className="w-full h-full object-cover"
                alt="Luxury Cars"
              />
              <div className="absolute inset-0 z-20 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                      Drive Your Dream Car Today
                    </h1>
                    <p className="text-2xl md:text-3xl text-gradient-secondary mb-3">
                      Premium Rentals at Your Fingertips
                    </p>
                    <p className="text-lg md:text-xl text-gray-300 mb-8">
                      Choose from luxury sedans, powerful SUVs, and eco-friendly electric vehicles
                    </p>
                    <Link to="/browse-cars">
                      <button className="btn btn-primary text-lg px-8">
                        Browse Cars →
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920"
                className="w-full h-full object-cover"
                alt="Car Interior"
              />
              <div className="absolute inset-0 z-20 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                      Flexible Booking Options
                    </h1>
                    <p className="text-2xl md:text-3xl text-gradient-secondary mb-3">
                      Rent by the Hour, Day, or Week
                    </p>
                    <p className="text-lg md:text-xl text-gray-300 mb-8">
                      Transparent pricing with no hidden charges - book with confidence
                    </p>
                    <Link to="/browse-cars">
                      <button className="btn btn-secondary text-lg px-8">
                        View Deals →
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=1920"
                className="w-full h-full object-cover"
                alt="Customer Service"
              />
              <div className="absolute inset-0 z-20 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                      24/7 Support & Assistance
                    </h1>
                    <p className="text-2xl md:text-3xl text-gradient-secondary mb-3">
                      We Are Always Here for You
                    </p>
                    <p className="text-lg md:text-xl text-gray-300 mb-8">
                      Round-the-clock customer service and roadside assistance
                    </p>
                    <Link to="/contact">
                      <button className="btn btn-success text-lg px-8">
                        Contact Us →
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-30">
        <div className="bg-white rounded-2xl shadow-2xl p-6">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search for your dream car by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg"
              />
            </div>
            <button className="btn btn-primary px-8">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured <span className="text-gradient">Vehicles</span>
          </h2>
          <p className="text-xl text-gray-600">
            Discover our handpicked selection of premium cars
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div key={car._id} className="card bg-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <figure className="relative h-56">
                <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  car.status === 'available' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                }`}>
                  {car.status === 'available' ? '● Available' : '● Booked'}
                </div>
              </figure>
              <div className="card-body">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="card-title text-2xl">{car.name}</h3>
                  <div className="flex items-center space-x-1">
                    <FaStar className="text-yellow-400" />
                    <span className="text-sm font-semibold">{car.rating}</span>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <FaMapMarkerAlt className="mr-2" />
                    <span className="text-sm">{car.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <FaUser className="mr-2" />
                    <span className="text-sm">{car.providerName}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <span className="text-3xl font-bold text-gradient">{car.price}$</span>
                    <span className="text-gray-600">/day</span>
                  </div>
                  <Link to={`/car/${car._id}`}>
                    <button className="btn btn-primary btn-sm">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/browse-cars">
            <button className="btn btn-secondary text-lg">
              Browse All Cars →
            </button>
          </Link>
        </div>
      </section>

      {/* Why Rent With Us Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose GARIWALA?
            </h2>
            <p className="text-xl text-blue-100">
              Experience the difference with our premium service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaCheckCircle, title: 'Easy Booking', desc: 'Book your car in just a few clicks' },
              { icon: FaShieldAlt, title: 'Trusted Providers', desc: 'Verified and reliable car owners' },
              { icon: FaDollarSign, title: 'Best Prices', desc: 'Competitive rates with no hidden fees' },
              { icon: FaHeadset, title: '24/7 Support', desc: 'Round-the-clock customer assistance' }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all">
                <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-white text-4xl" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our <span className="text-gradient">Customers</span> Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Zhankar Hassan',
              role: 'Business Owner',
              image: 'https://i.pravatar.cc/150?img=12',
              rating: 5,
              text: 'Exceptional service! Booked a BMW for my business trip. The car was pristine!'
            },
            {
              name: 'Mahafuza Moon',
              role: 'Travel Enthusiast',
              image: 'https://i.pravatar.cc/150?img=45',
              rating: 5,
              text: 'Perfect for my family vacation! Great selection of SUVs.'
            },
            {
              name: 'Gazi Taoshif',
              role: 'Photographer',
              image: 'https://i.pravatar.cc/150?img=33',
              rating: 5,
              text: 'Reliable and affordable. I rent cars frequently for shoots.'
            }
          ].map((testimonial, index) => (
            <div key={index} className="card bg-white shadow-xl">
              <div className="card-body">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Rated Cars */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Top Rated <span className="text-gradient">Vehicles</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredCars.filter(car => car.rating >= 4.6).slice(0, 4).map((car) => (
              <div key={car._id} className="card card-side bg-white shadow-xl hover:shadow-2xl transition-all">
                <figure className="w-1/3">
                  <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{car.name}</h2>
                  <p>{car.model} • {car.location}</p>
                  <div className="card-actions justify-end items-center">
                    <span className="text-2xl font-bold text-gradient">{car.price}$/day</span>
                    <Link to={`/car/${car._id}`} className="btn btn-primary btn-sm">Book Now</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;