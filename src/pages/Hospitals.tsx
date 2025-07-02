import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Award, Users, Clock } from "lucide-react";

const Hospitals = () => {
  const hospitals = [
    {
      name: "Lilavati Hospital",
      location: "Bandra West",
      specialty: "Multi-specialty Hospital",
      description: "Premier healthcare institution known for advanced medical treatments and world-class facilities."
    },
    {
      name: "Kokilaben Dhirubhai Ambani Hospital",
      location: "Andheri West",
      specialty: "Super Specialty Hospital",
      description: "State-of-the-art medical facility with cutting-edge technology and specialized care units."
    },
    {
      name: "Breach Candy Hospital",
      location: "Breach Candy",
      specialty: "Multi-specialty Hospital",
      description: "Historic hospital providing comprehensive healthcare services with modern medical equipment."
    },
    {
      name: "Hinduja Hospital",
      location: "Mahim",
      specialty: "Multi-specialty Hospital",
      description: "Leading healthcare provider with advanced diagnostic and treatment capabilities."
    },
    {
      name: "Bombay Hospital",
      location: "Marine Lines",
      specialty: "Multi-specialty Hospital",
      description: "Renowned medical institution with a legacy of excellence in patient care and medical education."
    },
    {
      name: "Tata Memorial Hospital",
      location: "Parel",
      specialty: "Cancer Specialty Hospital",
      description: "Premier cancer treatment and research center with world-class oncology facilities."
    },
    {
      name: "Jaslok Hospital",
      location: "Pedder Road",
      specialty: "Multi-specialty Hospital",
      description: "Advanced medical care facility known for its specialized treatments and patient services."
    },
    {
      name: "Saifee Hospital",
      location: "Charni Road",
      specialty: "Multi-specialty Hospital",
      description: "Modern healthcare facility providing comprehensive medical services and emergency care."
    },
    {
      name: "Nanavati Hospital",
      location: "Vile Parle West",
      specialty: "Super Specialty Hospital",
      description: "Advanced medical center with state-of-the-art technology and specialized medical departments."
    },
    {
      name: "Hiranandani Hospital",
      location: "Powai",
      specialty: "Multi-specialty Hospital",
      description: "Modern healthcare facility with advanced medical infrastructure and patient-centric care."
    },
    {
      name: "King Edward Memorial Hospital",
      location: "Parel",
      specialty: "Government Multi-specialty Hospital",
      description: "Leading government hospital with comprehensive medical services and teaching facilities."
    },
    {
      name: "Sir H. N. Reliance Foundation Hospital",
      location: "Girgaon",
      specialty: "Multi-specialty Hospital",
      description: "Advanced healthcare facility with cutting-edge medical technology and patient-focused care."
    },
    {
      name: "Global Hospital",
      location: "Lower Parel",
      specialty: "Multi-specialty Hospital",
      description: "International standard healthcare facility with specialized medical departments."
    },
    {
      name: "Fortis Hospital",
      location: "Mulund",
      specialty: "Multi-specialty Hospital",
      description: "Modern healthcare provider with advanced medical equipment and comprehensive services."
    },
    {
      name: "Jupiter Hospital",
      location: "Thane",
      specialty: "Multi-specialty Hospital",
      description: "Premium healthcare facility serving Mumbai metropolitan area with specialized care units."
    },
    {
      name: "Wockhardt Hospital",
      location: "Mumbai Central",
      specialty: "Multi-specialty Hospital",
      description: "Renowned healthcare institution with advanced cardiac and critical care facilities."
    },
    {
      name: "Apollo Hospital",
      location: "Navi Mumbai",
      specialty: "Multi-specialty Hospital",
      description: "Leading healthcare chain providing comprehensive medical services and specialized treatments."
    },
    {
      name: "Criticare Hospital",
      location: "Andheri West",
      specialty: "Multi-specialty Hospital",
      description: "Advanced medical facility specializing in critical care and emergency medical services."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medical-blue to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hospitals We Serve</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Trusted channel partner to Mumbai's leading hospitals, providing world-class medical equipment 
              and supplies to enhance patient care across the city.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-medical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-medical-blue mb-2">50+</div>
              <div className="text-gray-600">Hospitals Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-medical-red mb-2">15+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">Genuine Products</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitals Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leading Healthcare Institutions
            </h2>
            <p className="text-lg text-gray-600">
              Mumbai's premier hospitals trust us for their medical equipment and supply needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitals.map((hospital, index) => (
              <Card key={hospital.name} className="slide-up hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="bg-medical-blue/10 p-3 rounded-lg">
                      <Award className="h-6 w-6 text-medical-blue" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{hospital.name}</h3>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        {hospital.location}
                      </div>
                      <div className="text-sm font-medium text-medical-blue mb-3">{hospital.specialty}</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{hospital.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Support Our Hospital Channel Partners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-medical-blue text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-3">24/7 Availability</h3>
              <p className="text-gray-600 text-sm">
                Round-the-clock support for emergency medical equipment requirements
              </p>
            </div>

            <div className="text-center">
              <div className="bg-medical-red text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Dedicated Support</h3>
              <p className="text-gray-600 text-sm">
                Assigned account managers for personalized service and quick response
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl font-bold">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">
                Same-day delivery for urgent requirements across Mumbai
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl font-bold">📋</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Inventory Management</h3>
              <p className="text-gray-600 text-sm">
                Custom inventory solutions and supply chain management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Hospital Channel Partners Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 mb-6 italic">
                  "Vedanta Healthcare has been our trusted channel partner for years. Their reliability 
                  and quality products are essential to our operations."
                </p>
                <div className="text-sm text-gray-500">
                  - Mumbai Healthcare Professional
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 mb-6 italic">
                  "Exceptional service and genuine products. They understand the urgency 
                  of medical requirements and always deliver on time."
                </p>
                <div className="text-sm text-gray-500">
                  - Hospital Procurement Manager
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 mb-6 italic">
                  "Their 24/7 support has been invaluable for our emergency procedures. 
                  Professional team with deep healthcare industry knowledge."
                </p>
                <div className="text-sm text-gray-500">
                  - Chief Medical Officer
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-16 bg-medical-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Mumbai's Leading Hospitals
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Channel partner with Vedanta Healthcare for reliable medical equipment supply, 
            exceptional service, and support that helps you focus on patient care.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hospitals;
