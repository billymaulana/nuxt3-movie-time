import { defineConfig } from 'windicss/helpers'
import type { Plugin } from 'windicss/types/interfaces'

// plugins
import TypographyPlugin from 'windicss/plugin/typography'
import AspectRatioPlugin from 'windicss/plugin/aspect-ratio'
import FiltersPlugin from 'windicss/plugin/filters'
import FormsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  preflight: true,
  attributify: {
    prefix: 'w:',
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['serif'],
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  darkMode: 'class',
  extract: {
    include: ['**/*.{vue,html,jsx,tsx,ts}'],
    exclude: [
      'node_modules',
      '.git',
      'excluded',
      'dist',
      'windi.config.{ts,js}',
      'tailwind.config.{ts,js}',
    ],
  },
  safelist: ['container', 'row'],
  transformCSS: 'pre',
  // container: false,
  plugins: [
    FiltersPlugin as Plugin,
    TypographyPlugin as Plugin,
    AspectRatioPlugin as Plugin,
    FormsPlugin as Plugin,
  ] as Plugin[],
})
