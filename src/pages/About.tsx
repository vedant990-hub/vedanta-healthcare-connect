
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medical-blue to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Vedanta Healthcare</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Mumbai's premier distributor of world-class medical equipment, 
              committed to enhancing healthcare delivery across leading hospitals.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Based in Mumbai, Vedanta Healthcare has established itself as a trusted partner 
                to the city's leading hospitals and healthcare institutions. We specialize in 
                supplying high-quality diagnostic and surgical products from world-renowned 
                manufacturers.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our focus is on providing healthcare professionals with access to cutting-edge 
                medical technology that enables them to deliver superior patient care. We work 
                closely with global brands like Cordis, Coloplast, and Johnson & Johnson to 
                ensure our clients have access to the latest innovations in medical equipment.
              </p>
              <p className="text-lg text-gray-600">
                With our commitment to excellence, reliability, and personalized service, 
                we have become the preferred choice for Mumbai's premier healthcare institutions.
              </p>
            </div>
            <div className="fade-in-delay">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="bg-medical-red/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-medical-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4">Our Mission</h3>
                  <p className="text-gray-600 text-center">
                    To empower healthcare providers with world-class medical equipment and 
                    exceptional service, enabling them to deliver the highest standard of 
                    patient care across Mumbai.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              Trust | Quality | Commitment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="slide-up hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-medical-blue text-white rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-medical-blue">Trust</h3>
                <p className="text-gray-600">
                  We build lasting relationships with our clients through reliability, 
                  transparency, and consistent delivery of promises. Trust is the foundation 
                  of everything we do.
                </p>
              </CardContent>
            </Card>

            <Card className="slide-up hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="bg-medical-red text-white rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Award className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-medical-red">Quality</h3>
                <p className="text-gray-600">
                  We ensure that only the highest quality medical equipment reaches healthcare 
                  providers. Every product we supply meets international standards and regulations.
                </p>
              </CardContent>
            </Card>

            <Card className="slide-up hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-8 text-center">
                <div className="bg-green-600 text-white rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Target className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">Commitment</h3>
                <p className="text-gray-600">
                  We are dedicated to supporting healthcare professionals with reliable supply, 
                  timely delivery, and exceptional customer service that exceeds expectations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Vedanta Healthcare?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-medical-blue">15+</span>
              </div>
              <h3 className="font-semibold mb-2">Years of Experience</h3>
              <p className="text-gray-600 text-sm">Trusted expertise in medical equipment distribution</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-medical-red">50+</span>
              </div>
              <h3 className="font-semibold mb-2">Hospital Partners</h3>
              <p className="text-gray-600 text-sm">Leading hospitals trust our products and service</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">24/7</span>
              </div>
              <h3 className="font-semibold mb-2">Support Available</h3>
              <p className="text-gray-600 text-sm">Round-the-clock assistance for urgent requirements</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">100%</span>
              </div>
              <h3 className="font-semibold mb-2">Genuine Products</h3>
              <p className="text-gray-600 text-sm">Authentic products directly from manufacturers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-medical-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner with Mumbai's Most Trusted Medical Equipment Distributor
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join the leading hospitals who rely on Vedanta Healthcare for their medical equipment needs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
