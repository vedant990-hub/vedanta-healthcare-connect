
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-1 rounded-lg">
                <img
                  src="/lovable-uploads/logo.png"
                  alt="Vedanta Healthcare logo"
                  className="h-10 w-10 object-contain"
                />
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
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 px-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="text-xs sm:text-sm text-gray-400 text-left">
              © 2024 Vedanta Healthcare. All rights reserved. | Founded 2012 | Integrity | Patient-Centered | Quality-First
            </p>
            <p className="text-xs sm:text-sm text-gray-400 text-left sm:text-right">
              Website designed by{" "}
              <a
                href="https://pawarvedant.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-white transition-colors"
              >
                Vedant Pawar
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
