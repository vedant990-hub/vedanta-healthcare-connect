import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Scissors, Package, Activity, Stethoscope, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const Products = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const productSlides = [
    {
      image: "/lovable-uploads/DEB-Drug Elluting Ballon.jpg",
      title: "DEB - Drug Eluting Balloon",
      description: "Advanced cardiovascular solutions for interventional procedures",
      category: "Cardiovascular Products"
    },
    {
      image: "/lovable-uploads/RAILWAY-Sheathless.gif",
      title: "Railway Sheathless",
      description: "Innovative sheathless technology for vascular access",
      category: "Cardiovascular Products"
    },
    {
      image: "/lovable-uploads/guiding cath.jpg",
      title: "Guiding Catheter",
      description: "Precision guiding catheters for interventional procedures",
      category: "Cardiovascular Products"
    },
    {
      image: "/lovable-uploads/cordis-avanti-sheath-introducer.jpg",
      title: "Cordis Avanti Sheath Introducer",
      description: "Advanced sheath introducer system for vascular access",
      category: "Cardiovascular Products"
    },
    {
      image: "/lovable-uploads/Rain.png",
      title: "Rain Sheath",
      description: "Innovative sheath technology for vascular procedures",
      category: "Cardiovascular Products"
    },
    {
      image: "/lovable-uploads/coloplast-bag.webp",
      title: "Coloplast Bag",
      description: "High-quality ostomy and continence care products",
      category: "Specialty Products"
    },
    {
      image: "/lovable-uploads/Coloplast-all.webp",
      title: "Coloplast All Products",
      description: "Comprehensive range of Coloplast medical solutions",
      category: "Specialty Products"
    },
    {
      image: "/lovable-uploads/all2.avif",
      title: "All Products Collection",
      description: "Complete range of medical products and solutions",
      category: "All Products"
    },
    {
      image: "/lovable-uploads/biosense-webster.jpg",
      title: "Biosense Webster",
      description: "Advanced electrophysiology and cardiac mapping solutions",
      category: "Cardiovascular Products"
    },
    {
      image: "/lovable-uploads/decca.jpg",
      title: "Decca Polar Catheters",
      description: "Specialized polar catheter solutions for cardiac procedures",
      category: "Specialty Products"
    },
    {
      image: "/lovable-uploads/3d.jpg",
      title: "3D Medical Imaging",
      description: "Advanced 3D imaging and visualization solutions",
      category: "Specialty Products"
    },
    {
      image: "/lovable-uploads/ot.jpg",
      title: "Operating Theater Solutions",
      description: "Complete operating theater and surgical equipment",
      category: "Surgical Supplies"
    },
    {
      image: "/lovable-uploads/ambi.jpg_large",
      title: "Ambi Medical Solutions",
      description: "Innovative medical devices and healthcare solutions",
      category: "Specialty Products"
    },
    {
      image: "/lovable-uploads/infiniti.jpg",
      title: "Infiniti Medical Solutions",
      description: "Cutting-edge technology for advanced healthcare needs",
      category: "Specialty Products"
    }
    // Add more slides here as you upload more product images
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % productSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + productSlides.length) % productSlides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(timer);
  }, [currentSlide]);

  const productCategories = [
    {
      title: "Cardiovascular Products",
      icon: Heart,
      color: "bg-red-500",
      description: "Complete range of interventional cardiology devices and accessories",
      products: [
        "Sheaths - Vascular access solutions",
        "Wires - Guide wires for various procedures", 
        "Catheters - Diagnostic and therapeutic catheters",
        "PTCA Wires - Percutaneous transluminal coronary angioplasty wires",
        "Balloons - Angioplasty and specialty balloons",
        "DEB - Drug Eluting Ballons"
      ]
    },
    {
      title: "Surgical Supplies",
      icon: Shield,
      color: "bg-blue-500", 
      description: "High-quality surgical apparel and protective equipment",
      products: [
        "Gowns - Sterile and non-sterile surgical gowns",
        "Masks - Surgical and N95 respiratory masks",
        "Head/Footwear - Surgical caps, bouffants, and shoe covers",
        "Equipment Covers - Protective covers for medical equipment"
      ]
    },
    {
      title: "Specialty Drapes",
      icon: Scissors,
      color: "bg-green-500",
      description: "Specialized surgical drapes for various medical procedures",
      products: [
        "General - Standard surgical draping solutions",
        "Gynecology - Specialized drapes for gynecological procedures",
        "Orthopaedics - Orthopedic surgery draping systems",
        "Cardiology - Cardiac and vascular procedure drapes",
        "Neurosurgery - Precision drapes for neurological procedures",
        "Urology - Urological procedure-specific draping",
        "Transplants - Specialized drapes for transplant surgeries"
      ]
    },
    {
      title: "Specialty Products",
      icon: Package,
      color: "bg-purple-500",
      description: "Specialized medical products for specific patient needs",
      products: [
        "Ablation Catheters",
        "Decca polar Catheters", 
        "Quadra Polar Catheters",
        "Helo Catheters",
        "Laso Catheters",
        "Pentaray Catheters",

        
      ]
    }
  ];

  const brands = [
    {
      name: "Johnson & Johnson",
      color: "bg-red-600"
    },
    {
      name: "Cordis",
      color: "bg-orange-600"
    },
    {
      name: "Coloplast",
      color: "bg-blue-600"
    },
    {
      name: "SHI Mediwere",
      color: "bg-green-600"
    },
    {
      name: "Medline Healthcare",
      color: "bg-purple-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medical-blue to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Product Portfolio</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive range of high-quality medical products from world-renowned manufacturers, 
              serving Mumbai's leading hospitals with excellence since 2012.
            </p>
          </div>
        </div>
      </section>

      {/* Product Slideshow */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative">
            <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl bg-blue-50">
              {/* Watermark */}
              <span
                className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
                aria-hidden="true"
                style={{ zIndex: 1 }}
              >
                <span className="text-green-400 text-5xl md:text-7xl lg:text-8xl font-extrabold opacity-10 whitespace-nowrap">
                  Vedanta Healthcare
                </span>
              </span>
              <img
                src={productSlides[currentSlide].image}
                alt={productSlides[currentSlide].title}
                className="w-full h-full object-contain bg-white transition-all duration-500 ease-in-out relative z-10"
              />
              

              
              {/* Navigation arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 backdrop-blur-sm text-white hover:bg-black/80 transition-all duration-300 shadow-lg"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 backdrop-blur-sm text-white hover:bg-black/80 transition-all duration-300 shadow-lg"
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            
            {/* Slide indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {productSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-medical-blue' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            {/* Next Button */}
            <div className="flex justify-center mt-4">
              <button
                onClick={nextSlide}
                className="px-6 py-2 bg-green-600 text-white font-semibold rounded-full shadow hover:bg-green-700 transition-all duration-200"
              >
                Next
              </button>
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
            <p className="text-lg text-gray-600">
              Specialized medical solutions across multiple healthcare domains
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {productCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={category.title} className="slide-up hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`${category.color} text-white p-4 rounded-lg flex-shrink-0`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                        <p className="text-gray-600 mb-4">{category.description}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {category.products.map((product, productIndex) => (
                        <li key={productIndex} className="flex items-start">
                          <Activity className="h-4 w-4 text-medical-blue mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{product}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Channel Partners */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Trusted Channel Partners
            </h2>
            <p className="text-lg text-gray-600">
              Channel partnerships with leading global healthcare companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <Card key={brand.name} className="slide-up hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`${brand.color} text-white p-3 rounded-lg`}>
                      <Stethoscope className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{brand.name}</h3>
                  </div>
                  <div className="space-y-2">
                    {/* Removed divisions as per edit hint */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality & Service Guarantee
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every product in our portfolio meets international quality standards and is backed 
              by our commitment to exceptional service and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-medical-blue text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl font-bold">✓</span>
              </div>
              <h3 className="font-semibold mb-2">Authentic Products</h3>
              <p className="text-gray-600 text-sm">Direct partnerships ensure 100% authentic medical products</p>
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
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">Efficient supply chain for timely product delivery</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 text-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl font-bold">24/7</span>
              </div>
              <h3 className="font-semibold mb-2">Customer Support</h3>
              <p className="text-gray-600 text-sm">Round-the-clock support for all your medical equipment needs</p>
            </div>
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
            Contact Vedanta Healthcare for detailed product information, pricing, and availability. 
            Our experienced team is ready to assist with your medical equipment requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Request Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-medical-blue border-medical-blue">
              <a href="mailto:Vedanta1812@gmail.com" className="font-semibold">Email: Vedanta1812@gmail.com</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
