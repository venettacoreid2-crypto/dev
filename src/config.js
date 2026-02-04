// src/config.js
export const config = {
  // Untuk development
  development: {
    apiUrl: 'http://localhost:3001/api',
    wsUrl: 'ws://localhost:3001/ws'
  },
  // Untuk GitHub Pages (static hosting)
  production: {
    apiUrl: 'https://hq.vencorio.com/api',
    wsUrl: 'wss://hq.vencorio.com/ws'
  },
  // Untuk Cloudflare Worker (nanti)
  cdn: {
    apiUrl: 'https://dashboard.vencorio.com/api',
    wsUrl: 'wss://dashboard.vencorio.com/ws'
  }
};

// Auto-detect environment
const getEnv = () => {
  if (window.location.hostname === 'localhost') return 'development';
  if (window.location.hostname.includes('github.io')) return 'production';
  if (window.location.hostname.includes('vencorio.com')) return 'cdn';
  return 'production';
};

export const currentEnv = getEnv();
export const API_URL = config[currentEnv].apiUrl;
export const WS_URL = config[currentEnv].wsUrl;