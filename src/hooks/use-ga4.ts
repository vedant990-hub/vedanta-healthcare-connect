import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Declare gtag function on window object
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

const GA_TRACKING_ID = 'G-8R0ZY0Q9T9';

// Check if we're in production mode
const isProduction = import.meta.env.PROD;

export const useGA4 = () => {
  const location = useLocation();

  // Track page views
  useEffect(() => {
    if (isProduction && window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);

  // Custom event tracking function
  const trackEvent = (
    eventName: string,
    parameters?: Record<string, any>
  ) => {
    if (isProduction && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  // Track button clicks
  const trackButtonClick = (buttonName: string, parameters?: Record<string, any>) => {
    trackEvent('button_click', {
      button_name: buttonName,
      ...parameters,
    });
  };

  // Track form submissions
  const trackFormSubmission = (formName: string, parameters?: Record<string, any>) => {
    trackEvent('form_submit', {
      form_name: formName,
      ...parameters,
    });
  };

  // Track external link clicks
  const trackExternalLink = (url: string, linkText?: string) => {
    trackEvent('external_link_click', {
      link_url: url,
      link_text: linkText,
    });
  };

  return {
    trackEvent,
    trackButtonClick,
    trackFormSubmission,
    trackExternalLink,
  };
}; 