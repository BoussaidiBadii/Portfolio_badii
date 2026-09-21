"use client";

import { Code2, Server, Smartphone } from "lucide-react";
import { profile } from "@/data/profile";
import { Reveal, SectionHeading, trackSpotlight } from "./ui";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    body: "Modern, responsive web apps with React, Next.js and Angular, with fast pages, smooth motion and pixel-precise UI.",
    tags: ["React", "Next.js", "Angular"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    body: "Cross-platform iOS & Android apps with Flutter and Firebase that feel native, look sharp and ship fast.",
    tags: ["Flutter", "Firebase", "Dart"],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    body: "Robust backends and REST APIs with Node.js, Spring Boot and Symfony on MySQL and MongoDB, built to scale.",
    tags: ["Node.js", "Spring Boot", "Symfony"],
  },
];

export function Marquee() {
  const items = [...profile.stack, ...profile.stack];
  return (
    <div className="relative overflow-hidden border-y border-line py-5 [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
      <ul className="flex w-max animate-marquee gap-10 font-mono text-sm uppercase tracking-widest text-muted" aria-label="Tech stack">
        {items.map((t, i) => (
          <li key={i} aria-hidden={i >= profile.stack.length} className="flex items-center gap-10">
            {t}
            <span className="text-ember">✦</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-28">
      <SectionHeading index="01" kicker="capabilities" title={<>Skills & <span className="text-gradient">Services</span></>} />
      <div className="grid gap-5 md:grid-cols-3">
        {services.map(({ icon: Icon, title, body, tags }, i) => (
          <Reveal key={title} delay={i * 0.1}>
            <article
              onPointerMove={trackSpotlight}
              className="glass spotlight group h-full rounded-3xl p-7 transition hover:-translate-y-1 hover:border-ember/40"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-ember/25 to-cyan/20 text-ember-soft ring-1 ring-white/10">
                  <Icon size={22} />
                </div>
                <span className="font-mono text-xs text-muted">0{i + 1}</span>
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{body}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-cyan-soft">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
