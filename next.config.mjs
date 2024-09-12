/** @type {import('next').NextConfig} */
const nextConfig = {
  // Custom Webpack configuration
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
  },

  // Enable experimental features if needed in future
  experimental: {
    esmExternals: false,  // Use ESM external modules (set to `false` as default)
    // Optionally enable asyncWebAssembly for WASM support if needed
    // asyncWebAssembly: true,  
  },
};

export default nextConfig;
