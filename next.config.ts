import withSerwistInit from "@serwist/next"
import crypto from "crypto"
import type { NextConfig } from "next"

const revision: string = crypto.randomUUID()

const withSerwist = withSerwistInit({
  disable: false,
  cacheOnNavigation: true,
  swSrc: "app/sw.ts",
  swDest: "public/sw.js",
  additionalPrecacheEntries: [{ url: "/~offline", revision }],
})

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", // this intends to allow all hostnames, but Next.js may restrict this for security
      },
    ],
  },
}

export default withSerwist(nextConfig)
