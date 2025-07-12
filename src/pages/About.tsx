import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Target, Building, Handshake } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">About Vedanta Healthcare</h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto px-2">
              Founded in 2012 by Mr. Vishnudas Pawar, we are Mumbai's premier distributor of 
              world-class medical equipment, committed to enhancing healthcare delivery across leading hospitals.
            </p>
          </div>
        </div>
      </section>

      {/* Founder & Company Story */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-100 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="relative bg-gradient-to-tr from-blue-600/90 to-blue-400/80 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 pt-24 sm:pt-28 lg:pt-32 fade-in flex flex-col items-center">
            {/* Overlapping Circular Image - larger */}
            <div className="absolute -top-16 sm:-top-20 lg:-top-28 left-1/2 -translate-x-1/2 z-10">
              <img
                src="/lovable-uploads/about2.jpg"
                alt="Mr. Vishnudas Pawar - Founder"
                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 rounded-full border-4 border-white shadow-xl object-cover ring-4 ring-blue-600 animate-fade-in"
                style={{ animationDelay: '0.2s' }}
              />
            </div>
            <div className="mt-20 sm:mt-24 lg:mt-36 text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 drop-shadow">Our Foundation Story</h2>
              <p className="text-base sm:text-lg lg:text-xl text-blue-50 mb-4 sm:mb-6">
                Vedanta Healthcare was founded in 2012 by <strong>Mr. Vishnudas Pawar</strong>,
                who brought with him 16 years of invaluable experience in the healthcare industry.
                His vision was to create a customer-focused, sales-driven channel partner that would
                bridge the gap between innovative medical technology and healthcare providers.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-blue-50 mb-4 sm:mb-6">
                Over the years, we have established strategic channel partnerships with some of the
                world's most respected healthcare companies, including Johnson & Johnson (Biosense Webster), Cordis, Coloplast, SHI Mediwere, and Medline Healthcare.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-blue-50 mb-6 sm:mb-8">
                Today, our team consists of dynamic entrepreneurs with over 12 years of specialized
                experience in pharmaceuticals, critical care, wound care, coronary angioplasty,
                and various other medical specialties.
              </p>
              <div className="flex flex-col items-center mt-6 sm:mt-8 lg:mt-10">
                <span className="text-xl sm:text-2xl lg:text-3xl font-signature text-white drop-shadow-lg">Vishnudas Pawar</span>
                <span className="text-blue-100 text-sm sm:text-base mt-2">Founder & Director</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="slide-up hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                  <Target className="h-8 w-8 sm:h-10 sm:w-10" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-600">Our Mission</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  To be a customer-focused, sales-driven channel partner offering exceptional service 
                  and innovative solutions for companies dedicated to enhancing patient well-being.
                </p>
              </CardContent>
            </Card>

            <Card className="slide-up hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                  <Heart className="h-8 w-8 sm:h-10 sm:w-10" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-600">Our Vision</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  To be a sales-oriented, customer-centric service provider for companies 
                  that value patient wellbeing above all else.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Partnerships */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Strategic Channel Partnerships
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-2">
              Channel partnerships with world-renowned healthcare companies
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="flex flex-col items-center mb-3 sm:mb-4">
                  <img
                    src="/lovable-uploads/Johnson-Johnson logo.jpg"
                    alt="Johnson & Johnson Logo"
                    style={{ maxHeight: '60px', objectFit: 'contain', background: '#fff', borderRadius: '10px', boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}
                    className="mx-auto mb-3 sm:mb-4 w-full max-w-[120px]"
                  />
                  <h3 className="text-sm sm:text-base font-semibold mb-1">Johnson & Johnson</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Biosense Webster</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="flex flex-col items-center mb-3 sm:mb-4">
                  <img
                    src="/lovable-uploads/cordis-logo-black.jpg"
                    alt="Cordis Logo"
                    style={{ maxHeight: '60px', objectFit: 'contain', background: '#fff', borderRadius: '10px', boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}
                    className="mx-auto mb-3 sm:mb-4 w-full max-w-[120px]"
                  />
                  <h3 className="text-sm sm:text-base font-semibold mb-1">Cordis</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Cardiovascular Solutions</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="flex flex-col items-center mb-3 sm:mb-4">
                  <img
                    src="/lovable-uploads/coloplast-logo.png"
                    alt="Coloplast Logo"
                    style={{ maxHeight: '60px', objectFit: 'contain', background: '#fff', borderRadius: '10px', boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}
                    className="mx-auto mb-3 sm:mb-4 w-full max-w-[120px]"
                  />
                  <h3 className="text-sm sm:text-base font-semibold mb-1">Coloplast</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Ostomy, Urology</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="flex flex-col items-center mb-3 sm:mb-4">
                  <img
                    src="/lovable-uploads/Medline-logo.png"
                    alt="Medline Logo"
                    style={{ maxHeight: '60px', objectFit: 'contain', background: '#fff', borderRadius: '10px', boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}
                    className="mx-auto mb-3 sm:mb-4 w-full max-w-[120px]"
                  />
                  <h3 className="text-sm sm:text-base font-semibold mb-1">Medline Healthcare</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Healthcare Products & Supplies</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Integrity | Patient-Centered | Quality-First
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="slide-up hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                  <Users className="h-8 w-8 sm:h-10 sm:w-10" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-600">Integrity</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  We build lasting relationships through honesty, transparency, and ethical business 
                  practices in every interaction with our partners and clients.
                </p>
              </CardContent>
            </Card>

            <Card className="slide-up hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                  <Heart className="h-8 w-8 sm:h-10 sm:w-10" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-600">Patient-Centered</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Every decision we make is guided by what's best for patient outcomes, ensuring 
                  healthcare providers have the tools they need for superior care.
                </p>
              </CardContent>
            </Card>

            <Card className="slide-up hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                  <Award className="h-8 w-8 sm:h-10 sm:w-10" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-green-600">Quality-First</h3>
                <p className="text-sm sm:text-base text-gray-600">
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
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <span className="text-2xl font-bold text-blue-600">💊</span>
              <h3 className="font-semibold mb-2">Pharmaceuticals</h3>
              <p className="text-gray-600 text-sm">Specialized pharmaceutical distribution</p>
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
      <section className="py-16 bg-blue-600 text-white">
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
