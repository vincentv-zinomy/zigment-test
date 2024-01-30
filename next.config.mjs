/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.zigment.ai",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
