"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { OrbitField } from "@/components/ui/OrbitField";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-orbit-radial bg-gold-radial pt-24">
      <OrbitField />

      <Container className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-eyebrow mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs uppercase text-accent"
        >
          <Sparkles className="h-3.5 w-3.5 text-gold" />
          Founded {site.founded} · Chittagong College
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-4xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl"
        >
          {site.fullName}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted"
        >
          {site.tagline}. A student-driven community where curiosity meets the cosmos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            Explore CCPAC
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Join the Club
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
