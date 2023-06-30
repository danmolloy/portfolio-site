/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.asmf.org",
      "www.lso.co.uk",
      "ichef.bbci.co.uk",
      "static.files.bbci.co.uk",
      "www.facebook.com"
    ],
  },
}

module.exports = nextConfig
