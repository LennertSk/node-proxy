const express = require('express');
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');

// Setup Express Server
const app = express();

// Configuration
const PORT = 3000;
const HOST = "localhost";

// Define destination
const API_PROXY_URL_1 = "https://jsonplaceholder.typicode.com";
const API_PROXY_ENJOY_URL = "https://jsonplaceholder.typicode.com";

// Logging
app.use(morgan('dev'));

// Start the Proxy
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
});

/**
 * Endpoints
 */
app.get('/info', (req, res, next) => {
    res.send('Proxy is up and running! 🚀');
});

app.use('/enjoy', createProxyMiddleware({
    target: API_PROXY_ENJOY_URL,
    changeOrigin: true,
    pathRewrite: {
        [`^/enjoy`]: '',
    },
}));