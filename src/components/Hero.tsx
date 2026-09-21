"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowDownToLine, ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const done = !deleting && text === word;
    const empty = deleting && text === "";
    const t = setTimeout(
      () => {
        if (done) setDeleting(true);
        else if (empty) {
          setDeleting(false);
          setI((n) => n + 1);
        } else setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      },
      done ? 1600 : deleting ? 35 : 70
    );
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return text;
}

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section id="home" className="relative mx-auto grid min-h-svh max-w-6xl items-center gap-14 px-5 pb-16 pt-32 lg:grid-cols-[1.25fr_1fr]">
      <div>
        <motion.div {...fade(0)} className="glass mb-8 inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-xs text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
          </span>
          Available for freelance & full-time
        </motion.div>

        <motion.p {...fade(0.1)} className="mb-3 font-mono text-sm text-cyan">
          <span className="text-ember">&gt;</span> whoami
        </motion.p>

        <motion.h1 {...fade(0.2)} className="text-5xl font-bold leading-[0.95] tracking-tighter sm:text-7xl lg:text-8xl">
          Boussaidi
          <br />
          <span className="text-gradient">Badii</span>
        </motion.h1>

        <motion.p {...fade(0.35)} className="mt-6 h-8 whitespace-nowrap font-mono text-lg text-ink sm:text-xl" aria-label={profile.roles.join(", ")}>
          <span className="hidden text-muted sm:inline">{profile.role} / </span>
          <span aria-hidden>{typed}</span>
          <span aria-hidden className="ml-0.5 inline-block w-2.5 animate-blink bg-ember">&nbsp;</span>
        </motion.p>

        <motion.p {...fade(0.45)} className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
          I build fast, polished web & mobile products, from SaaS platforms to brand sites for restaurants, studios and law
          firms. Clean code, sharp design, shipped to production.
        </motion.p>

        <motion.div {...fade(0.55)} className="mt-10 flex flex-wrap gap-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 font-medium text-black transition hover:bg-ember-soft hover:shadow-[0_0_32px_rgba(249,115,22,0.55)]"
          >
            View my work
            <ArrowRight size={18} className="transition group-hover:translate-x-1" />
          </a>
          <a
            href={profile.cv}
            download="Boussaidi_Badii_CV.pdf"
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium transition hover:border-cyan/60 hover:text-cyan-soft"
          >
            <ArrowDownToLine size={18} />
            Download CV
          </a>
        </motion.div>

        <motion.dl {...fade(0.65)} className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-6">
          {profile.stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-3xl font-bold text-white">{s.value}</dd>
              <dd className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto aspect-square w-full max-w-[380px]"
      >
        <div className="absolute inset-0 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,var(--color-ember),transparent_30%,var(--color-cyan),transparent_70%,var(--color-ember))] opacity-80 blur-[2px]" />
        <div className="absolute inset-[3px] rounded-full bg-bg" />
        <div className="absolute inset-4 overflow-hidden rounded-full">
          <Image src="/profile.png" alt={profile.name} fill priority sizes="380px" className="object-cover" />
          <div className="pointer-events-none absolute inset-x-0 h-1/3 animate-scan bg-gradient-to-b from-transparent via-cyan/15 to-transparent" />
        </div>

        <div className="glass hud absolute -left-4 bottom-10 rounded-xl px-4 py-3 font-mono text-xs sm:-left-10">
          <p className="text-muted">location</p>
          <p className="text-white">{profile.location}</p>
        </div>
        <div className="glass hud absolute -right-2 top-8 rounded-xl px-4 py-3 font-mono text-xs sm:-right-8">
          <p className="text-muted">status</p>
          <p className="text-cyan-soft">● shipping</p>
        </div>
      </motion.div>
    </section>
  );
}
