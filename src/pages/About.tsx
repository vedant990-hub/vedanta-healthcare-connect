
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Target, Building, Handshake } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medical-blue to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Vedanta Healthcare</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Founded in 2012 by Mr. Vishnudas Pawar, we are Mumbai's premier distributor of 
              world-class medical equipment, committed to enhancing healthcare delivery across leading hospitals.
            </p>
          </div>
        </div>
      </section>

      {/* Founder & Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Foundation Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Vedanta Healthcare was founded in 2012 by <strong>Mr. Vishnudas Pawar</strong>, 
                who brought with him 16 years of invaluable experience in the healthcare industry. 
                His vision was to create a customer-focused, sales-driven channel partner that would 
                bridge the gap between innovative medical technology and healthcare providers.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we have established strategic channel partnerships with some of the 
                world's most respected healthcare companies, including Johnson & Johnson (Cordis, 
                Ethicon Bio-Surgery, Biosense Webster), Coloplast, SHI Mediwere, and Medline Healthcare.
              </p>
              <p className="text-lg text-gray-600">
                Today, our team consists of dynamic entrepreneurs with over 12 years of specialized 
                experience in pharmaceuticals, critical care, wound care, coronary angioplasty, 
                and various other medical specialties.
              </p>
            </div>
            <div className="fade-in-delay">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="bg-medical-blue/10 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Building className="h-8 w-8 text-medical-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4">Founded in 2012</h3>
                  <p className="text-gray-600 text-center">
                    By Mr. Vishnudas Pawar with 16+ years of healthcare industry experience, 
                    establishing a foundation built on expertise and dedication to healthcare excellence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="slide-up hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-medical-red text-white rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Target className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-medical-red">Our Mission</h3>
                <p className="text-gray-600">
                  To be a customer-focused, sales-driven channel partner offering exceptional service 
                  and innovative solutions for companies dedicated to enhancing patient well-being.
                </p>
              </CardContent>
            </Card>

            <Card className="slide-up hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="bg-medical-blue text-white rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Heart className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-medical-blue">Our Vision</h3>
                <p className="text-gray-600">
                  To be a sales-oriented, customer-centric service provider for companies 
                  that value patient wellbeing above all else.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Partnerships */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Strategic Partnerships
            </h2>
            <p className="text-lg text-gray-600">
              Channel partnerships with world-renowned healthcare companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Handshake className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2">Johnson & Johnson</h3>
                <p className="text-gray-600 text-sm">Cordis, Ethicon Bio-Surgery, Biosense Webster</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Handshake className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Coloplast</h3>
                <p className="text-gray-600 text-sm">Ostomy, Urology & Wound Care</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Handshake className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">SHI Mediwere</h3>
                <p className="text-gray-600 text-sm">Medical Equipment Solutions</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Handshake className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Medline Healthcare</h3>
                <p className="text-gray-600 text-sm">Healthcare Products & Supplies</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              Integrity | Patient-Centered | Quality-First
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="slide-up hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-medical-blue text-white rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-medical-blue">Integrity</h3>
                <p className="text-gray-600">
                  We build lasting relationships through honesty, transparency, and ethical business 
                  practices in every interaction with our partners and clients.
                </p>
              </CardContent>
            </Card>

            <Card className="slide-up hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 text-center">
                <div className="bg-medical-red text-white rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Heart className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-medical-red">Patient-Centered</h3>
                <p className="text-gray-600">
                  Every decision we make is guided by what's best for patient outcomes, ensuring 
                  healthcare providers have the tools they need for superior care.
                </p>
              </CardContent>
            </Card>

            <Card className="slide-up hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-8 text-center">
                <div className="bg-green-600 text-white rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Award className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">Quality-First</h3>
                <p className="text-gray-600">
                  We never compromise on quality, ensuring that only the highest standard medical 
                  equipment and solutions reach healthcare professionals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expert Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team consists of dynamic entrepreneurs with over 12 years of specialized experience 
              across multiple healthcare domains, bringing deep expertise to serve our clients better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-medical-blue">💊</span>
              </div>
              <h3 className="font-semibold mb-2">Pharmaceuticals</h3>
              <p className="text-gray-600 text-sm">Comprehensive knowledge of pharmaceutical products and regulations</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-medical-red">🏥</span>
              </div>
              <h3 className="font-semibold mb-2">Critical Care</h3>
              <p className="text-gray-600 text-sm">Expertise in life-saving critical care equipment and solutions</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">🩹</span>
              </div>
              <h3 className="font-semibold mb-2">Wound Care</h3>
              <p className="text-gray-600 text-sm">Advanced wound management and healing solutions</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">❤️</span>
              </div>
              <h3 className="font-semibold mb-2">Coronary Angioplasty</h3>
              <p className="text-gray-600 text-sm">Specialized in cardiovascular intervention equipment</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-yellow-600">🔬</span>
              </div>
              <h3 className="font-semibold mb-2">Medical Specialties</h3>
              <p className="text-gray-600 text-sm">Broad expertise across various medical specializations</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-indigo-600">12+</span>
              </div>
              <h3 className="font-semibold mb-2">Years of Experience</h3>
              <p className="text-gray-600 text-sm">Over a decade of healthcare industry expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-16 bg-medical-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Philosophy of Care</h2>
            <blockquote className="text-xl md:text-2xl italic mb-8 text-blue-100">
              "We believe that exceptional healthcare begins with exceptional partnerships. 
              Our commitment to integrity, patient-centered solutions, and quality-first 
              approach ensures that every product we deliver contributes to better patient 
              outcomes and enhanced healthcare delivery."
            </blockquote>
            <p className="text-lg text-blue-200">
              — The Vedanta Healthcare Team
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
