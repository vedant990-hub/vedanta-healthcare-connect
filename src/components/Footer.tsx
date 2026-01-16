
import { Heart, MapPin, Clock, Phone, Mail } from "lucide-react";

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
              Founded in 2012 by Mr. Vishnudas Pawar, Mumbai's trusted distributor of high-quality 
              diagnostic and surgical products from leading global brands.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-medical-red mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  Office No 1, Pragnya Premises Society,<br />
                  6V23+RR6, Akurli Rd, Kandivali,<br />
                  Govind Dalvi Nagar, Kandivali East,<br />
                  Mumbai, Maharashtra 400101
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-medical-red flex-shrink-0" />
                <span className="text-sm text-gray-300">+91 9833166613</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-medical-red flex-shrink-0" />
                <span className="text-sm text-gray-300">Vedanta1812@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-medical-red flex-shrink-0" />
                <span className="text-sm text-gray-300">Monday - Saturday: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Channel Partners */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Channel Partners</h4>
            <div className="space-y-2">
              <p className="text-sm text-gray-300">• Johnson & Johnson</p>
              <p className="text-sm text-gray-300">• Cordis</p>
              <p className="text-sm text-gray-300">• Coloplast</p>
              <p className="text-sm text-gray-300">• SHI Mediwere</p>
              <p className="text-sm text-gray-300">• Medline Healthcare</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Vedanta Healthcare. All rights reserved. | Founded 2012 | Integrity | Patient-Centered | Quality-First
          </p>
        </div>
      </div>
    </footer>
  );
};
