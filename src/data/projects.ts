export type Category = "Platforms" | "Food & Hospitality" | "Brands & Studios" | "Legal";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: Category;
  tags: string[];
  live: string;
  repo: string;
  image: string;
  featured?: boolean;
  rtl?: boolean;
};

export const categories: Category[] = ["Platforms", "Food & Hospitality", "Brands & Studios", "Legal"];

export const projects: Project[] = [
  {
    slug: "fliqo",
    name: "Fliqo",
    tagline: "EdTech SaaS for medical students",
    description:
      "A revision platform for the Tunisian medical Résidanat exam. It brings summaries, flashcards, MCQs and clinical cases together in one guided study path.",
    category: "Platforms",
    tags: ["Next.js", "SaaS", "EdTech"],
    live: "https://www.fliqo.tn",
    repo: "https://github.com/BoussaidiBadii/fliqo-frontend",
    image: "/projects/fliqo.jpg",
    featured: true,
  },
  {
    slug: "treefel",
    name: "Treffel Padel Club",
    tagline: "Social padel club at Sheraton Tunis",
    description: "An editorial website for a social club built around padel, with a gallery, events and a contact flow.",
    category: "Brands & Studios",
    tags: ["Next.js", "Sport", "Editorial"],
    live: "https://treefel.vercel.app",
    repo: "https://github.com/BoussaidiBadii/treefel",
    image: "/projects/treefel.jpg",
  },
  {
    slug: "wissupplus",
    name: "Wissup+",
    tagline: "Video production & web studio",
    description:
      "Website for a Tunisian studio that films promo videos and reels and builds websites and apps for small businesses.",
    category: "Platforms",
    tags: ["Next.js", "Agency", "Motion"],
    live: "https://wissupplus.tn",
    repo: "https://github.com/BoussaidiBadii/wissupplus",
    image: "/projects/wissupplus.jpg",
    featured: true,
  },
  {
    slug: "andalouzia",
    name: "Andalouzia Design",
    tagline: "Mediterranean architecture studio",
    description: "Portfolio site for an architecture and interior design studio: white façades, arches and Mediterranean materials.",
    category: "Brands & Studios",
    tags: ["Next.js", "Architecture", "Portfolio"],
    live: "https://andalouzia-design.vercel.app",
    repo: "https://github.com/BoussaidiBadii/andalouzia-design",
    image: "/projects/andalouzia.jpg",
  },
  {
    slug: "opticient",
    name: "Opticien",
    tagline: "Optician & eyewear boutique template",
    description: "A premium template for an optician in Tunis covering refraction services, designer frames and custom lenses.",
    category: "Brands & Studios",
    tags: ["Next.js", "Template", "Retail"],
    live: "https://opticient-template.vercel.app",
    repo: "https://github.com/BoussaidiBadii/opticient_template",
    image: "/projects/opticient.jpg",
  },
  {
    slug: "barber",
    name: "Atelier Barbier",
    tagline: "Barber shop in Paris",
    description: "Grooming brand site with precise cuts, fades and sculpted beards, plus a booking-focused layout.",
    category: "Brands & Studios",
    tags: ["Next.js", "Booking", "Grooming"],
    live: "https://barber-ebon.vercel.app",
    repo: "https://github.com/BoussaidiBadii/barber",
    image: "/projects/barber.jpg",
  },
  {
    slug: "cafe92",
    name: "Café 92",
    tagline: "Digital menu for a brunch & coffee spot",
    description: "A mobile-first QR menu covering brunch, coffee, pizza, desserts and chicha, with category navigation.",
    category: "Food & Hospitality",
    tags: ["Next.js", "QR Menu", "Mobile-first"],
    live: "https://cafe92-menu.vercel.app",
    repo: "https://github.com/BoussaidiBadii/cafe-92",
    image: "/projects/cafe92.jpg",
  },
  {
    slug: "tacos-chaneb",
    name: "Tacos Chaneb",
    tagline: "French tacos chain across Greater Tunis",
    description: "Restaurant website with a build-your-own tacos concept, its locations in Tunis, Ariana, L'Aouina and Le Bardo, and delivery.",
    category: "Food & Hospitality",
    tags: ["Next.js", "Restaurant", "Multi-location"],
    live: "https://tacos-chaneb.vercel.app",
    repo: "https://github.com/BoussaidiBadii/tacos-chaneb",
    image: "/projects/tacos-chaneb.jpg",
  },
  {
    slug: "bakelab2",
    name: "BakeLab v2",
    tagline: "Pastry e-shop, second iteration",
    description: "A redesigned online shop for tiramisus, cookies and entremets, with a cart and an ordering flow.",
    category: "Food & Hospitality",
    tags: ["Next.js", "E-commerce", "Cart"],
    live: "https://bakelab2-kappa.vercel.app",
    repo: "https://github.com/BoussaidiBadii/bakelab2",
    image: "/projects/bakelab2.jpg",
  },
  {
    slug: "bakelab1",
    name: "BakeLab v1",
    tagline: "Pastry e-shop, first iteration",
    description: "The original BakeLab storefront for a Tunisian dessert brand, focused on product showcase and branding.",
    category: "Food & Hospitality",
    tags: ["Next.js", "E-commerce", "Branding"],
    live: "https://bakelab1-theta.vercel.app",
    repo: "https://github.com/BoussaidiBadii/bakelab",
    image: "/projects/bakelab1.jpg",
  },
  {
    slug: "fedighali",
    name: "Fedi Ghali Law",
    tagline: "Law firm website (Arabic, RTL)",
    description: "Website for a lawyer at the Tunis Court of Appeal covering civil and criminal law, arbitration and sports governance.",
    category: "Legal",
    tags: ["Next.js", "RTL", "Arabic"],
    live: "https://fedighali.vercel.app",
    repo: "https://github.com/BoussaidiBadii/fedighali",
    image: "/projects/fedighali.jpg",
    rtl: true,
  },
  {
    slug: "avocat",
    name: "Avocat Demo",
    tagline: "Law firm template (Arabic, RTL)",
    description: "A reusable right-to-left template for law firms covering practice areas, legal consulting and contact.",
    category: "Legal",
    tags: ["Next.js", "RTL", "Template"],
    live: "https://avocat-demo.vercel.app",
    repo: "https://github.com/BoussaidiBadii/avocat-demo",
    image: "/projects/avocat.jpg",
    rtl: true,
  },
];
