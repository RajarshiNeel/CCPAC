import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center pt-20">
      <Container className="text-center">
        <p className="font-mono text-sm text-gold">404</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-ink">
          This orbit doesn't exist
        </h1>
        <p className="mt-3 text-muted">The page you're looking for has drifted out of view.</p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white"
        >
          Back to Home
        </Link>
      </Container>
    </div>
  );
}
