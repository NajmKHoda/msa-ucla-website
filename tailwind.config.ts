import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            'text-primary': '#000000',
            'text-secondary': '#ffffff',

            'bg-primary': '#ffffff',
            'bg-secondary': '#eeeeee',

            'msa-yellow': '#ffd409',
            'msa-blue': '#003b5b'
        }
    },
    plugins: [],
} satisfies Config;
