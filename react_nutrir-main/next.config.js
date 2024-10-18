/** @type {import('next').NextConfig} */
const path = require('path');
const withPWA = require('next-pwa')({
    dest: 'public',
    // disable: process.env.NODE_ENV === 'development',
    // register: true,
    // scope: '/app',
    // sw: 'service-worker.js',
    //...
});

module.exports = withPWA({
    // next.js config
    images: {
        domains: ['50.116.44.91', '127.0.0.1'],
    },
});
