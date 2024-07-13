/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@refinedev/antd"],
  env: {
    dotenv: {
      path: './.env',
    }
  },
};

export default nextConfig;
