// Run `npx workbox-cli generateSW workbox.config.js` to generate a fresh SW!

module.exports = {
  clientsClaim: true,
  globDirectory: '.',
  globIgnores: [
    '**/*.{ogg,wav}',
    '**/*/demo_*.gif',
    'README.md',
    'workbox.config.js',
  ],
  globPatterns: ['**/*.*'],
  inlineWorkboxRuntime: true,
  mode: 'production',
  offlineGoogleAnalytics: true,
  runtimeCaching: [{
    urlPattern: () => true,
    handler: 'StaleWhileRevalidate',
  }],
  skipWaiting: true,
  sourcemap: false,
  swDest: 'sw.js',
};
