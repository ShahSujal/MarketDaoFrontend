/** @type {import('next').NextConfig} */
const nextConfig = {
  // Custom Webpack configuration

  experimental: {
    serverComponentsExternalPackages: ["@xmtp/user-preferences-bindings-wasm"],
  },
  webpack: (config) => {
    
    // Add external dependencies to avoid bundling them
    config.externals.push('pino-pretty', 'lokijs', 'encoding');
    
    return config;
  },

  // Configure Next.js to allow images from external sources
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',  // Allow any hostname
        port: '',        // No port restriction
        pathname: '**',  // Allow any pathname
      },
    ],
  }
};

export default nextConfig;
