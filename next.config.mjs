/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'loremflickr.com',
                port: '',
                pathname: '/640/480/abstract', // Or '/640/480/**' for all under this path
            },
            {
                protocol: 'https',
                hostname: 'cloudflare-ipfs.com',
                port: '',
                pathname: '/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/**',
            },
            {
                protocol: 'https',
                hostname: 'loremflickr.com',
                port: '',
                pathname: '/640/480/animals', // or '/640/480/**' for broader pattern
            },
        ],
    },
};

export default nextConfig;
