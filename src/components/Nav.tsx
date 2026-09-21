"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const onHome = usePathname() === "/";
  const [active, setActive] = useState(onHome ? "home" : "work");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!onHome) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onHome]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-3 py-2 pl-5">
        <a href="/" className="font-mono text-sm tracking-tight">
          <span className="text-ember">&lt;</span>
          badii<span className="text-cyan">.me</span>
          <span className="text-ember"> /&gt;</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`/#${id}`}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  active === id ? "bg-white/10 text-white" : "text-muted hover:text-white"
                }`}
              >
                {label}
                {active === id && (
                  <span className="absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-ember to-cyan" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="hidden rounded-full bg-ember px-4 py-2 text-sm font-medium text-black transition hover:bg-ember-soft hover:shadow-[0_0_24px_rgba(249,115,22,0.55)] md:block"
        >
          Hire me
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="rounded-full p-2 text-white md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <ul className="glass mx-auto mt-2 max-w-5xl rounded-3xl p-2 md:hidden">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`/#${id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-2xl px-4 py-3 ${active === id ? "bg-white/10 text-white" : "text-muted"}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
