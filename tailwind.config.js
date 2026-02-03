/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        google: {
          primary: '#4285f4',
          hover: '#357ae8'
        },
        bing: {
          primary: '#008373',
          hover: '#006d5f'
        },
        duckduckgo: {
          primary: '#de5833',
          hover: '#c74d2c'
        },
        ecosia: {
          primary: '#56b68b',
          hover: '#4a9d77'
        },
        yahoo: {
          primary: '#5f01d1',
          hover: '#4a00a8'
        },
        startpage: {
          primary: '#1a73e8',
          hover: '#1557b0'
        }
      },
      animation: {
        'cursor-blink': 'blink 1s step-end infinite',
        'button-click': 'click 0.3s ease-in-out'
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        },
        click: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' }
        }
      }
    }
  }
}
