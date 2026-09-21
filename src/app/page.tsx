import { About } from "@/components/About";
import { Background } from "@/components/Background";
import { Contact, Footer } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Marquee, Skills } from "@/components/Skills";
import { profile, seo, siteUrl } from "@/data/profile";
import { caseStudies } from "@/data/case-studies";
import { projects } from "@/data/projects";

const person = { "@id": `${siteUrl}/#person` };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: profile.name,
      inLanguage: "en",
      publisher: person,
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: seo.title,
      description: seo.description,
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: person,
      hasPart: { "@id": `${siteUrl}/#projects` },
    },
    {
      "@type": "Person",
      ...person,
      name: profile.name,
      alternateName: "Badii Boussaidi",
      givenName: "Badii",
      familyName: "Boussaidi",
      url: siteUrl,
      image: `${siteUrl}/profile.png`,
      jobTitle: profile.role,
      description: seo.shareDescription,
      email: `mailto:${profile.email}`,
      address: { "@type": "PostalAddress", addressLocality: "Manouba", addressCountry: "TN" },
      sameAs: [profile.linkedin, profile.github],
      knowsAbout: profile.stack,
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#projects`,
      name: "Projects by Boussaidi Badii",
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: p.name,
          description: p.description,
          url: caseStudies[p.slug] ? `${siteUrl}/work/${p.slug}` : p.live,
          sameAs: p.live,
          image: `${siteUrl}${p.image}`,
          creator: person,
          keywords: p.tags.join(", "),
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Background />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Skills />
        <Projects caseSlugs={Object.keys(caseStudies)} />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
