import Link from "next/link";
import { Mail, MapPin, Orbit } from "lucide-react";
import { site, navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-display text-lg font-semibold text-ink">
              <Orbit className="h-5 w-5 text-accent" strokeWidth={1.75} />
              {site.name}
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              {site.tagline}.
            </p>
          </div>

          <div>
            <p className="section-eyebrow text-xs font-medium uppercase text-muted">Navigate</p>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-ink/80 hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-eyebrow text-xs font-medium uppercase text-muted">Our Address</p>
            <div className="mt-4 space-y-3 text-sm text-ink/80">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {site.address}
              </p>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-accent">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                {site.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted md:flex-row">
          <p>Copyright © {new Date().getFullYear()} by {site.fullName}.</p>
          <p>Founded {site.founded}</p>
        </div>
      </div>
    </footer>
  );
}
