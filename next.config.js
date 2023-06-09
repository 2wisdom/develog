const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
};

/** @type {import('next').NextConfig} */
// Merge MDX config with Next.js config
module.exports = {
  async rewrites() {
    withMDX(nextConfig);
    return [
      {
        source: "/posts/develop/:slug", // 요청 경로
        destination: "/posts/develop/[slug]", // 라우팅 경로
      },
    ];
  },
};
