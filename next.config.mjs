/** @type {import('next').NextConfig} */
const locales = ["es"];
const nextConfig = {
  i18n: {
    locales,
    defaultLocale: "es",
  },
};

export default nextConfig;
