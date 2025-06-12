
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medical-blue to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Vedanta Healthcare</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Dedicated to advancing healthcare in Mumbai through quality medical equipment 
              and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-medical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story & Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded with a vision to bridge the gap between cutting-edge medical technology 
                and healthcare providers in Mumbai, Vedanta Healthcare has grown to become a 
                trusted name in medical equipment distribution.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our mission is simple yet profound: to empower healthcare professionals with 
                access to the finest diagnostic and surgical equipment, enabling them to provide 
                exceptional patient care. We believe that quality healthcare begins with quality equipment.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through strategic partnerships with global leaders like Cordis, Coloplast, and 
                Johnson & Johnson, we ensure that Mumbai's healthcare institutions have access 
                to world-class medical technology.
              </p>
            </div>
            <div className="fade-in-delay">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-medical-red/10 p-3 rounded-full">
                    <Heart className="h-8 w-8 text-medical-red" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
                    <p className="text-gray-600">Healthier communities through better healthcare</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To be Mumbai's most trusted healthcare partner, known for reliability, 
                  quality, and innovation in medical equipment distribution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The foundation of everything we do at Vedanta Healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="slide-up hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-medical-blue/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-8 w-8 text-medical-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-medical-blue">Trust</h3>
                <p className="text-gray-600 leading-relaxed">
                  Building lasting relationships through transparency, reliability, and 
                  consistent delivery of promises. Our word is our bond.
                </p>
              </CardContent>
            </Card>

            <Card className="slide-up hover:shadow-lg transition-all duration-300" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="bg-medical-red/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Award className="h-8 w-8 text-medical-red" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-medical-red">Quality</h3>
                <p className="text-gray-600 leading-relaxed">
                  Uncompromising commitment to excellence in every product we distribute. 
                  Quality is not just our standard, it's our responsibility.
                </p>
              </CardContent>
            </Card>

            <Card className="slide-up hover:shadow-lg transition-all duration-300" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-8 text-center">
                <div className="bg-green-500/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">Commitment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Dedicated to supporting healthcare professionals with reliable supply chains 
                  and exceptional service. Your success is our commitment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Vedanta Healthcare?
            </h2>
            <p className="text-lg text-gray-600">
              What sets us apart in Mumbai's healthcare distribution landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-medical-blue text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Authorized Distributor</h3>
              <p className="text-gray-600 text-sm">
                Official partnerships with leading global medical brands
              </p>
            </div>

            <div className="text-center">
              <div className="bg-medical-red text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Reliable Supply</h3>
              <p className="text-gray-600 text-sm">
                Consistent inventory and timely delivery across Mumbai
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600 text-sm">
                Knowledgeable team with deep healthcare industry experience
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Patient-Centric</h3>
              <p className="text-gray-600 text-sm">
                Everything we do ultimately serves better patient outcomes
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
