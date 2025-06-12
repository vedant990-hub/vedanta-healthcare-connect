
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Heart, Users, Award } from "lucide-react";

const Hospitals = () => {
  const hospitals = [
    {
      name: "Lilavati Hospital",
      specialty: "Multi-specialty",
      description: "Premier healthcare institution known for advanced medical care and cutting-edge technology."
    },
    {
      name: "Kokilaben Dhirubhai Ambani Hospital",
      specialty: "Multi-specialty",
      description: "State-of-the-art medical facility with comprehensive healthcare services and world-class infrastructure."
    },
    {
      name: "Breach Candy Hospital",
      specialty: "Multi-specialty",
      description: "Leading healthcare provider with a legacy of excellence in patient care and medical innovation."
    },
    {
      name: "Hinduja Hospital",
      specialty: "Multi-specialty",
      description: "Renowned medical institution providing comprehensive healthcare with advanced diagnostic facilities."
    },
    {
      name: "Bombay Hospital",
      specialty: "Multi-specialty",
      description: "Historic medical institution with a reputation for quality healthcare and medical education."
    },
    {
      name: "Tata Memorial Hospital",
      specialty: "Cancer Care",
      description: "Leading cancer treatment and research center, pioneer in oncology care in India."
    },
    {
      name: "Jaslok Hospital",
      specialty: "Multi-specialty",
      description: "Premium healthcare facility known for personalized patient care and advanced medical treatments."
    },
    {
      name: "Saifee Hospital",
      specialty: "Multi-specialty",
      description: "Modern healthcare institution providing comprehensive medical services with patient-centered approach."
    },
    {
      name: "Nanavati Hospital",
      specialty: "Multi-specialty",
      description: "Super-specialty hospital offering world-class healthcare with advanced medical technology."
    },
    {
      name: "Hiranandani Hospital",
      specialty: "Multi-specialty",
      description: "Comprehensive healthcare provider with state-of-the-art facilities and expert medical professionals."
    }
  ];

  const partnerships = [
    {
      icon: Heart,
      title: "Cardiovascular Programs",
      description: "Supplying advanced cardiac devices and interventional equipment"
    },
    {
      icon: Users,
      title: "Surgical Departments",
      description: "Comprehensive surgical instruments and disposables"
    },
    {
      icon: Award,
      title: "Diagnostic Centers",
      description: "State-of-the-art diagnostic equipment and testing supplies"
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
              Trusted by Mumbai's leading healthcare institutions to deliver 
              quality medical equipment and reliable supply chain solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-medical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Healthcare Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Vedanta Healthcare is proud to serve Mumbai's most prestigious hospitals and 
              medical institutions. Our partnerships are built on trust, reliability, and 
              a shared commitment to delivering exceptional patient care through quality 
              medical equipment and supplies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {partnerships.map((partnership, index) => (
              <Card key={partnership.title} className="slide-up hover:shadow-lg transition-all duration-300" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="bg-medical-blue/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <partnership.icon className="h-8 w-8 text-medical-blue" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{partnership.title}</h3>
                  <p className="text-gray-600 text-sm">{partnership.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leading Medical Institutions
            </h2>
            <p className="text-lg text-gray-600">
              Serving Mumbai's most trusted healthcare providers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hospitals.map((hospital, index) => (
              <Card key={hospital.name} className="slide-up hover:shadow-lg transition-all duration-300 h-full" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="bg-medical-blue/10 p-2 rounded-lg flex-shrink-0">
                      <MapPin className="h-5 w-5 text-medical-blue" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{hospital.name}</h3>
                      <span className="text-sm font-medium text-medical-blue bg-medical-blue/10 px-2 py-1 rounded">
                        {hospital.specialty}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{hospital.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built on Trust & Excellence
            </h2>
            <p className="text-lg text-gray-600">
              What makes us the preferred partner for Mumbai's healthcare institutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-medical-blue mb-2">10+</div>
              <div className="text-sm text-gray-600">Major Hospitals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-medical-red mb-2">99%</div>
              <div className="text-sm text-gray-600">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Authentic Products</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-medical-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partnership Benefits
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              Why leading hospitals choose Vedanta Healthcare as their trusted medical equipment partner
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Dedicated Account Management</h3>
                  <p className="text-blue-100 text-sm">
                    Personalized service with dedicated account managers understanding your specific needs
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Priority Supply Chain</h3>
                  <p className="text-blue-100 text-sm">
                    Guaranteed inventory availability and priority delivery for critical medical supplies
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Technical Training</h3>
                  <p className="text-blue-100 text-sm">
                    Comprehensive training and support for new equipment and medical devices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hospitals;
