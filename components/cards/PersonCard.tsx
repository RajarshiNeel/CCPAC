// Shows a person as an initials avatar + name + role.
// Photos aren't wired up yet — the source site's images are temporary
// Google-signed URLs that expire, so real photo files should be added
// to /public/images and referenced here later. TODO: add member photos.

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function PersonCard({
  name,
  role,
  detail,
}: {
  name: string;
  role: string;
  detail?: string;
}) {
  return (
    <div className="group rounded-2xl border border-border bg-elevated p-6 transition-colors hover:border-accent/60">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-soft font-display text-lg font-semibold text-white">
        {initials(name)}
      </div>
      <p className="mt-4 font-display text-base font-semibold text-ink">{name}</p>
      <p className="mt-1 text-sm text-gold">{role}</p>
      {detail && <p className="mt-3 text-sm leading-relaxed text-muted">{detail}</p>}
    </div>
  );
}
