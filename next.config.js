/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

/** @type {import('next').NextConfig} */

// Remove this if you're not using Fullcalendar features
const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@fullcalendar/react',
  '@fullcalendar/daygrid',
  '@fullcalendar/list',
  '@fullcalendar/timegrid'
])

module.exports = withTM({
  reactStrictMode: true,
  trailingSlash: true,
  reactStrictMode: false,

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://ec2-52-207-247-121.compute-1.amazonaws.com:8080/:path*'
      }
    ]
  },

  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
    }

    return config
  },

})
