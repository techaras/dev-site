export const getPersonStructuredData = () => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Stavros Symeonidis",
    "url": "https://www.stavrossymeonidis.dev",
    "image": "https://www.stavrossymeonidis.dev/profile-dev.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/stav-symeonidis/",
      "https://github.com/techaras"
    ],
    "jobTitle": "Full-Stack Developer & CTO",
    "worksFor": {
      "@type": "Organization",
      "name": "Independent Consultant"
    },
    "description": "Patent-winning full-stack developer specializing in AI automation and enterprise solutions",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "AI Forge"
    },
    "award": [
      "AI Patent Winner 2023 - IP Hatch",
      "AI Forge Cohort 5 Alumnus",
      "Sky Labs Finalist 2022"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Full-Stack Development",
      "React",
      "TypeScript",
      "Python",
      "Enterprise Architecture"
    ]
  });
  
  export const getWebSiteStructuredData = () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Stavros Symeonidis Portfolio",
    "url": "https://www.stavrossymeonidis.dev",
    "description": "Portfolio of Stavros Symeonidis - Patent-winning full-stack developer",
    "publisher": {
      "@type": "Person",
      "name": "Stavros Symeonidis"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.stavrossymeonidis.dev/?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  });
  
  export const getServiceStructuredData = () => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Software Development",
    "provider": {
      "@type": "Person",
      "name": "Stavros Symeonidis"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Global"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Process Automation",
            "description": "Build custom LLM solutions and workflows to eliminate repetitive tasks"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "API Integration Solutions",
            "description": "Connect your systems seamlessly—from Xero to Shopify"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Intelligence Dashboards",
            "description": "Transform scattered data into actionable insights"
          }
        },
        {
            "@type": "Offer", 
            "itemOffered": {
                "@type": "Service",
                "name": "Predictive Analytics Models", 
                "description": "Forecast cash flow and business trends using machine learning on your Xero and CRM data"
            }
        }
      ]
    }
  });
  
  export const getCaseStudyStructuredData = (caseStudy: {
    title: string;
    description: string;
    image: string;
    url: string;
    datePublished: string;
  }) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": caseStudy.title,
    "description": caseStudy.description,
    "image": caseStudy.image,
    "url": caseStudy.url,
    "datePublished": caseStudy.datePublished,
    "author": {
      "@type": "Person",
      "name": "Stavros Symeonidis"
    },
    "publisher": {
      "@type": "Person",
      "name": "Stavros Symeonidis"
    }
  });