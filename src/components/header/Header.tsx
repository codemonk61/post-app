import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../Button/Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-indigo-600">MyApp</div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <a href="/" className="hover:text-indigo-600">
              Home
            </a>
            <a href="/posts" className="hover:text-indigo-600">
              Posts
            </a>
            <a href="/about" className="hover:text-indigo-600">
              About
            </a>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex space-x-3">
           <Button cta="Login" onClick={()=>{}}/>
             <Button cta="SignUp" onClick={()=>{}}/>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-3 space-y-3">
          <a href="/" className="block hover:text-indigo-600">
            Home
          </a>
          <a href="/posts" className="block hover:text-indigo-600">
            Posts
          </a>
          <a href="/about" className="block hover:text-indigo-600">
            About
          </a>
          <div className="space-y-2">
             <Button cta="Login" onClick={()=>{}}/>
             <Button cta="SignUp" onClick={()=>{}}/>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

