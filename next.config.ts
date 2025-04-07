import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: [
            "cdn.autobild.es", // Add any other domains you need
            // Add your Supabase URL domain here, e.g., 'xyzproject.supabase.co'
        ],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },

};

export default nextConfig;
