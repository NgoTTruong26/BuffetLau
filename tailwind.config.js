/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      boxShadow: {
        "3xl":
          "0 0px 15px 5px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      },
      backgroundPosition: {
        "center-center": "center center;",
      },
      backgroundImage: {
        set159:
          "url(V:/Buffet-t12/client-buffet-lauT12/src/pages/content/home/SetBuffet/Image/277356723_5190374224361404_1978612321309134065_n.jpg)",
        set219:
          "url(V:/Buffet-t12/client-buffet-lauT12/src/pages/content/home/SetBuffet/Image/276124313_5190374667694693_2373930496844717162_n.jpg)",
        set299:
          "url(V:/Buffet-t12/client-buffet-lauT12/src/pages/content/home/SetBuffet/Image/276137555_5190374801028013_8807721092422998356_n.jpg)",
      },
      backgroundSize: {
        "115%": "115%",
      },
      fontFamily: {
        Lobster: ["Lobster", "cursive"],
      },
    },
  },
  plugins: [],
};
