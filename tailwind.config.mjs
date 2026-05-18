/** @type {import('tailwindcss').Config} */
export default {
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
      },
      maxWidth: {
        prose: '46rem',
        column: '64rem',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1a1a1a',
            fontFamily: 'Inter, system-ui, sans-serif',
          },
        },
      },
    },
  },
  plugins: [],
};
