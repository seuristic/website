/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "preview.redd.it",
      },
      {
        protocol: "https",
        hostname: "qph.cf2.quoracdn.net",
      },
      {
        protocol: "https",
        hostname: "animeindia.in"
      }
    ],
  },
};

module.exports = nextConfig;
