import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Materials & Equipment", path: "/materials" },
    { name: "Hospitals We Serve", path: "/hospitals" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gray-50 shadow-md sticky top-0 z-50">
      <div>
        <div>
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 ml-6">
              <div className="bg-medical-light p-2 rounded-lg">
                <img src="/lovable-uploads/logo.png" alt="Logo" className="h-12 w-12 object-contain border-2 border-black rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold font-serif tracking-wide text-green-600">Vedanta Healthcare</span>
                <span className="text-xs font-bold text-black">Mumbai, India</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 mr-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-medical-blue ${
                    isActive(item.path)
                      ? "text-medical-blue border-b-2 border-medical-blue"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-3 py-2 text-base font-medium transition-colors ${
                      isActive(item.path)
                        ? "text-medical-blue bg-medical-light"
                        : "text-gray-700 hover:text-medical-blue hover:bg-gray-50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
