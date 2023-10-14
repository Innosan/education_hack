/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
		colors: {
			'smooth-pink': '#FFDADB',
			'hard-brown': '#483939',
		},
	},
  },
  plugins: [],
}

