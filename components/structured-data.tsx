export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Satya Prakash",
    "jobTitle": "Full-Stack Developer",
    "url": "https://satyas-portfolio.vercel.app",
    "sameAs": [
      "https://github.com/SatyaisCoding",
      "https://www.linkedin.com/in/satyaprakash2913/",
      "https://twitter.com/SatyaisCoding"
    ],
    "email": "satya.sk.prakash@gmail.com",
    "knowsAbout": [
      "React",
      "Next.js",
      "MERN Stack",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Full-Stack Web Development"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Kanpur Institute of Technology"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Satya Prakash Portfolio",
    "url": "https://satyas-portfolio.vercel.app",
    "description": "Portfolio website of Satya Prakash, a Full-Stack Developer specializing in MERN Stack and Next.js",
    "author": {
      "@type": "Person",
      "name": "Satya Prakash"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://satyas-portfolio.vercel.app/#home"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://satyas-portfolio.vercel.app/#about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Projects",
        "item": "https://satyas-portfolio.vercel.app/#projects"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://satyas-portfolio.vercel.app/#contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

