import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Award, Users, Clock, Plus, ArrowRight } from "lucide-react";

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
      name: "Fortis Hospital",
      location: "Mulund",
      specialty: "Multi-specialty Hospital",
      description: "Modern healthcare provider with advanced medical equipment and comprehensive services."
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
            {hospitals.map((hospital, index) => {
              // Map hospital names to image filenames
              const hospitalImages = {
                "Lilavati Hospital": "/lovable-uploads/lilavati.jpg",
                "Kokilaben Dhirubhai Ambani Hospital": "/lovable-uploads/Kokilaben-Dhirubhai-Ambani-Hospital.jpg",
                "Breach Candy Hospital": "/lovable-uploads/new-breach-candy-hospital.jpg",
                "Hinduja Hospital": "/lovable-uploads/hinduja-hospital.jpg",
                "Bombay Hospital": "/lovable-uploads/bombay-hospital.jpg",
                "Tata Memorial Hospital": "/lovable-uploads/tata-memorial-hospital.jpg",
                "Jaslok Hospital": "/lovable-uploads/jaslok-hospital.jpg",
                "Saifee Hospital": "/lovable-uploads/Saifee-Hospital.jpeg",
                "Nanavati Hospital": "/lovable-uploads/nanavati-hospital.jpg",
                "Hiranandani Hospital": "/lovable-uploads/hiranandani-Hospital.jpg",
                "Fortis Hospital": "/lovable-uploads/Fortis-Hospital.jpg",
              };
              const bgImage = hospitalImages[hospital.name];
              const hasBg = Boolean(bgImage);
              return (
                <Card
                  key={hospital.name}
                  className={`slide-up hover:shadow-lg transition-shadow duration-300${hasBg ? ' !bg-transparent !border-0' : ''}`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    ...(hasBg
                      ? {
                          backgroundImage: `url(${bgImage})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          color: '#fff',
                          position: 'relative',
                          overflow: 'hidden',
                          borderRadius: '1rem',
                          height: '100%',
                          width: '100%',
                        }
                      : {}),
                  }}
                >
                  <CardContent
                    className={
                      hasBg ? "p-6 bg-black/60 rounded-xl" : "p-6"
                    }
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="bg-medical-blue/10 p-3 rounded-lg">
                        <Award className="h-6 w-6 text-medical-blue" />
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`text-lg font-semibold mb-1 ${hasBg ? 'text-white drop-shadow-lg' : 'text-gray-900'}`}
                        >
                          {hospital.name}
                        </h3>
                        <div
                          className={`flex items-center text-sm mb-2 ${hasBg ? 'text-white drop-shadow' : 'text-gray-500'}`}
                        >
                          <MapPin className="h-4 w-4 mr-1" />
                          {hospital.location}
                        </div>
                        <div
                          className={`text-sm font-medium mb-3 ${hasBg ? 'text-white drop-shadow' : 'text-medical-blue'}`}
                        >
                          {hospital.specialty}
                        </div>
                      </div>
                    </div>
                    <p className={hasBg ? "text-white text-sm drop-shadow" : "text-gray-600 text-sm"}>
                      {hospital.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
            
            {/* Final Card with Plus Symbol */}
            <a
              href="#"
              className="group block h-full w-full"
              tabIndex={0}
              aria-label="View Full Hospital Network"
            >
              <Card
                className="slide-up hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 border-0 focus-within:ring-2 focus-within:ring-medical-blue"
                style={{
                  animationDelay: `${hospitals.length * 0.1}s`,
                  borderRadius: '1rem',
                  height: '100%',
                  width: '100%',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px 0 rgba(16, 30, 54, 0.08)',
                }}
              >
                <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
                  <div className="bg-medical-blue/10 p-3 rounded-full mb-4 flex items-center justify-center">
                    <ArrowRight className="h-8 w-8 text-medical-blue group-hover:text-blue-700 transition-colors duration-200" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">View Full Hospital Network</h3>
                  <p className="text-gray-600 text-sm mb-0">Discover all the hospitals we’re proudly partnered with.</p>
                </CardContent>
              </Card>
            </a>
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
                "I trust Vedanta's team to deliver on time-even during critical emergencies.That reliability saves lives."

                
                
                
                </p>
                <div className="text-sm text-gray-700 font-bold">
                  Dr Haresh Mehta
               
                </div>
                <div className="text-sm text-gray-700 font-bold">
                  Director Interventional & Structural Cardiology
                  
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 mb-6 italic">
                "Exceptional service and genuine products.They understand the urgency 
                  of medical requirements and always deliver on time."
                </p>
                <div className="text-sm text-gray-700 font-bold">
                  Deepak Singh
                </div>
                < div className="text-sm text-gray-700 font-bold">
                CEO Hinduja Hospital
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
                <div className="text-sm text-gray-700 font-bold">
                Rupal Desai (Purchase Manager )
                </div>
                
                
                <div className="text-sm text-gray-700 font-bold">
                S. L. Raheja Hospital - A Fortis Associate
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
