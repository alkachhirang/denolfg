/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'BgHeader': "url('./assets/images/web.p/header-bg-img.webp')",
        'Bgbtn': "url('./assets/images/web.p/btn-img.webp')",
        'Bgfooter': "url('./assets/images/web.p/footer-bg-img.webp')",
      },
      backgroundSize: {
        'bgsize':"100% 100%"
      },
    },
  },
  plugins: [],
}
