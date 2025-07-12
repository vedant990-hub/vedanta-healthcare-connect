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
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Our Products</h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto px-2">
              Comprehensive range of diagnostic and surgical equipment from trusted global brands
              serving Mumbai's leading hospitals with excellence since 2012.
            </p>
          </div>
        </div>
      </section>

      {/* Product Carousel */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Discover our premium selection of medical equipment and supplies
            </p>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {productSlides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="relative h-64 sm:h-80 md:h-96">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          console.log(`Failed to load product image ${index + 1}:`, slide.image);
                        }}
                      />
                      <div className="absolute inset-0 bg-black/40"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                        <div className="text-xs sm:text-sm font-medium text-blue-200 mb-1">{slide.category}</div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{slide.title}</h3>
                        <p className="text-sm sm:text-base text-gray-200">{slide.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
              aria-label="Previous product"
            >
              <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
              aria-label="Next product"
            >
              <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
              {productSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Go to product ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Explore our comprehensive range of medical products and solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {productCategories.map((category, index) => (
              <Card key={category.title} className="slide-up hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`${category.color} text-white p-3 sm:p-4 rounded-lg flex-shrink-0`}>
                      <category.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{category.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{category.description}</p>
                      <ul className="space-y-1 sm:space-y-2">
                        {category.products.map((product, productIndex) => (
                          <li key={productIndex} className="text-sm sm:text-base text-gray-700 flex items-center">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
                            {product}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Trusted Brands
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Authorized distributor for leading global medical brands
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
            {brands.map((brand, index) => (
              <Card key={brand.name} className="slide-up hover:shadow-lg transition-shadow duration-300 text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-4 sm:p-6">
                  <div className={`${brand.color} text-white rounded-lg p-3 sm:p-4 mb-3 sm:mb-4`}>
                    <Activity className="h-6 w-6 sm:h-8 sm:w-8 mx-auto" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">{brand.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
            Contact us today to learn more about our products and how we can support your healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-blue-600 border-white w-full sm:w-auto" asChild>
              <Link to="/hospitals">View Our Partners</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
