import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Briefcase, MapPin, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  
  const slides = [
    "/lovable-uploads/srilanka.png",
    "/lovable-uploads/group-photo.jpg",
    "/lovable-uploads/solo.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        if (direction === 1 && prev === slides.length - 1) {
          setDirection(-1);
          return prev - 1;
        } else if (direction === -1 && prev === 0) {
          setDirection(1);
          return prev + 1;
        } else {
          return prev + direction;
        }
      });
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length, direction]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slideshow */}
      <section className="relative h-screen overflow-hidden">
        {/* Slideshow Background */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide}
                alt={`Vedanta Healthcare ${index + 1}`}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                onError={(e) => {
                  console.log(`Failed to load image ${index + 1}:`, slide);
                }}
                onLoad={() => {
                  console.log(`Successfully loaded image ${index + 1}:`, slide);
                }}
              />
            </div>
          ))}
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-end justify-center h-full px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white max-w-4xl mx-auto mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-in leading-tight">
              VEDANTA HEALTHCARE
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto fade-in-delay leading-relaxed">
              Mumbai's trusted distributor of global medical brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-delay">
              <Button size="lg" variant="secondary" asChild className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                <Link to="/products">View Our Products</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-medical-blue border-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4" 
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-blue-50 border-b border-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-delay">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Healthcare Partner in Mumbai
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Vedanta Healthcare is a leading distributor of premium diagnostic and medical equipment in Mumbai. 
            We partner with globally trusted brands such as Cordis, Coloplast, and Johnson & Johnson to supply high-quality medical products to major hospitals across the city. 
            Our commitment to excellence ensures that healthcare providers have access to advanced medical technology to deliver superior patient care.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 bg-blue-50 border-b border-black/20">
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
      <section className="py-16 bg-blue-50">
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
    </div>
  );
};

export default Index;
