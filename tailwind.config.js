/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
    "./public/**/*.html",
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/container-queries"),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto"],
      },
      colors: {
        "primary-purple-color": "#6C2BD9",
        primary: "#6C2BD9",
        "custom-gray": "#F4F4F4",
        "color-1": "#111928",
        "color-2": "#000000",
        "color-3": "#D1D5DB",
        "color-4": "#6C2BD9",
        "color-5": "#6B7280",
        "color-6": "#111928",
        "color-7": "#6C2BD9",
        "color-8": "#9CA3AF",
        "color-9": "#4B5563",
        "color-10": "#7B7B7B",
        "color-11": "#E5E7EB",
        "color-12": "#F6F2FF",
        "color-13": "#F3F4F6",
        "color-14": "#374151",
        "color-15": "#561fb4",
        "color-16": "##4E27A9",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
    },
  },
};
