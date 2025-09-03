import { Calendar } from "lucide-react";
import { Link } from "react-router";
const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Calendar className="w-6 h-6 text-blue-500" />
          <span className="text-xl font-semibold">TimetableAI</span>
        </div>

        {/* Nav Links + Button (aligned right together) */}
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-gray-300 hover:text-white transition">
            Home
          </Link>
          <Link
            to="/login"
            className="text-gray-300 hover:text-white transition"
          >
            Login
          </Link>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition">
            <Link to="/signup">Get Started</Link>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

{
  /*className="text-gray-300 hover:text-white transition*/
}
