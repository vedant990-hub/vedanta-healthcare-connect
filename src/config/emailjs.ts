// EmailJS Configuration
// Replace these values with your actual EmailJS credentials
// For production, use environment variables (see EMAIL_SETUP.md)

export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_cfe5jvl',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_hr7hs2i', 
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'JmU2tcRay2qiAs2-7',
  TO_EMAIL: import.meta.env.VITE_TO_EMAIL || 'Vedanta1812@gmail.com' // Replace with your email address
};

// EmailJS initialization
export const initializeEmailJS = () => {
  // Initialize EmailJS with your public key
  // This is optional but recommended for better performance
  // emailjs.init(PUBLIC_KEY);
}; 