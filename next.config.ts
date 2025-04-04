import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    rewrites: async () => [
        {
            source: '/constitution',
            destination: '/constitution.pdf'
        }
    ]
};

export default nextConfig;
