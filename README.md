# GARIWALA - Premium Car Rental Platform


[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](YOUR_NETLIFY_URL_HERE)
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Auth-FFCA28?style=for-the-badge&logo=firebase)](https://firebase.google.com/)

A modern, full-stack MERN car rental platform that connects users with premium vehicle providers across Bangladesh. Built with React 19, featuring stunning animations and seamless user experience.

## 🌐 Live Link

- **Frontend**: [GARIWALA - Premium Car Rentals](https://gariwala.netlify.app/)

---

## ✨ Main Features

### 🔐 **Secure Authentication System**
- Email/Password registration with validation (uppercase, lowercase, 6+ characters)
- Google OAuth integration for quick sign-up
- Persistent login sessions (stays logged in on refresh)
- Protected private routes with automatic redirection

### 🚘 **Complete Car Management**
- Browse all available vehicles with real-time status
- Add new car listings with detailed information
- Update existing car details with inline editing
- Delete cars with confirmation dialogs
- View comprehensive car details before booking

### 📚 **Smart Booking System**
- One-click booking with confirmation
- Real-time availability checking
- Prevents double-booking automatically
- View all personal bookings in one place
- Cancel bookings with status updates

### 🔍 **Advanced Search & Filtering**
- Search cars by name in real-time
- Filter by category (Sedan, SUV, Luxury, Electric, Hatchback)
- Filter by availability status
- Dynamic results with instant updates

### 🎨 **Beautiful UI/UX**
- **Framer Motion**: Smooth page transitions and hover effects
- **React Typewriter**: Dynamic hero banner text animation
- **React Tooltip**: Informative hover cards with pricing details
- **Lottie React**: Success animations on booking confirmation
- **SweetAlert2**: Beautiful confirmation and alert dialogs
- Responsive design (mobile, tablet, desktop)
- Professional gradient color schemes

### 📱 **Fully Responsive**
- Mobile-first design approach
- Optimized for all screen sizes
- Touch-friendly interactions
- Fast loading times

---

## 🛠️ Tech Stack

### Core Technologies
- **React 19.1.1** - Latest React with improved performance
- **React Router v7** - Client-side routing
- **Vite 7.1.7** - Lightning-fast build tool
- **Tailwind CSS v4** - Utility-first CSS framework
- **DaisyUI 5.4.7** - Beautiful UI components

### Authentication
- **Firebase Authentication** - Secure user management
- Email/Password authentication
- Google OAuth provider

### HTTP & State Management
- **Axios 1.13.2** - Promise-based HTTP client
- **React Context API** - Global state management

### Animation Libraries
- **Framer Motion** - Professional animations
- **React Simple Typewriter** - Typing effects
- **React Tooltip** - Hover information cards
- **Lottie React** - JSON-based animations

### UI Enhancements
- **React Hot Toast** - Toast notifications
- **SweetAlert2** - Beautiful alert dialogs
- **React Icons** - Icon library
- **Swiper** - Touch slider carousel

---

## 📁 Project Structure

```
gariwala-frontend/
├── public/
│   ├── _redirects              # Netlify routing config
│   └── logo.png
├── src/
│   ├── assets/
│   │   └── logo.png
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with auth dropdown
│   │   ├── Footer.jsx          # Footer with links & social media
│   │   ├── CarCard.jsx         # Reusable car card with animations
│   │   └── LoadingSpinner.jsx  # Loading state component
│   │   └── ThemeToggle.jsx     # Theme Toggle
│   ├── pages/
│   │   ├── Home.jsx            # Landing page with hero & featured cars
│   │   ├── Login.jsx           # Login with email/Google
│   │   ├── Register.jsx        # Registration with validation
│   │   ├── BrowseCars.jsx      # All cars with filters
│   │   ├── CarDetails.jsx      # Detailed car view with booking
│   │   ├── AddCar.jsx          # Add new car form
│   │   ├── MyListings.jsx      # User's car listings (CRUD)
│   │   ├── MyBookings.jsx      # User's booking history
│   │   └── ErrorPage.jsx       # Custom 404 page
│   │   └── BookCar.jsx         # Car Booking Page
│   │   └── ContactUs.jsx       # Custom Contact Us Page
│   │   └── Dashboard.jsx       # Custom Dashboard Page
│   ├── routes/
│   │   ├── router.jsx          # Route configuration
│   │   └── PrivateRoute.jsx    # Protected route wrapper
│   ├── context/
│   │   └── AuthContext.jsx     # Authentication context
│   ├── firebase/
│   │   └── firebase.config.js  # Firebase initialization
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles with custom gradients
├── .env                        # Environment variables (not in repo)
├── .gitignore
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Firebase account
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/gariwala-frontend.git
cd gariwala-frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory:

```env
# Firebase Configuration
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_project.firebaseapp.com
VITE_projectId=your_project_id
VITE_storageBucket=your_project.appspot.com
VITE_messagingSenderId=123456789
VITE_appId=1:123456:web:abc123

# API Base URL
VITE_API_BASE_URL=https://gariwala-server.vercel.app
```

**⚠️ Important**: Never commit `.env` file to Git!

### 4. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### 5. Build for Production
```bash
npm run build
```

---

## 🔥 Firebase Setup

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name: "gariwala"
4. Disable Google Analytics (optional)
5. Click "Create project"

### 2. Enable Authentication
1. In Firebase Console, click "Authentication"
2. Click "Get started"
3. Enable **Email/Password** sign-in method
4. Enable **Google** sign-in method
5. Add your email as authorized domain

### 3. Get Configuration
1. Go to Project Settings (⚙️ icon)
2. Scroll to "Your apps"
3. Click web icon `</>`
4. Register app: "gariwala-web"
5. Copy `firebaseConfig` values to `.env`

### 4. Add Authorized Domains
1. Go to Authentication → Settings
2. Scroll to "Authorized domains"
3. Add:
   - `localhost` (for development)
   - Your Netlify domain (after deployment)

---

## 📦 Key Dependencies

```json
{
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router-dom": "^7.9.5",
    "firebase": "^12.5.0",
    "axios": "^1.13.2",
    "framer-motion": "^11.x.x",
    "react-simple-typewriter": "^5.x.x",
    "react-tooltip": "^5.x.x",
    "lottie-react": "^2.x.x",
    "sweetalert2": "^11.x.x",
    "react-hot-toast": "^2.6.0",
    "react-icons": "^5.5.0",
    "swiper": "^12.0.3",
    "tailwindcss": "^4.1.17",
    "daisyui": "^5.4.7"
  }
}
```

---

## 🌐 Deployment (Netlify)

### Method 1: Drag & Drop
1. Run `npm run build`
2. Go to [Netlify](https://app.netlify.com/)
3. Drag `dist` folder to deploy zone

### Method 2: GitHub Integration (Recommended)
1. Push code to GitHub
2. Go to Netlify → "Add new site"
3. Import from Git → Select repository
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Add environment variables:
   - Go to Site settings → Environment variables
   - Add all `VITE_*` variables
6. Click "Deploy site"

### Important: Configure Redirects
Create `public/_redirects`:
```
/*    /index.html   200
```
This prevents 404 errors on page refresh.

### Update Firebase
Add your Netlify domain to Firebase authorized domains:
```
https://your-app.netlify.app
```

---

## 🎯 Features Breakdown

### Home Page
- ✅ Hero carousel with 3 slides
- ✅ Typewriter effect in hero text
- ✅ Search bar with real-time filtering
- ✅ 6 featured cars from database
- ✅ "Why Choose Us" section (4 benefits)
- ✅ Customer testimonials (3 reviews)
- ✅ Top-rated cars section

### Browse Cars
- ✅ All available cars display
- ✅ Search by car name
- ✅ Filter by category
- ✅ Status badges (Available/Booked)
- ✅ Animated card grid
- ✅ Hover tooltips with details

### Car Details (Private)
- ✅ Full car information
- ✅ Provider details
- ✅ Booking button with confirmation
- ✅ Lottie success animation
- ✅ Status checking
- ✅ Login requirement

### Add Car (Private)
- ✅ Complete car form
- ✅ Auto-filled provider info
- ✅ Category dropdown
- ✅ Form validation
- ✅ Image URL input
- ✅ Success notification

### My Listings (Private)
- ✅ User's car list
- ✅ Update functionality
- ✅ Delete with confirmation
- ✅ Status display
- ✅ Modal edit form

### My Bookings (Private)
- ✅ User's booking history
- ✅ Car details display
- ✅ Booking date
- ✅ Cancel booking option
- ✅ Empty state

---

## 🎨 Custom Styling

### Gradient Buttons
```css
.btn-primary {
  background: linear-gradient(135deg, #007bff 0%, #00c6ff 100%);
}
```

### Animations
- Page entrance: Fade + slide
- Card hover: Lift + scale
- Button tap: Scale down
- Typewriter: Dynamic text
- Tooltips: Hover information

---

## 🔒 Security Features

- ✅ Environment variables for sensitive data
- ✅ Firebase authentication
- ✅ Private route protection
- ✅ Input validation
- ✅ XSS prevention
- ✅ Secure API calls

```

---

## 📊 Performance

- ⚡ Lighthouse Score: 90+
- 📱 Mobile-first responsive
- 🎨 Optimized images from Unsplash
- 🚀 Fast page loads with Vite
- 💾 Efficient state management


---

## 🙏 Acknowledgments

- Firebase for authentication
- Unsplash for high-quality car images
- DaisyUI for beautiful components
- Framer Motion for smooth animations
- MongoDB Atlas for database hosting

---

## 🔗 Related Links

- [Backend Repository](https://github.com/Taoshif1/PH-A10-Server)
- [API Documentation](gariwala-server.vercel.app)
- [Live Demo]( https://gariwala.netlify.app/)
