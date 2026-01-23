import { useEffect } from 'react';

// Replace 'G-XXXXXXXXXX' with your Google Analytics Measurement ID
// Get this from: https://analytics.google.com/ → Admin → Data Streams → Your stream → Measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

export default function GoogleAnalytics() {
  useEffect(() => {
    // Only initialize if ID is set
    if (typeof window !== 'undefined' && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      // Load gtag script
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script1);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args) {
        window.dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID, {
        page_path: window.location.pathname,
      });

      window.gtag = gtag;
    }
  }, []);

  return null;
}
