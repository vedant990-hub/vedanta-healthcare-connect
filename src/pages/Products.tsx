
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Briefcase, User } from "lucide-react";

const Products = () => {
  const brands = [
    {
      name: "Cordis",
      specialty: "Cardiovascular & Endovascular Devices",
      description: "Leading provider of interventional cardiology and endovascular products, helping physicians treat patients with cardiovascular disease.",
      products: [
        "Drug-Eluting Stents",
        "Balloon Catheters",
        "Guide Wires",
        "Vascular Closure Devices",
        "Peripheral Stents"
      ],
      icon: Heart,
      color: "bg-red-500"
    },
    {
      name: "Coloplast",
      specialty: "Ostomy, Urology & Wound Care",
      description: "Global leader in ostomy care, continence care, and wound & skin care products that make life easier for people with intimate healthcare needs.",
      products: [
        "Ostomy Bags & Accessories",
        "Urological Catheters",
        "Wound Dressings",
        "Skin Barriers",
        "Continence Care Products"
      ],
      icon: User,
      color: "bg-blue-500"
    },
    {
      name: "Johnson & Johnson",
      specialty: "Diagnostics & Surgical Tools",
      description: "Comprehensive range of medical devices, diagnostics, and surgical instruments trusted by healthcare professionals worldwide.",
      products: [
        "Surgical Instruments",
        "Diagnostic Equipment",
        "Wound Closure Products",
        "Orthopedic Devices",
        "Vision Care Products"
      ],
      icon: Briefcase,
      color: "bg-green-500"
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
              Premium medical equipment and devices from world-renowned brands, 
              carefully selected to meet the highest standards of healthcare excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-16 bg-medical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted Global Brands
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are proud authorized distributors for leading medical device manufacturers, 
              ensuring authentic products and reliable supply chains for Mumbai's healthcare institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {brands.map((brand, index) => (
              <Card key={brand.name} className={`slide-up hover:shadow-xl transition-all duration-300 overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="lg:flex">
                  <div className="lg:w-1/3">
                    <div className={`${brand.color} h-64 lg:h-full flex items-center justify-center`}>
                      <div className="text-center text-white">
                        <brand.icon className="h-16 w-16 mx-auto mb-4" />
                        <h3 className="text-3xl font-bold">{brand.name}</h3>
                        <p className="text-lg opacity-90 mt-2">{brand.specialty}</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <CardContent className="p-8 lg:p-12">
                      <CardHeader className="p-0 mb-6">
                        <CardTitle className="text-2xl font-bold text-gray-900">
                          {brand.specialty}
                        </CardTitle>
                      </CardHeader>
                      <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                        {brand.description}
                      </p>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Products:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {brand.products.map((product) => (
                            <div key={product} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-medical-blue rounded-full"></div>
                              <span className="text-gray-700">{product}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality Assurance
            </h2>
            <p className="text-lg text-gray-600">
              Our commitment to excellence in every product we distribute
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-medical-blue text-white rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Authentic Products</h3>
              <p className="text-gray-600">
                All products are sourced directly from manufacturers, ensuring 100% authenticity and quality.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-medical-red text-white rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Briefcase className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Proper Storage</h3>
              <p className="text-gray-600">
                Temperature-controlled storage facilities maintain product integrity from warehouse to delivery.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <User className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Handling</h3>
              <p className="text-gray-600">
                Trained professionals handle all products with the care and expertise they deserve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
