/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: config => {
        config.externals.push('pino-pretty', 'lokijs', 'encoding')
        // config.experimental = { esmExternals: true }
        return config
      },

      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
            port: "",
            pathname: "**",
          },
        ],
      },
};

export default nextConfig;
