// Case-study content per project slug. Everything here was verified on the live sites.
// The optional fields (client, role, year, challenge, results) only render once filled in.

export type Feature = { title: string; body: string };

export type CaseStudy = {
  type: string;
  language: string;
  overview: string[];
  features: Feature[];
  sections: string[];
  integrations?: string[];
  client?: string;
  role?: string;
  year?: string;
  challenge?: string;
  results?: string[];
};

export const caseStudies: Record<string, CaseStudy> = {
  fliqo: {
    type: "SaaS platform & marketing site",
    language: "French",
    overview: [
      "Fliqo is a revision platform for medical students preparing for the Tunisian Résidanat exam. It turns courses into smart summaries, flashcards, multiple-choice questions and clinical cases, all in one study path.",
      "The public site explains a four-step method (choose a course, understand, memorize, self-assess), presents the pricing and answers the common questions before sending students to sign up.",
    ],
    features: [
      { title: "Four study tools, one path", body: "Smart summaries, flashcards, MCQs and clinical cases are presented as a single guided revision flow." },
      { title: "Progress tracking", body: "Students follow their progress per course, previewed on the landing page with a live-looking dashboard." },
      { title: "Subscription pricing", body: "One subscription covering every tool, offered as 1-, 3- and 6-month plans." },
      { title: "Accounts", body: "Dedicated sign-up and login flows lead from the marketing site into the platform." },
      { title: "FAQ accordion", body: "Ten expandable answers covering free trial, mobile use, corrections, cancellation and mock exams." },
      { title: "Light & dark themes", body: "A theme toggle in the header switches the whole interface between light and dark." },
    ],
    sections: ["Features", "How it works", "Why Fliqo", "Pricing", "FAQ", "Sign up / Login", "Terms & Privacy"],
  },

  wissupplus: {
    type: "Agency website",
    language: "French & English",
    overview: [
      "Wissup+ is a Tunisian studio offering two services from one team: promotional video content and web & mobile development for small businesses such as cafés, restaurants, opticians and shops.",
      "The site is bilingual (FR/EN) and built to convert: it shows recent films, the websites the team has built, a four-step process and a direct WhatsApp contact.",
    ],
    features: [
      { title: "Bilingual FR / EN", body: "Localized routes (/fr and /en) with a language switcher in the header." },
      { title: "Video showcase", body: "Embedded video reels and a dedicated films page for promotional work." },
      { title: "Web portfolio", body: "Links to live sites built by the team, including Luneti, Fliqo, Ardor and Armonix Group." },
      { title: "Client pages", body: "Individual client pages presenting each collaboration." },
      { title: "Clear process", body: "Four steps from first WhatsApp message to review and adjustments." },
      { title: "FAQ", body: "Expandable answers on pricing, timelines, deposit, coverage area and who you talk to." },
    ],
    sections: ["Work", "Services", "Films", "Websites built", "How it works", "FAQ", "Contact"],
    integrations: ["WhatsApp", "Instagram"],
  },

  treefel: {
    type: "Multi-page brand website",
    language: "French",
    overview: [
      "Treffel is a social padel club at the Sheraton Tunis Hotel. The site presents the club as a place to play and meet people, with an editorial look built on serif typography and deep green tones.",
      "It spans several pages: the club, a photo gallery, events such as the Treffel Padel Trophy, and a practical access page.",
    ],
    features: [
      { title: "Editorial design", body: "Large serif headlines, generous whitespace and full-bleed photography for a premium club feel." },
      { title: "Multi-page structure", body: "Dedicated pages for the club, gallery, events and access." },
      { title: "Events", body: "A section highlighting club tournaments like the Treffel Padel Trophy." },
      { title: "Location & map", body: "An embedded Google Map and directions to the Sheraton Tunis Hotel." },
      { title: "Accessibility", body: "A skip-to-content link and labelled navigation, including links marked as opening in a new tab." },
      { title: "Mobile menu", body: "A full-screen menu on small screens that mirrors the desktop navigation." },
    ],
    sections: ["Home", "The club", "Gallery", "Events", "Access", "Contact"],
    integrations: ["Google Maps", "Instagram"],
  },

  andalouzia: {
    type: "Architecture studio portfolio",
    language: "French",
    overview: [
      "Andalouzia Design is the architecture and interior design studio of Karim Mcharek, known for white façades, arches and Mediterranean materials.",
      "The site works as a visual portfolio: a curated selection of projects, each with its own detail page, plus a studio presentation and contact page.",
    ],
    features: [
      { title: "Project portfolio", body: "Six selected projects with their own pages, including The White Palm Resort, Villa Monochrome and Villa Panorama." },
      { title: "Image-led layout", body: "Large, varied image grids that let the architecture speak for itself." },
      { title: "Project categories", body: "Each project is labelled by type, such as hospitality or interiors." },
      { title: "Studio page", body: "A dedicated page presenting the studio's approach and signature." },
      { title: "Full-screen menu", body: "A minimal header with a full-screen navigation menu." },
      { title: "Contact", body: "A closing call to action that invites visitors to imagine their next project." },
    ],
    sections: ["Home", "Projects", "Project detail ×6", "Studio", "Contact"],
  },

  opticient: {
    type: "E-commerce template",
    language: "French",
    overview: [
      "Opticien is a premium template for an optician and eyewear boutique in Tunis, covering designer frames, custom lenses and in-store services.",
      "It combines an editorial brand story with shopping features: a frame collection, lens options, a cart and an invitation to try frames in store.",
    ],
    features: [
      { title: "Interactive frame showcase", body: "A rotating product presentation (\"Elle tourne. Vous choisissez.\") for browsing frames." },
      { title: "Lens options", body: "Free-form cut, blue-light filter, photochromic and anti-reflective lenses explained." },
      { title: "Cart", body: "Add-to-cart actions and a header cart counter." },
      { title: "Try in store", body: "A call to action inviting customers to try a frame at the boutique." },
      { title: "Newsletter", body: "An email signup form for collection news." },
      { title: "Brand story", body: "Sections for the house, the lenses and the optician's expertise." },
    ],
    sections: ["Collection", "The house", "Lenses", "Optician", "Boutique", "Newsletter"],
  },

  barber: {
    type: "Booking website",
    language: "French",
    overview: [
      "Atelier Barbier is a barber shop in Paris offering precise cuts, fades and sculpted beards.",
      "The site is built around booking: services, barbers and offers all link straight to a reservation page with the right choice already selected.",
    ],
    features: [
      { title: "Deep-linked booking", body: "Every service, barber and offer opens the reservation page pre-filled (e.g. ?prestation=… or ?barbier=…)." },
      { title: "Services & prices", body: "A dedicated page listing every service with its price." },
      { title: "Team profiles", body: "Three barbers, each with their own specialty and a direct booking link." },
      { title: "Current offers", body: "A section for seasonal promotions that can be booked directly." },
      { title: "Practical info", body: "Opening hours, location and a \"find us\" section." },
      { title: "Admin area", body: "A separate admin route for managing the shop behind the public site." },
    ],
    sections: ["Home", "Services & prices", "Booking", "The salon", "Team", "Contact", "Legal"],
    integrations: ["Instagram"],
  },

  cafe92: {
    type: "Digital QR menu",
    language: "French",
    overview: [
      "Café 92 is a brunch and coffee spot. Its digital menu is designed to be opened from a QR code at the table and browsed comfortably on a phone.",
      "The whole menu (eleven categories and around thirty sub-sections) lives on a single page with a sticky category bar for quick navigation.",
    ],
    features: [
      { title: "Mobile-first", body: "Built for phones first, with large tap targets and readable pricing." },
      { title: "Sticky category bar", body: "Eleven categories, from brunch to shisha, always one tap away." },
      { title: "Detailed sub-sections", body: "Around thirty groups, such as frappuccino, smoothies, crêpes, burgers and pancakes." },
      { title: "Supplements", body: "Add-ons listed clearly alongside the main items." },
      { title: "Brand atmosphere", body: "Dark green and gold palette with the café's logo and a subtle pattern." },
      { title: "Single-page speed", body: "No page loads between categories, so browsing stays instant." },
    ],
    sections: ["Brunch", "Breakfast", "Cold drinks", "Iced drinks & juices", "Hot drinks", "Plates", "Sandwich & pizza", "Salads & pasta", "Desserts", "Shisha & tea"],
  },

  "tacos-chaneb": {
    type: "Restaurant chain website",
    language: "French",
    overview: [
      "Tacos Chaneb serves build-your-own French tacos across Greater Tunis. The site carries the brand's bold personality (\"Une moustache, et du caractère\") and makes it easy to find a restaurant or order delivery.",
      "It brings together the menu, nine locations, the delivery apps the chain works with and its presence at city events.",
    ],
    features: [
      { title: "Menu overview", body: "Signature tacos, fries and rice bowls, boxes & combos, snacks, a kids box and ice cream." },
      { title: "Nine locations", body: "Ennasr 2, Ariana, L'Aouina, Le Bardo, Central Park, Carthage, Mégrine, Ezzahra and El Mourouj." },
      { title: "Delivery partners", body: "Direct links to Glovo, Yassir Express, Kool and ZigZag." },
      { title: "In the city", body: "A section on events and news, such as openings and shows." },
      { title: "Order CTA", body: "A persistent \"Commander\" call to action throughout the page." },
      { title: "Social links", body: "Instagram and Facebook links for the community." },
    ],
    sections: ["The Chaneb spirit", "Menu", "Locations", "Delivery", "Events", "Order", "Contact"],
    integrations: ["Glovo", "Yassir", "Google Maps", "Instagram", "Facebook"],
  },

  bakelab2: {
    type: "E-commerce demo (v2)",
    language: "French",
    overview: [
      "BakeLab sells tiramisus, cookies and entremets. Version 2 is a redesigned storefront that adds a full ordering flow and an event quote form.",
      "It runs as a demo: orders and quote requests are simulated, so nothing is actually sent.",
    ],
    features: [
      { title: "Catalog with filters", body: "Products filtered by category: tiramisus, cookies and entremets." },
      { title: "Product pages", body: "A dedicated page per flavor, such as classic, hazelnut and pistachio." },
      { title: "Cart & checkout", body: "Add-to-cart from anywhere and a separate order page." },
      { title: "Event quote form", body: "A form with date and guest-count fields for birthdays, weddings and corporate events." },
      { title: "Admin area", body: "A separate admin route for managing the shop." },
      { title: "Accessible labels", body: "Cart buttons announce their product and count to screen readers." },
    ],
    sections: ["Home", "Products", "Product detail", "Events", "Order", "Contact"],
  },

  bakelab1: {
    type: "E-commerce demo (v1)",
    language: "French",
    overview: [
      "The first BakeLab storefront, for a Tunisian dessert brand selling tiramisus, cookies and entremets.",
      "It focuses on product showcase and branding, with a catalog, product pages, a cart and an invitation to request a quote for events. Version 2 later built on it.",
    ],
    features: [
      { title: "Product showcase", body: "Signature flavors presented with warm, appetizing photography." },
      { title: "Catalog & categories", body: "A product listing filterable by tiramisus, cookies and entremets." },
      { title: "Product pages", body: "An individual page for each product." },
      { title: "Cart", body: "Quick add buttons and a cart panel." },
      { title: "Event quotes", body: "A call to action for birthdays, weddings and other celebrations." },
      { title: "Admin area", body: "A separate admin route for managing products." },
    ],
    sections: ["Home", "Products", "Product detail", "Our world", "Events", "Contact"],
  },

  fedighali: {
    type: "Law firm website",
    language: "Arabic (RTL) & French",
    overview: [
      "The website of Maître Fedi Ghali, a lawyer at the Tunis Court of Appeal practicing civil and criminal law, arbitration and sports governance, and legal consulting.",
      "It is Arabic-first with right-to-left layout, has a French version, and presents the lawyer's profile, practice areas, career path and gallery.",
    ],
    features: [
      { title: "Arabic-first, RTL", body: "Right-to-left layout and typography designed for Arabic, with a French version at /fr." },
      { title: "Practice areas", body: "Civil law, criminal law, arbitration & sports governance, and legal consulting." },
      { title: "Career timeline", body: "Education and milestones, from law school to bar registration." },
      { title: "Photo gallery", body: "Captioned moments, from court appearances to sports-governance events." },
      { title: "Server-side contact form", body: "A contact form handled by Next.js Server Actions with hidden anti-spam fields." },
      { title: "Shared template", body: "Built on the same template as Avocat Demo, adapted to this lawyer's profile." },
    ],
    sections: ["Profile", "Practice areas", "Career", "Gallery", "Blog", "Contact"],
    integrations: ["Google Maps"],
  },

  avocat: {
    type: "Law firm template",
    language: "Arabic (RTL) & French",
    overview: [
      "A reusable website template for law firms, shown here for a demo lawyer at the Tunis Court of Appeal. It is Arabic-first with a French version.",
      "Beyond the firm's presentation, it includes a legal blog with tagged articles, which helps the site be found for legal questions.",
    ],
    features: [
      { title: "Bilingual AR / FR", body: "Arabic right-to-left layout with a full French version." },
      { title: "Legal blog", body: "Articles on topics such as rights in police custody, commercial leases and divorce procedure, organized by tags." },
      { title: "Practice areas", body: "Civil, criminal, business law & arbitration, and legal consulting." },
      { title: "Career timeline", body: "Degrees, bar registration and the founding of the firm." },
      { title: "Gallery", body: "Captioned photos from court, the office and the legal library." },
      { title: "Server-side contact form", body: "A contact form handled by Next.js Server Actions with hidden anti-spam fields." },
    ],
    sections: ["Profile", "Practice areas", "Career", "Gallery", "Blog", "Contact"],
    integrations: ["Google Maps"],
  },
};
