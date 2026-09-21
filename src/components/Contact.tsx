"use client";

import { useState } from "react";
import { Check, Copy, Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon, Reveal, SectionHeading } from "./ui";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-28">
      <SectionHeading index="04" kicker="contact" title={<>Let's build <span className="text-gradient">together</span></>} />

      <Reveal>
        <div className="glass hud overflow-hidden rounded-3xl">
          <div className="flex items-center gap-1.5 border-b border-line bg-black/40 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-xs text-muted">~/badii/contact.sh</span>
          </div>

          <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.2fr_1fr]">
            <div className="font-mono text-sm leading-7">
              <p><span className="text-ember">$</span> ./start-project --with badii</p>
              <p className="text-muted">→ Have a project in mind? Let's bring it to life.</p>
              <p className="text-muted">→ Open for freelance & full-time opportunities.</p>
              <p className="mt-2 text-cyan-soft">✔ ready. response time: &lt; 24h<span className="ml-1 inline-block w-2 animate-blink bg-cyan">&nbsp;</span></p>

              <div className="mt-8 flex flex-wrap gap-3 font-display">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 font-medium text-black transition hover:bg-ember-soft hover:shadow-[0_0_32px_rgba(249,115,22,0.55)]"
                >
                  <Send size={17} /> Get in touch
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-5 py-3 ring-1 ring-line transition hover:text-ember hover:ring-ember/60">
                  <LinkedinIcon size={17} /> LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-5 py-3 ring-1 ring-line transition hover:text-cyan hover:ring-cyan/60">
                  <GithubIcon size={17} /> GitHub
                </a>
              </div>
            </div>

            <ul className="space-y-3">
              <li>
                <button
                  onClick={copyEmail}
                  className="group flex w-full items-center gap-4 rounded-2xl bg-white/[0.03] p-4 text-left ring-1 ring-line transition hover:ring-cyan/50"
                >
                  <Mail className="text-cyan" size={20} />
                  <span className="flex-1">
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-muted">email</span>
                    <span className="break-all">{profile.email}</span>
                  </span>
                  {copied ? <Check size={18} className="text-cyan" /> : <Copy size={18} className="text-muted group-hover:text-white" />}
                  <span className="sr-only" aria-live="polite">{copied ? "Email copied" : ""}</span>
                </button>
              </li>
              <li>
                <a href={profile.phoneHref} className="flex items-center gap-4 rounded-2xl bg-white/[0.03] p-4 ring-1 ring-line transition hover:ring-ember/50">
                  <Phone className="text-ember" size={20} />
                  <span>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-muted">phone</span>
                    {profile.phone}
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4 rounded-2xl bg-white/[0.03] p-4 ring-1 ring-line">
                <MapPin className="text-ember" size={20} />
                <span>
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-muted">location</span>
                  {profile.location}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-line px-5 py-10 font-mono text-xs text-muted sm:flex-row">
      <p>© {new Date().getFullYear()} {profile.name}. </p>
      <a href="#" className="transition hover:text-ember">back to top ↑</a>
    </footer>
  );
}
