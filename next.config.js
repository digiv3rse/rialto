/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
		nextScriptWorkers: true,
  },
  api: {
    bodyParser: false,
  },
}

module.exports = nextConfig
