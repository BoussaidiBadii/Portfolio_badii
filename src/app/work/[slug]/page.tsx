import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Send } from "lucide-react";
import { Background } from "@/components/Background";
import { Footer } from "@/components/Contact";
import { Nav } from "@/components/Nav";
import { GithubIcon, Reveal } from "@/components/ui";
import { caseStudies } from "@/data/case-studies";
import { profile, siteUrl } from "@/data/profile";
import { projects } from "@/data/projects";

type Params = { params: Promise<{ slug: string }> };

const withStudy = projects.filter((p) => caseStudies[p.slug]);

export const dynamicParams = false;

export function generateStaticParams() {
  return withStudy.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  const study = caseStudies[slug];
  if (!project || !study) return {};

  const title = `${project.name} — ${study.type} | ${profile.name}`;
  const first = study.overview[0];
  const description = first.length <= 158 ? first : `${first.slice(0, 155).replace(/\s+\S*$/, "")}…`;
  const image = { url: project.image, width: 1440, height: 900, alt: `${project.name} website` };

  return {
    title,
    description,
    alternates: { canonical: `/work/${slug}` },
    openGraph: { type: "article", url: `/work/${slug}`, siteName: profile.name, title, description, images: [image] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

function Fact({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-line py-4 last:border-0">
      <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">{label}</dt>
      <dd className="mt-1 text-ink">{children}</dd>
    </div>
  );
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const index = withStudy.findIndex((p) => p.slug === slug);
  const project = withStudy[index];
  const study = caseStudies[slug];
  if (!project || !study) notFound();

  const prev = withStudy[(index - 1 + withStudy.length) % withStudy.length];
  const next = withStudy[(index + 1) % withStudy.length];
  const host = new URL(project.live).host.replace(/^www\./, "");
  const url = `${siteUrl}/work/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${url}#work`,
        name: project.name,
        headline: `${project.name}: ${study.type}`,
        description: study.overview.join(" "),
        url,
        image: `${siteUrl}${project.image}`,
        inLanguage: "en",
        keywords: [...project.tags, study.type].join(", "),
        creator: { "@id": `${siteUrl}/#person` },
        mainEntityOfPage: url,
        sameAs: project.live,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Work", item: `${siteUrl}/#work` },
          { "@type": "ListItem", position: 3, name: project.name, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Background />
      <Nav />
      <main className="mx-auto max-w-6xl px-5 pb-10 pt-32">
        <nav aria-label="Breadcrumb" className="animate-rise mb-10 font-mono text-xs text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="transition hover:text-ember">home</Link></li>
            <li aria-hidden>/</li>
            <li><Link href="/#work" className="transition hover:text-ember">work</Link></li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-cyan">{slug}</li>
          </ol>
        </nav>

        <header className="animate-rise grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end" style={{ animationDelay: "0.1s" }}>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
              <span className="text-ember">case study</span> // {project.category}
            </p>
            <h1 className="mt-3 text-5xl font-bold tracking-tighter sm:text-7xl">{project.name}</h1>
            <p className="mt-4 max-w-2xl text-lg text-muted sm:text-xl">{project.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 font-medium text-black transition hover:bg-ember-soft hover:shadow-[0_0_32px_rgba(249,115,22,0.55)]"
            >
              Visit live site <ArrowUpRight size={18} />
            </a>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium transition hover:border-cyan/60 hover:text-cyan-soft"
            >
              <GithubIcon size={18} /> Code
            </a>
          </div>
        </header>

        <div className="animate-rise mt-12 grid items-end gap-5 md:grid-cols-[1fr_220px]" style={{ animationDelay: "0.2s" }}>
          <figure className="glass hud overflow-hidden rounded-3xl">
            <div className="flex items-center gap-1.5 border-b border-line bg-black/50 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-muted">{host}</span>
            </div>
            <Image
              src={project.image}
              alt={`${project.name} homepage on desktop`}
              width={1440}
              height={900}
              priority
              sizes="(min-width: 1024px) 860px, 100vw"
              className="h-auto w-full"
            />
          </figure>
          <figure className="mx-auto hidden w-[220px] overflow-hidden rounded-[2rem] border-4 border-white/10 bg-black shadow-[0_0_40px_rgba(20,184,166,0.15)] md:block">
            <Image
              src={`/projects/${slug}-mobile.jpg`}
              alt={`${project.name} on mobile`}
              width={780}
              height={1688}
              sizes="220px"
              className="h-auto w-full"
            />
          </figure>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_320px]">
          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-ember">overview</h2>
            {study.overview.map((p, i) => (
              <p key={i} className={i === 0 ? "mt-4 text-xl leading-relaxed text-ink sm:text-2xl" : "mt-5 leading-relaxed text-muted"}>
                {p}
              </p>
            ))}
            {study.challenge && (
              <>
                <h2 className="mt-10 font-mono text-xs uppercase tracking-[0.3em] text-ember">the challenge</h2>
                <p className="mt-4 leading-relaxed text-muted">{study.challenge}</p>
              </>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="glass rounded-3xl px-6 py-2">
              <dl>
                {study.client && <Fact label="Client">{study.client}</Fact>}
                {study.role && <Fact label="My role">{study.role}</Fact>}
                {study.year && <Fact label="Year">{study.year}</Fact>}
                <Fact label="Type">{study.type}</Fact>
                <Fact label="Language">{study.language}</Fact>
                <Fact label="Stack">
                  <ul className="mt-1 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <li key={t} className="rounded-full bg-white/5 px-3 py-1 font-mono text-[11px] ring-1 ring-line">{t}</li>
                    ))}
                  </ul>
                </Fact>
                {study.integrations && <Fact label="Integrations">{study.integrations.join(", ")}</Fact>}
                <Fact label="Live">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-cyan-soft transition hover:text-ember">
                    {host} ↗
                  </a>
                </Fact>
              </dl>
            </aside>
          </Reveal>
        </div>

        <section className="mt-24" aria-labelledby="features">
          <Reveal>
            <h2 id="features" className="text-3xl font-bold tracking-tight sm:text-4xl">
              What&apos;s <span className="text-gradient">inside</span>
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {study.features.map((f, i) => (
              <li key={f.title}>
                <Reveal delay={(i % 3) * 0.08} className="h-full">
                  <article className="glass h-full rounded-3xl p-6 transition hover:-translate-y-1 hover:border-ember/40">
                    <span className="font-mono text-xs text-ember">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-3 text-lg font-semibold">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </section>

        <Reveal className="mt-24">
          <figure className="glass overflow-hidden rounded-3xl">
            <Image
              src={`/projects/${slug}-section.jpg`}
              alt={`A section of the ${project.name} website`}
              width={1440}
              height={900}
              sizes="(min-width: 1152px) 1152px, 100vw"
              className="h-auto w-full"
            />
            <figcaption className="border-t border-line px-5 py-3 font-mono text-xs text-muted">
              {project.name}: a section further down the page
            </figcaption>
          </figure>
        </Reveal>

        <section className="mt-24 grid gap-10 lg:grid-cols-2" aria-label="Site structure and results">
          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">site structure</h2>
            <ol className="mt-5 flex flex-wrap gap-2">
              {study.sections.map((s, i) => (
                <li key={s} className="rounded-full px-4 py-2 font-mono text-xs ring-1 ring-line">
                  <span className="text-ember">{String(i + 1).padStart(2, "0")}</span> {s}
                </li>
              ))}
            </ol>
          </Reveal>
          {study.results && (
            <Reveal delay={0.1}>
              <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">results</h2>
              <ul className="mt-5 space-y-3">
                {study.results.map((r) => (
                  <li key={r} className="flex gap-3 leading-relaxed"><span className="text-cyan">✔</span>{r}</li>
                ))}
              </ul>
            </Reveal>
          )}
        </section>

        <Reveal className="mt-24">
          <div className="glass hud flex flex-col items-start justify-between gap-6 rounded-3xl p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Need something like {project.name}?</h2>
              <p className="mt-2 text-muted">Tell me about your project and I&apos;ll get back to you within 24 hours.</p>
            </div>
            <a
              href={`mailto:${profile.email}?subject=${encodeURIComponent(`Project like ${project.name}`)}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ember px-6 py-3 font-medium text-black transition hover:bg-ember-soft hover:shadow-[0_0_32px_rgba(249,115,22,0.55)]"
            >
              <Send size={17} /> Start a project
            </a>
          </div>
        </Reveal>

        <nav aria-label="More projects" className="mt-16 grid gap-4 sm:grid-cols-2">
          <Link href={`/work/${prev.slug}`} className="glass group rounded-3xl p-6 transition hover:border-cyan/50">
            <span className="flex items-center gap-2 font-mono text-xs text-muted"><ArrowLeft size={14} /> previous</span>
            <span className="mt-2 block text-xl font-semibold transition group-hover:text-cyan-soft">{prev.name}</span>
          </Link>
          <Link href={`/work/${next.slug}`} className="glass group rounded-3xl p-6 text-right transition hover:border-ember/50">
            <span className="flex items-center justify-end gap-2 font-mono text-xs text-muted">next <ArrowRight size={14} /></span>
            <span className="mt-2 block text-xl font-semibold transition group-hover:text-ember-soft">{next.name}</span>
          </Link>
        </nav>
      </main>
      <Footer />
    </>
  );
}
