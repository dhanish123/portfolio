/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://dhanish.vercel.app', // Your live site URL
    generateRobotsTxt: true, // Generates robots.txt
    outDir: './public', // Ensure sitemap and robots.txt are outputted to the public folder
  };
  
  module.exports = config;
  