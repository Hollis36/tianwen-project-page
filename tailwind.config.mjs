/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Source Serif 4"', '"Source Serif Pro"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#1a1a1a',
          soft: '#3f3f3f',
          mute: '#6b6b6b',
        },
        paper: {
          DEFAULT: '#fafafa',
          warm: '#f5f3ef',
        },
        accent: {
          DEFAULT: '#2563eb',
          soft: '#dbeafe',
          deep: '#1d4ed8',
        },
        rule: '#e5e5e5',
        // Dark theme
        night: {
          DEFAULT: '#0c0c10',
          surface: '#16161c',
          warm: '#1a1a22',
          card: '#1d1d26',
          rule: '#2a2a35',
          ink: '#f4f4f6',
          soft: '#c5c5cc',
          mute: '#8a8a96',
        },
      },
      maxWidth: {
        prose: '46rem',
        column: '64rem',
      },
    },
  },
  plugins: [],
};
