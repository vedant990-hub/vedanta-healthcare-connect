
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Briefcase, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medical-blue to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering Diagnostics.
              <br />
              <span className="text-medical-light">Enabling Care.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Mumbai's trusted distributor of high-quality diagnostic and surgical products 
              from world-renowned brands to leading hospitals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/products">View Our Products</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-medical-blue" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-medical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-delay">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Healthcare Partner in Mumbai
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Vedanta Healthcare is a leading distributor of premium diagnostic and medical equipment 
              in Mumbai. We partner with globally trusted brands like Cordis, Coloplast, and Johnson & Johnson 
              to supply high-quality medical products to major hospitals across the city. Our commitment 
              to excellence ensures healthcare providers have access to the best medical technology 
              to deliver superior patient care.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="slide-up hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-medical-blue/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Briefcase className="h-8 w-8 text-medical-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Our Products</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive range of diagnostic and surgical equipment from trusted global brands.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/products">Explore Products</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="slide-up hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="bg-medical-red/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-medical-red" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Our Partners</h3>
                <p className="text-gray-600 mb-6">
                  Authorized distributor for Cordis, Coloplast, Johnson & Johnson, and other leading brands.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="slide-up hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-8 text-center">
                <div className="bg-green-500/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Hospitals We Serve</h3>
                <p className="text-gray-600 mb-6">
                  Trusted by leading hospitals across Mumbai including Lilavati, Kokilaben, and more.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/hospitals">View Hospitals</Link>
                </Button>
              </CardContent>
            </Card>
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
              The principles that guide our commitment to healthcare excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-medical-blue text-white rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-medical-blue">Trust</h3>
              <p className="text-gray-600">
                Building lasting relationships through reliability and transparency in every interaction.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-medical-red text-white rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Heart className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-medical-red">Quality</h3>
              <p className="text-gray-600">
                Ensuring only the highest quality medical equipment reaches healthcare providers.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Briefcase className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-green-600">Commitment</h3>
              <p className="text-gray-600">
                Dedicated to supporting healthcare professionals with reliable supply and service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-medical-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Connect with Vedanta Healthcare for your medical equipment needs
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
