
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Stethoscope, Activity, Package } from "lucide-react";

const Products = () => {
  const brands = [
    {
      name: "Cordis",
      category: "Cardiovascular and Endovascular Devices",
      description: "Leading manufacturer of interventional cardiovascular devices including stents, catheters, and guidewires for cardiac and vascular procedures.",
      icon: Heart,
      color: "bg-red-500",
      products: [
        "Drug-Eluting Stents",
        "Balloon Catheters",
        "Guidewires",
        "Vascular Closure Devices",
        "Embolic Protection Devices"
      ]
    },
    {
      name: "Coloplast",
      category: "Ostomy, Urology, and Wound Care",
      description: "Global healthcare company providing innovative products for ostomy care, urology, continence care, and wound management.",
      icon: Package,
      color: "bg-blue-500",
      products: [
        "Ostomy Bags and Accessories",
        "Urological Catheters",
        "Wound Dressings",
        "Continence Care Products",
        "Skin Barriers"
      ]
    },
    {
      name: "Johnson & Johnson",
      category: "Surgical Instruments and Diagnostic Devices",
      description: "Comprehensive range of surgical instruments, diagnostic equipment, and medical devices for various healthcare specialties.",
      icon: Stethoscope,
      color: "bg-green-500",
      products: [
        "Surgical Instruments",
        "Diagnostic Equipment",
        "Sutures and Wound Closure",
        "Orthopedic Implants",
        "Endoscopic Devices"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medical-blue to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive range of high-quality diagnostic and surgical equipment 
              from world-renowned manufacturers, trusted by Mumbai's leading hospitals.
            </p>
          </div>
        </div>
      </section>

      {/* Product Brands */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Partner Brands
            </h2>
            <p className="text-lg text-gray-600">
              We partner with globally trusted manufacturers to bring you the best medical equipment
            </p>
          </div>

          <div className="space-y-12">
            {brands.map((brand, index) => {
              const IconComponent = brand.icon;
              return (
                <Card key={brand.name} className="slide-up hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Brand Info */}
                      <div className="lg:col-span-2">
                        <div className="flex items-start space-x-4 mb-6">
                          <div className={`${brand.color} text-white p-4 rounded-lg`}>
                            <IconComponent className="h-8 w-8" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{brand.name}</h3>
                            <p className="text-lg text-medical-blue font-medium mb-3">{brand.category}</p>
                            <p className="text-gray-600">{brand.description}</p>
                          </div>
                        </div>
                      </div>

                      {/* Products List */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Products</h4>
                        <ul className="space-y-2">
                          {brand.products.map((product, productIndex) => (
                            <li key={productIndex} className="flex items-center text-gray-600">
                              <Activity className="h-4 w-4 text-medical-blue mr-2 flex-shrink-0" />
                              {product}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality You Can Trust
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All our products meet international quality standards and are sourced directly 
              from authorized manufacturers to ensure authenticity and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-medical-blue text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl font-bold">✓</span>
              </div>
              <h3 className="font-semibold mb-2">Authentic Products</h3>
              <p className="text-gray-600 text-sm">Direct sourcing from manufacturers ensures product authenticity</p>
            </div>
            
            <div className="text-center">
              <div className="bg-medical-red text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl font-bold">★</span>
              </div>
              <h3 className="font-semibold mb-2">Quality Certified</h3>
              <p className="text-gray-600 text-sm">All products meet international quality and safety standards</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl font-bold">⚡</span>
              </div>
              <h3 className="font-semibold mb-2">Ready Stock</h3>
              <p className="text-gray-600 text-sm">Immediate availability for urgent medical requirements</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl font-bold">📋</span>
              </div>
              <h3 className="font-semibold mb-2">Documentation</h3>
              <p className="text-gray-600 text-sm">Complete product documentation and regulatory compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Cardiovascular</h3>
                <p className="text-gray-600 text-sm">Stents, catheters, and devices for cardiac procedures</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Package className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Ostomy Care</h3>
                <p className="text-gray-600 text-sm">Comprehensive ostomy products and accessories</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Stethoscope className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Surgical Instruments</h3>
                <p className="text-gray-600 text-sm">High-quality surgical tools and equipment</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Activity className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Diagnostic Equipment</h3>
                <p className="text-gray-600 text-sm">Advanced diagnostic and monitoring devices</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🩹</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Wound Care</h3>
                <p className="text-gray-600 text-sm">Advanced wound management solutions</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🔬</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Urology Products</h3>
                <p className="text-gray-600 text-sm">Specialized urological devices and catheters</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-medical-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Specific Medical Equipment?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Contact us for detailed product information, pricing, and availability. 
            Our team is ready to assist with your medical equipment requirements.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Products;
