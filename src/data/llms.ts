// Builds /llms.txt (short index) and /llms-full.txt (full content) from the site data,
// following the llmstxt.org format so AI assistants can read the portfolio cleanly.
import { caseStudies } from "./case-studies";
import { profile, seo, siteUrl } from "./profile";
import { categories, projects } from "./projects";

const caseUrl = (slug: string) => `${siteUrl}/work/${slug}`;

function header() {
  return [
    `# ${profile.name}`,
    "",
    `> ${seo.description}`,
    "",
    `${profile.name} (also written Badii Boussaidi) is a ${profile.role} based in ${profile.location}, ` +
      "building websites, SaaS platforms and mobile apps for businesses (restaurants, studios, law firms, shops). Open to freelance and full-time work.",
    "",
    `- Website: ${siteUrl}`,
    `- Email: ${profile.email}`,
    `- LinkedIn: ${profile.linkedin}`,
    `- GitHub: ${profile.github}`,
    `- Tech stack: ${profile.stack.join(", ")}`,
  ];
}

export function llmsTxt() {
  const lines = [...header(), ""];
  for (const category of categories) {
    const list = projects.filter((p) => p.category === category);
    if (!list.length) continue;
    lines.push(`## ${category}`, "");
    for (const p of list) {
      const url = caseStudies[p.slug] ? caseUrl(p.slug) : p.live;
      lines.push(`- [${p.name}](${url}): ${p.tagline}. Live site: ${p.live}`);
    }
    lines.push("");
  }
  lines.push(
    "## Optional",
    "",
    `- [Full content](${siteUrl}/llms-full.txt): every case study in plain text`,
    `- [Contact](${siteUrl}/#contact): email, phone and location`,
    ""
  );
  return lines.join("\n");
}

export function llmsFullTxt() {
  const lines = [...header(), ""];
  for (const p of projects) {
    const study = caseStudies[p.slug];
    lines.push(`## ${p.name}`, "", `${p.tagline}.`, "");
    lines.push(`- Case study: ${study ? caseUrl(p.slug) : "n/a"}`, `- Live site: ${p.live}`, `- Category: ${p.category}`);
    lines.push(`- Stack: ${p.tags.join(", ")}`);
    if (study) {
      lines.push(`- Type: ${study.type}`, `- Language: ${study.language}`);
      if (study.client) lines.push(`- Client: ${study.client}`);
      if (study.role) lines.push(`- Role: ${study.role}`);
      if (study.year) lines.push(`- Year: ${study.year}`);
      if (study.integrations) lines.push(`- Integrations: ${study.integrations.join(", ")}`);
      lines.push("", ...study.overview.flatMap((o) => [o, ""]));
      if (study.challenge) lines.push("### Challenge", "", study.challenge, "");
      lines.push("### Features", "", ...study.features.map((f) => `- ${f.title}: ${f.body}`), "");
      if (study.results) lines.push("### Results", "", ...study.results.map((r) => `- ${r}`), "");
    } else {
      lines.push("", p.description, "");
    }
  }
  return lines.join("\n");
}
