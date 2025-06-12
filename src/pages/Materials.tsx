
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Briefcase, User, Clock } from "lucide-react";

const Materials = () => {
  const categories = [
    {
      title: "Cardiovascular Equipment",
      items: [
        "Drug-Eluting Stents",
        "Balloon Catheters",
        "Guide Wires",
        "Vascular Closure Devices",
        "Angioplasty Balloons",
        "Peripheral Stents"
      ],
      icon: Heart,
      color: "bg-red-500"
    },
    {
      title: "Surgical Instruments",
      items: [
        "Surgical Kits",
        "Laparoscopic Instruments",
        "Electrosurgical Devices",
        "Wound Closure Products",
        "Surgical Staplers",
        "Disposable Instruments"
      ],
      icon: Briefcase,
      color: "bg-blue-500"
    },
    {
      title: "Ostomy & Urology Care",
      items: [
        "Ostomy Bags",
        "Ostomy Accessories",
        "Urological Catheters",
        "Drainage Bags",
        "Skin Barriers",
        "Adhesive Remover"
      ],
      icon: User,
      color: "bg-green-500"
    },
    {
      title: "Diagnostic Equipment",
      items: [
        "Blood Glucose Monitors",
        "Diagnostic Test Strips",
        "Blood Pressure Monitors",
        "Thermometers",
        "Pulse Oximeters",
        "ECG Machines"
      ],
      icon: Clock,
      color: "bg-purple-500"
    }
  ];

  const features = [
    {
      title: "Ready Inventory",
      description: "Comprehensive stock of essential medical supplies available for immediate delivery."
    },
    {
      title: "Genuine Sourcing",
      description: "Direct partnerships with manufacturers ensure authentic products and competitive pricing."
    },
    {
      title: "Quick Delivery",
      description: "Efficient logistics network across Mumbai for prompt delivery to your facility."
    },
    {
      title: "Technical Support",
      description: "Expert guidance on product selection and usage from our experienced team."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medical-blue to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Materials & Equipment</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive range of medical materials and equipment to support 
              every aspect of healthcare delivery in Mumbai's leading hospitals.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-medical-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Complete Medical Supply Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From life-saving cardiovascular devices to essential diagnostic equipment, 
              Vedanta Healthcare maintains a comprehensive inventory of medical materials 
              and equipment. Our focus on quality, genuine sourcing, and ready availability 
              ensures healthcare providers have the tools they need when they need them.
            </p>
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
              Organized by specialty to serve diverse healthcare needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Card key={category.title} className="slide-up hover:shadow-lg transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`${category.color} p-3 rounded-lg mr-4`}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.items.map((item) => (
                      <div key={item} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-medical-blue rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Supply Chain?
            </h2>
            <p className="text-lg text-gray-600">
              Quality, reliability, and service that healthcare professionals trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={feature.title} className="text-center">
                <div className="bg-medical-blue text-white rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 bg-medical-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quality Standards & Certifications
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-12">
              All our medical materials and equipment meet international quality standards 
              and regulatory requirements, ensuring safety and efficacy in clinical use.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">ISO Certified</h3>
                  <p className="text-blue-100">
                    All products meet international quality management standards
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">FDA Approved</h3>
                  <p className="text-blue-100">
                    Products comply with FDA safety and effectiveness requirements
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">CE Marked</h3>
                  <p className="text-blue-100">
                    European conformity marking ensures product safety and quality
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

export default Materials;
