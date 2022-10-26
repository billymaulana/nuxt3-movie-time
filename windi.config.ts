// @ts-check - enable TS check for js file
import { defineConfig } from 'windicss/helpers'
import type { Plugin } from 'windicss/types/interfaces'

// plugins
import WindiTypography from 'windicss/plugin/typography'
import WindiAspectRatio from 'windicss/plugin/aspect-ratio'
import WindiFilters from 'windicss/plugin/filters'
import WindiClamps from 'windicss/plugin/line-clamp'

export default defineConfig({
  preflight: true,
  attributify: false,
  theme: {
    fontFamily: {
      sans: ['Montserrat'],
    },
    colors: {
      gray: {
        100: '#f9f9f9',
        200: '#e5e5e5',
        300: '#929292',
        400: '#666',
        500: '#2f363f',
        600: '#1e232b',
        700: '#1e232a',
        800: '#1a1e24',
        900: '#111419',
        1000: 'rgba(0, 0, 0, 0.8)',
        1100: 'rgba(224, 224, 224, 0.13)',
        1200: 'rgba(255, 255, 255, 0.2)',
        1300: 'rgba(0, 0, 0, 0.2)',
        1400: 'rgba(0, 0, 0, 0.9)',
        1500: 'rgba(0, 0, 0, 0.29)',
        1600: 'rgba(30, 35, 43, 0.8)',
        1700: 'rgba(196, 196, 196, 0.28)',
        1800: 'rgba(0, 0, 0, 0.5)',
        1900: 'rgba(255, 255, 255, 0.5)',
        2000: 'rgba(255, 255, 255, 0.05)',
        2100: 'rgba(0, 0, 0, 0.13)',
      },
      white: '#fff',
      red: '#ff0000',
      black: '#000',
      brown: '#e74c3c',
    },
    screens: {
      'sm': '0px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontSize: {
      'base': '12px',
      'lg': '13px',
      'xl': '14px',
      '2xl': '16px',
      '3xl': '18px',
      '4xl': '24px',
      '5xl': '28px',
      '6xl': '36px',
    },
    // container: true,
  },
  darkMode: 'class',
  // safelist: ['m-auto'],
  transformCSS: 'pre',
  plugins: [
    WindiFilters as Plugin,
    WindiTypography as Plugin,
    WindiAspectRatio as Plugin,
    WindiAspectRatio as Plugin,
    WindiClamps as Plugin,
  ] as Plugin[],
})
