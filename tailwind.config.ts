import type {Config} from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./a/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
        },
        fontFamily: {
            primary: 'var(--font-jetbrainsMono)',
        },
        extend: {
            colors: {
                background: {
                    DEFAULT: '#ffffff',
                    dark: '#1c1c22',
                },
                primary: '#1c1c22',
                accent: {
                    DEFAULT: '#00ff99',
                    hover: "#00e187",
                },
                neutralAlphaMedium: 'var(--neutral-alpha-medium)',
            },
        }
    },
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
