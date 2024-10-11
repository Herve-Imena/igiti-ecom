/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          pathname: '/images/**',
        },
      ],
    },
    experimental: {
      appDir: true, // Enable this if you're using the experimental app directory
    },
  };
  
  export default nextConfig;
  