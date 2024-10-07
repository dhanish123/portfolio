/** @type {import('next').NextConfig} */
// const nextConfig = {};
const nextConfig = {
  // Enable React Strict Mode for highlighting potential issues in your app
  reactStrictMode: true,

  // Configure image optimization
  images: {
    // Add any external domains you're using for images
    domains: ['dhanish.vercel.app'], // replace 'example.com' with the domain of your image hosting service
  },
}

export default nextConfig;
