
import { Heart, MapPin, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-medical-light p-2 rounded-lg">
                <Heart className="h-6 w-6 text-medical-red fill-current" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Vedanta Healthcare</h3>
                <p className="text-sm text-gray-300">Empowering Diagnostics. Enabling Care.</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Mumbai's trusted distributor of high-quality diagnostic and surgical products 
              from leading brands to major hospitals.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-medical-red" />
                <span className="text-sm text-gray-300">Mumbai, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-medical-red" />
                <span className="text-sm text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Partners</h4>
            <div className="space-y-2">
              <p className="text-sm text-gray-300">• Cordis</p>
              <p className="text-sm text-gray-300">• Coloplast</p>
              <p className="text-sm text-gray-300">• Johnson & Johnson</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Vedanta Healthcare. All rights reserved. | Trust | Quality | Commitment
          </p>
        </div>
      </div>
    </footer>
  );
};
