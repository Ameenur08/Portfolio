import { useEffect } from 'react';

const SEO = ({ 
  title = "Ameenur Rahman Khan - DevOps Engineer & Full-Stack Developer",
  description = "Experienced DevOps Engineer specializing in Azure DevOps, CI/CD pipelines, and cloud infrastructure. Full-stack developer with expertise in React, Node.js, and modern web technologies.",
  keywords = "DevOps Engineer, Azure DevOps, CI/CD, Full-Stack Developer, React, Node.js, Cloud Infrastructure, Columbus OH",
  author = "Ameenur Rahman Khan",
  url = "https://ameenur-rahman-khan.dev"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name, content) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updatePropertyTag = (property, content) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    updateMetaTag('robots', 'index, follow');

    // Open Graph tags
    updatePropertyTag('og:title', title);
    updatePropertyTag('og:description', description);
    updatePropertyTag('og:type', 'website');
    updatePropertyTag('og:url', url);
    updatePropertyTag('og:site_name', 'Ameenur Rahman Khan Portfolio');

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);

    // Structured data for better SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Ameenur Rahman Khan",
      "jobTitle": "DevOps Engineer",
      "description": description,
      "url": url,
      "sameAs": [
        "https://linkedin.com/in/ameenur-rahman-khan",
        "https://github.com/ameenur-rahman-khan"
      ],
      "knowsAbout": [
        "DevOps",
        "Azure DevOps",
        "CI/CD",
        "Full-Stack Development",
        "React",
        "Node.js",
        "Cloud Infrastructure"
      ]
    };

    let scriptElement = document.querySelector('script[type="application/ld+json"]');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, author, url]);

  return null; // This component doesn't render anything
};

export default SEO;