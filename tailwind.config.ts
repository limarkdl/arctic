import type {Config} from "tailwindcss";

export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0A0A0C",
                primary: "#FE6310",
            },
            fontSize: {
                'xs': 'var(--arctic-text-xs)',
                'sm': 'var(--arctic-text-sm)',
                'base': 'var(--arctic-text-base)',
                'lg': 'var(--arctic-text-lg)',
                'xl': 'var(--arctic-text-xl)',
                '2xl': 'var(--arctic-text-2xl)',
                '3xl': 'var(--arctic-text-3xl)',
                '4xl': 'var(--arctic-text-4xl)',
                '5xl': 'var(--arctic-text-5xl)',
                '6xl': 'var(--arctic-text-6xl)',
                '7xl': 'var(--arctic-text-7xl)',
                '8xl': 'var(--arctic-text-8xl)',
                '9xl': 'var(--arctic-text-9xl)',
            },
            lineHeight: {
                'none': 'var(--arctic-leading-none)',
                'tight': 'var(--arctic-leading-tight)',
                'snug': 'var(--arctic-leading-snug)',
                'normal': 'var(--arctic-leading-normal)',
                'relaxed': 'var(--arctic-leading-relaxed)',
                'loose': 'var(--arctic-leading-loose)',
            },
            letterSpacing: {
                'tighter': 'var(--arctic-tracking-tighter)',
                'tight': 'var(--arctic-tracking-tight)',
                'normal': 'var(--arctic-tracking-normal)',
                'wide': 'var(--arctic-tracking-wide)',
                'wider': 'var(--arctic-tracking-wider)',
                'widest': 'var(--arctic-tracking-widest)',
            },
        },
    },
    plugins: [],
} satisfies Config;
