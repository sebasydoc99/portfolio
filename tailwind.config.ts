import type {Config} from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./a/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
