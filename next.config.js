/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    )

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ },
        use: ['@svgr/webpack'],
      },
    )

    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" }
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig;

// {
//   test: /\.svg$/i,
//   issuer: { and: [/\.(js|ts|md)x?$/] },
//   use: [
//     {
//       loader: "@svgr/webpack",
//       options: {
//         svgoConfig: { plugins: [
//           {
//             name: 'preset-default',
//             params: {
//               overrides: { removeViewBox: false },
//             },
//           },
//         ]},
//       },
//     },
//   ]}