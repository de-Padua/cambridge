/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["encrypted-tbn0.gstatic.com","www.canva.com","miblart.com"],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
