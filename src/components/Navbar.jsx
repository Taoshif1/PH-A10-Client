import { FaCar, FaLaughBeam } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar px-8 py-3 bg-white shadow-lg sticky top-0 z-50">
      {/* Left - Logo & Name */}
      <div className="flex items-center gap-2">
        <FaCar className="text-[var(--color-primary)] text-2xl" />
        <h1 className="navbar-brand text-2xl font-bold text-[var(--color-primary)] tracking-wide">
          GARIWALA
        </h1>
      </div>

      {/* Middle - Navigation Links */}
      <div className="flex-1 flex justify-center gap-8">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">Cars</a>
        <a href="#" className="nav-link">Services</a>
        <a href="#" className="nav-link">About</a>
        <a href="#" className="nav-link">Contact</a>
      </div>

      {/* Right - Login + Fun Icon */}
      <div className="flex items-center gap-4">
        <button className="btn-custom">Login</button>
        <FaLaughBeam className="fun-icon" title="Feeling Lucky?" />
      </div>
    </div>
  );
};

export default Navbar;
