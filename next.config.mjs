/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
            },
            {
                protocol: "https",
                hostname: "tm-integration-aws.s3.ap-south-1.amazonaws.com"
            },
            {
                protocol: "https",
                hostname: "cdn.pixabay.com"
            },
            {
                protocol: "https",
                hostname: "media.istockphoto.com"
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com"
            }
        ]
    },
};

export default nextConfig;
