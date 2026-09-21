"use client";

import Image from "next/image";
import { useState, type PointerEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { categories, projects, type Category, type Project } from "@/data/projects";
import { GithubIcon, SectionHeading } from "./ui";

type Filter = "All" | Category;

function hostOf(url: string) {
  return new URL(url).host.replace(/^www\./, "");
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  // 3D tilt toward the pointer; skipped for touch so scrolling stays smooth.
  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-py * 6}deg) rotateY(${px * 8}deg)`;
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  const onLeave = (e: PointerEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
      className={project.featured ? "md:col-span-2" : ""}
    >
      <article
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className="glass spotlight group relative flex h-full flex-col overflow-hidden rounded-3xl transition-[transform,border-color] duration-300 ease-out will-change-transform hover:border-ember/40"
      >
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative block overflow-hidden border-b border-line ${project.featured ? "aspect-[16/8]" : "aspect-[16/10]"}`}
        >
          <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-1.5 bg-black/60 px-3 py-2 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
            <span className="h-2 w-2 rounded-full bg-[#28c840]" />
            <span className="ml-2 truncate font-mono text-[11px] text-muted">{hostOf(project.live)}</span>
          </div>
          <Image
            src={project.image}
            alt={`${project.name} website screenshot`}
            fill
            sizes={project.featured ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
            className="object-cover object-top transition duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
          {project.featured && (
            <span className="absolute bottom-4 left-4 rounded-full bg-ember px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-black">
              Featured
            </span>
          )}
        </a>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-cyan">{project.category}</p>
              <h3 className="mt-1 text-2xl font-semibold">{project.name}</h3>
              <p className="text-sm text-ember-soft">{project.tagline}</p>
            </div>
            <span className="font-mono text-sm text-muted">{String(index + 1).padStart(2, "0")}</span>
          </div>

          <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <li key={t} className="rounded-full bg-white/5 px-3 py-1 font-mono text-[11px] text-ink/80 ring-1 ring-line">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex gap-2">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-white/10 px-4 py-2.5 text-sm font-medium transition hover:bg-ember hover:text-black"
            >
              Live site <ArrowUpRight size={16} />
            </a>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} source code on GitHub`}
              className="inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-sm ring-1 ring-line transition hover:text-cyan-soft hover:ring-cyan/50"
            >
              <GithubIcon size={16} /> Code
            </a>
          </div>
        </div>
      </article>
    </motion.li>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const filters: Filter[] = ["All", ...categories];

  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-28">
      <SectionHeading index="02" kicker="selected work" title={<>Projects that <span className="text-gradient">shipped</span></>} />

      <div role="tablist" aria-label="Filter projects" className="mb-10 flex flex-wrap gap-2">
        {filters.map((f) => {
          const count = f === "All" ? projects.length : projects.filter((p) => p.category === f).length;
          const active = filter === f;
          return (
            <button
              key={f}
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f)}
              className={`relative rounded-full px-4 py-2 text-sm transition ${active ? "text-black" : "glass text-muted hover:text-white"}`}
            >
              {active && (
                <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-gradient-to-r from-ember to-ember-soft" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />
              )}
              <span className="relative">
                {f} <span className={`font-mono text-xs ${active ? "text-black/60" : "text-muted/70"}`}>{count}</span>
              </span>
            </button>
          );
        })}
      </div>

      <motion.ul layout className="grid grid-flow-dense gap-5 md:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </AnimatePresence>
      </motion.ul>
    </section>
  );
}
