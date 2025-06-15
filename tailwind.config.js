import { heroui } from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx,sass,scss}',
        './components/**/*.{js,ts,jsx,tsx,mdx,sass,scss}',
        './layouts/**/*.{js,ts,jsx,tsx,mdx,sass,scss}',
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "12px"
            },
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1164px",
                xl: "1304px"
            }
        },
        extend: {
            textShadow: {
                DEFAULT: "0px 0px calc(25/1920*100rem) rgba(0, 0, 0, 0.1)"
            },
            zIndex: {
                2: "2",
                3: "3",
                5: "5"
            },
            fontFamily: {
                body: ["IBM Plex Sans", "sans-serif"]
            },

            colors: {
                transparent: "transparent",
                primary: {
                    f8a900: "#f8a900",
                    '1C1C1C': "#1C1C1C",
                    '333': "#333333",
                    bullet: "rgba(0, 0, 0, 0.8)",
                    bulletlight: "rgba(0, 0, 0, 0.4)",
                    overlay: "rgba(248, 169, 0, 0.8 )",
                    "141313": "#141313",
                    gradient: "linear-gradient(45deg, #feda77, #dd2a7b, #8134af, #515bd4)"
                },
                secondary: {
                    D0E7E6: "#D0E7E6",
                    AEC7C3: "#AEC7C3",
                    224376: "#224376",
                    "122F5B": "#122F5B",
                    "2056A9": "#2056A9",
                    "141313": "#141313"
                }
            }
        }
    },
    darkMode: "class",
    plugins: [
        heroui(),
        require('@tailwindcss/aspect-ratio'),
    ],
}

export default config;