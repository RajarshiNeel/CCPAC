/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // produces a static /out folder — no server needed
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "sites.google.com" },
    ],
  },
};

export default nextConfig;
