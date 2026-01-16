
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Clock, Phone, Mail, Heart, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useGA4 } from "@/hooks/use-ga4";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailjs';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { trackFormSubmission, trackButtonClick } = useGA4();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track form submission attempt
    trackFormSubmission('contact_form', {
      form_type: 'inquiry',
      has_name: !!formData.name,
      has_email: !!formData.email,
      has_phone: !!formData.phone,
      has_message: !!formData.message
    });
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        message: formData.message,
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID, 
        EMAILJS_CONFIG.TEMPLATE_ID, 
        templateParams, 
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours."
      });

      // Track successful form submission
      trackFormSubmission('contact_form_success', {
        form_type: 'inquiry',
        has_phone: !!formData.phone
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });

    } catch (error) {
      console.error('Email sending failed:', error);
      
      // Track failed form submission
      trackFormSubmission('contact_form_error', {
        form_type: 'inquiry',
        error_type: 'email_send_failed'
      });
      
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medical-blue to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to partner with Mumbai's trusted medical equipment distributor? 
              Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="fade-in">
              <Card className="shadow-lg">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 py-2 sm:py-3"
                      onClick={() => trackButtonClick('contact_submit_button', { page: 'contact' })}
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="fade-in-delay space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Whether you're looking for specific medical equipment, need pricing information, 
                  or want to establish a partnership, our team is here to help.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-medical-blue/10 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-medical-blue" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Location</h3>
                        <p className="text-gray-600">
                          Office No 1, Pragnya Premises Society,<br />
                          6V23+RR6, Akurli Rd, Kandivali,<br />
                          Govind Dalvi Nagar, Kandivali East,<br />
                          Mumbai, Maharashtra 400101
                        </p>
                      </div>
                    </div>
                    {/* Google Maps Embed */}
                    <div className="mt-4 rounded-lg overflow-hidden shadow-lg">
                      <iframe
                        title="Vedanta Healthcare Office Map"
                        src="https://www.google.com/maps?q=Pragnya+Premises+Society,+6V23%2BRR6,+Akurli+Rd,+Kandivali,+Govind+Dalvi+Nagar,+Kandivali+East,+Mumbai,+Maharashtra+400101&output=embed"
                        width="100%"
                        height="220"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-medical-red/10 p-3 rounded-lg">
                        <Phone className="h-6 w-6 text-medical-red" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Number</h3>
                        <p className="text-gray-600">
                          <a href="tel:091672 14295" className="hover:text-medical-blue transition-colors">
                            091672 14295
                          </a>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-500/10 p-3 rounded-lg">
                        <Clock className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Working Hours</h3>
                        <div className="text-gray-600">
                          <p>Monday – Saturday: 9:30 AM – 6:00 PM</p>
                          <p>Sunday: Closed</p>
                          <p className="text-sm text-medical-red mt-2">Emergency support available 24/7</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-500/10 p-3 rounded-lg">
                        <Heart className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Commitment</h3>
                        <div className="text-gray-600">
                          <p>• Quick response times</p>
                          <p>• Personalized service</p>
                          <p>• Emergency support availability</p>
                          <p className="text-sm mt-2">Your success is our priority</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us in Mumbai</h2>
            <p className="text-lg text-gray-600">
              Strategically located in Kandivali East to serve healthcare institutions across Mumbai
            </p>
          </div>
          
          <Card className="overflow-hidden">
            <div className="relative">
              <iframe
                src="https://www.google.com/maps?q=Pragnya+Premises+Society,+6V23%2BRR6,+Akurli+Rd,+Kandivali,+Govind+Dalvi+Nagar,+Kandivali+East,+Mumbai,+Maharashtra+400101&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-medical-blue/20 to-transparent pointer-events-none">
                <div className="flex items-center justify-start h-full p-8">
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-sm">
                    <div className="flex items-center space-x-3 mb-4">
                      <MapPin className="h-6 w-6 text-medical-blue" />
                      <h3 className="font-semibold text-gray-900">Vedanta Healthcare</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      Office No 1, Pragnya Premises Society,<br />
                      6V23+RR6, Akurli Rd, Kandivali,<br />
                      Govind Dalvi Nagar, Kandivali East,<br />
                      Mumbai, Maharashtra 400101
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
