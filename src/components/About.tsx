"use client";

import Image from "next/image";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon, Reveal, SectionHeading, trackSpotlight } from "./ui";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-28">
      <SectionHeading index="03" kicker="about" title={<>The engineer <span className="text-gradient">behind it</span></>} />

      <div className="grid gap-5 lg:grid-cols-[340px_1fr]">
        <Reveal>
          <article onPointerMove={trackSpotlight} className="glass spotlight hud h-full rounded-3xl p-7 text-center">
            <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full ring-2 ring-ember/70 ring-offset-4 ring-offset-bg">
              <Image src="/profile.png" alt={profile.name} fill sizes="144px" className="object-cover" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold">{profile.name}</h3>
            <p className="font-mono text-sm text-cyan">{profile.role}</p>

            <div className="mt-5 flex justify-center gap-3">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-line transition hover:text-ember hover:ring-ember/60">
                <LinkedinIcon />
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-line transition hover:text-cyan hover:ring-cyan/60">
                <GithubIcon />
              </a>
            </div>

            <dl className="mt-7 grid grid-cols-3 border-t border-line pt-5">
              {profile.stats.map((s, i) => (
                <div key={s.label} className="flex flex-col-reverse">
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-muted">{s.label}</dt>
                  <dd className={`text-2xl font-bold ${i % 2 ? "text-cyan-soft" : "text-ember-soft"}`}>{s.value}</dd>
                </div>
              ))}
            </dl>
          </article>
        </Reveal>

        <Reveal delay={0.1}>
          <article onPointerMove={trackSpotlight} className="glass spotlight h-full rounded-3xl p-7 sm:p-9">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ember">my story</p>
            <p className="mt-4 text-xl leading-relaxed text-ink sm:text-2xl">
              I'm a Software Engineer with a deep passion for building scalable, high-quality applications.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              From front-end interfaces to back-end architectures, I love turning complex problems into elegant solutions. I
              thrive in fast-paced environments and enjoy working with modern frameworks and tools. Continuous learning drives
              me, and I'm always exploring new technologies to stay ahead.
            </p>

            <p className="mt-8 font-mono text-xs uppercase tracking-[0.25em] text-cyan">tech stack</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {profile.stack.map((t, i) => (
                <li
                  key={t}
                  className={`rounded-full px-3.5 py-1.5 font-mono text-xs ring-1 transition hover:-translate-y-0.5 ${
                    i % 2 ? "bg-cyan/10 text-cyan-soft ring-cyan/25" : "bg-ember/10 text-ember-soft ring-ember/25"
                  }`}
                >
                  {t}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
