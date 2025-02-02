/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://dhanish.vercel.app', // Replace with your live URL
    generateRobotsTxt: true, // Generate robots.txt file
    outDir: 'public', // Ensure the sitemap is written to the public directory
  };
  
  module.exports = config;
  