export function PersonStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Joshua Wafula",
    alternateName: "Wafula Joshua",
    description: "Cloud Engineer, Web Developer, and App Developer based in Kenya",
    image: "https://wafula-josh.vercel.app/profile-image.jpg", // Replace with actual image path
    jobTitle: "Cloud Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Fikia LTD",
    },
    url: "https://wafula-josh.vercel.app/",
    sameAs: [
      "https://www.linkedin.com/in/joshua-wafula-11bb6121b/",
      "https://github.com/Hac254",
      "https://www.instagram.com/wafula_josh/",
      "https://x.com/HackerJosh2",
      "https://www.facebook.com/wafula.josh.5855",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Migori",
      addressRegion: "Kenya",
    },
    email: "wafulajoosh@gmail.com",
    telephone: "+254792195650",
    knowsAbout: ["Cloud Computing", "Web Development", "App Development", "UI/UX Design", "Photography"],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

