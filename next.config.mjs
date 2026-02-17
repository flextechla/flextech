/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/services.html", destination: "/services", permanent: true },
      { source: "/virus-removalprotection.html", destination: "/services/virus-removal", permanent: true },
      { source: "/on-site-services.html", destination: "/services/on-site", permanent: true },
      { source: "/data-recovery.html", destination: "/services/data-recovery", permanent: true },
      { source: "/managed-services.html", destination: "/services/managed-services", permanent: true },
      { source: "/consultingevaluation.html", destination: "/services/consulting", permanent: true },
      { source: "/remote-support.html", destination: "/services/remote-support", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
      { source: "/products.html", destination: "/products", permanent: true },
      { source: "/blog.html", destination: "/blog", permanent: true },
      { source: "/faq.html", destination: "/faq", permanent: true },
      { source: "/facebook-check-in.html", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
