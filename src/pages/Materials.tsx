import { Card, CardContent } from "@/components/ui/card";
import { Package, CheckCircle, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Materials = () => {
  const materialCategories = [
    {
      category: "Cardiovascular Devices",
      items: [
        "Drug-Eluting Ballons",
        "Balloon Angioplasty Catheters",
        "Guidewires",
        "Introducer Sheaths",
        "Vascular Closure Devices",
        "Guiding Catheters",
        "Ablation Catheters",
        "Diagnostic"
      ],
      color: "bg-red-500"
    },
    
    {
      category: "Ostomy & Wound Care",
      items: [
        "Ostomy Bags",
        "Skin Barriers",
        "Ostomy Accessories"
      ],
      color: "bg-green-500"
    },
    
    
    {
      category: "Disposable Medical Supplies",
      items: [
        "Surgical Gloves",
        "Syringes and Needles", 
        "Medical Masks",
        "Disposable Gowns",
        "Sterile Drapes",
        "Medical Tubing"
      ],
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Materials & Equipment</h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto px-2">
              Comprehensive inventory of high-quality medical materials and equipment 
              with genuine sourcing and immediate availability for Mumbai's healthcare providers.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 sm:py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Genuine Sourcing</h3>
              <p className="text-sm sm:text-base text-gray-600">Direct procurement from authorized manufacturers ensures authenticity</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-600 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Package className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Ready Inventory</h3>
              <p className="text-sm sm:text-base text-gray-600">Comprehensive stock maintained for immediate delivery</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Quick Delivery</h3>
              <p className="text-sm sm:text-base text-gray-600">Fast delivery across Mumbai for urgent medical requirements</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">Quality Assured</h3>
              <p className="text-sm sm:text-base text-gray-600">All products meet international quality and safety standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Material Categories */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Material Categories
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Comprehensive range of medical materials and equipment for all healthcare specialties
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {materialCategories.filter(category => category.category !== "Disposable Medical Supplies").map((category, index) => (
              <Card key={category.category} className="slide-up hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                    <div className={`${category.color} text-white p-2 sm:p-3 rounded-lg flex-shrink-0`}>
                      <Package className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{category.category}</h3>
                    </div>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Centered Disposable Medical Supplies Card */}
          <div className="flex justify-center mt-6 sm:mt-8">
            {materialCategories.filter(category => category.category === "Disposable Medical Supplies").map((category, index) => (
              <Card key={category.category} className="slide-up hover:shadow-lg transition-shadow duration-300 w-full max-w-xl" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                    <div className={`${category.color} text-white p-2 sm:p-3 rounded-lg flex-shrink-0`}>
                      <Package className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{category.category}</h3>
                    </div>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality & Compliance Standards
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              All our materials and equipment meet stringent quality standards and regulatory requirements
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-md">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🏥</div>
              <h3 className="text-sm sm:text-base font-semibold mb-2">FDA Approved</h3>
              <p className="text-xs sm:text-sm text-gray-600">Products approved by international regulatory bodies</p>
            </div>
            
            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-md">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">📋</div>
              <h3 className="text-sm sm:text-base font-semibold mb-2">ISO Certified</h3>
              <p className="text-xs sm:text-sm text-gray-600">Manufacturing facilities maintain ISO quality standards</p>
            </div>
            
            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-md">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🔬</div>
              <h3 className="text-sm sm:text-base font-semibold mb-2">Sterile Products</h3>
              <p className="text-xs sm:text-sm text-gray-600">Sterile packaging and handling for surgical products</p>
            </div>
            
            <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-md">
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">📄</div>
              <h3 className="text-sm sm:text-base font-semibold mb-2">Documentation</h3>
              <p className="text-xs sm:text-sm text-gray-600">Complete product documentation and traceability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Management */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Inventory Management Excellence</h2>
              <p className="text-lg text-gray-600 mb-6">
                We maintain optimal inventory levels to ensure immediate availability of critical 
                medical supplies when hospitals need them most. Our advanced inventory management 
                system tracks product expiry dates, lot numbers, and ensures FIFO rotation.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Temperature-controlled storage for sensitive products</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Automated expiry date monitoring and alerts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Real-time inventory tracking and reporting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Emergency stock availability for critical procedures</span>
                </div>
              </div>
            </div>
            
            <div className="fade-in-delay">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <Package className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">Need Bulk Orders?</h3>
                    <p className="text-gray-600 mb-6">
                      We offer special pricing for bulk orders and can arrange dedicated inventory 
                      management for high-volume hospitals.
                    </p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>• Volume discounts available</p>
                      <p>• Dedicated account management</p>
                      <p>• Custom packaging options</p>
                      <p>• Flexible payment terms</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Specific Medical Materials?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Contact Vedanta Healthcare for detailed product information, pricing, and availability. 
            Our experienced team is ready to assist with your medical equipment requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Request Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-blue-600 border-blue-600">
              <a href="mailto:Vedanta1812@gmail.com" className="font-semibold">Email: Vedanta1812@gmail.com</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Materials;
