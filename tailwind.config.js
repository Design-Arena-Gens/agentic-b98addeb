/**** @type {import('tailwindcss').Config} ****/
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './sections/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        base: {
          bg: '#0a0b0f',
          fg: '#ffffffcc',
        },
        tech: {
          blue: '#2f6df6',
          mint: '#39d0c2'
        }
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.25)'
      },
      backgroundImage: {
        'grid': "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        gridSize: '40px 40px'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        pulseGlow: {
          '0%, 100%': { filter: 'blur(40px)', opacity: 0.6 },
          '50%': { filter: 'blur(32px)', opacity: 0.9 }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 8s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
