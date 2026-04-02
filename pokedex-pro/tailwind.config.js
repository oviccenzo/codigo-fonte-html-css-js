module.exports = {
    content: [
        "./pages/*.{html,js}",
        "./index.html",
        "./js/*.js",
        "./components/*.{html,js}"
    ],
    theme: {
        extend: {
            colors: {
                // Primary Colors - Electric blue energy, trustworthy technology foundation
                primary: {
                    50: "#EFF6FF", // blue-50
                    100: "#DBEAFE", // blue-100
                    200: "#BFDBFE", // blue-200
                    300: "#93C5FD", // blue-300
                    400: "#60A5FA", // blue-400
                    500: "#3B82F6", // blue-500
                    600: "#2563EB", // blue-600
                    700: "#1D4ED8", // blue-700
                    800: "#1E40AF", // blue-800
                    900: "#1E3A8A", // blue-900
                    DEFAULT: "#3B82F6", // blue-500
                },
                // Secondary Colors - Pokéball red recognition, strategic accent moments
                secondary: {
                    50: "#FEF2F2", // red-50
                    100: "#FEE2E2", // red-100
                    200: "#FECACA", // red-200
                    300: "#FCA5A5", // red-300
                    400: "#F87171", // red-400
                    500: "#EF4444", // red-500
                    600: "#DC2626", // red-600
                    700: "#B91C1C", // red-700
                    800: "#991B1B", // red-800
                    900: "#7F1D1D", // red-900
                    DEFAULT: "#EF4444", // red-500
                },
                // Accent Colors - Achievement gold, success and discovery highlights
                accent: {
                    50: "#FFFBEB", // amber-50
                    100: "#FEF3C7", // amber-100
                    200: "#FDE68A", // amber-200
                    300: "#FCD34D", // amber-300
                    400: "#FBBF24", // amber-400
                    500: "#F59E0B", // amber-500
                    600: "#D97706", // amber-600
                    700: "#B45309", // amber-700
                    800: "#92400E", // amber-800
                    900: "#78350F", // amber-900
                    DEFAULT: "#F59E0B", // amber-500
                },
                // Background Colors
                background: "#FAFAFA", // gray-50 - Clean canvas, reduces eye strain
                surface: "#FFFFFF", // white - Content cards, subtle layering depth

                // Text Colors
                text: {
                    primary: "#1F2937", // gray-800 - Extended reading comfort, high contrast
                    secondary: "#6B7280", // gray-500 - Clear hierarchy, supporting information
                },

                // Status Colors
                success: {
                    50: "#ECFDF5", // emerald-50
                    100: "#D1FAE5", // emerald-100
                    500: "#10B981", // emerald-500
                    600: "#059669", // emerald-600
                    DEFAULT: "#10B981", // emerald-500
                },
                warning: {
                    50: "#FFFBEB", // amber-50
                    100: "#FEF3C7", // amber-100
                    500: "#F59E0B", // amber-500
                    600: "#D97706", // amber-600
                    DEFAULT: "#F59E0B", // amber-500
                },
                error: {
                    50: "#FEF2F2", // red-50
                    100: "#FEE2E2", // red-100
                    500: "#EF4444", // red-500
                    600: "#DC2626", // red-600
                    DEFAULT: "#EF4444", // red-500
                },

                // Border Colors
                border: {
                    light: "#F3F4F6", // gray-100
                    DEFAULT: "#E5E7EB", // gray-200
                    dark: "#D1D5DB", // gray-300
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
                accent: ['Orbitron', 'monospace'],
                orbitron: ['Orbitron', 'monospace'],
            },
            fontSize: {
                'xs': ['0.75rem', { lineHeight: '1rem' }],
                'sm': ['0.875rem', { lineHeight: '1.25rem' }],
                'base': ['1rem', { lineHeight: '1.5rem' }],
                'lg': ['1.125rem', { lineHeight: '1.75rem' }],
                'xl': ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '5xl': ['3rem', { lineHeight: '1' }],
                '6xl': ['3.75rem', { lineHeight: '1' }],
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            borderRadius: {
                'xl': '0.75rem',
                '2xl': '1rem',
                '3xl': '1.5rem',
            },
            boxShadow: {
                'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                'elevated': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                'floating': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                'pokemon': '0 8px 32px rgba(59, 130, 246, 0.15)',
            },
            animation: {
                'fade-in': 'fadeIn 0.3s ease-out',
                'slide-up': 'slideUp 0.3s ease-out',
                'bounce-gentle': 'bounceGentle 2s infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                bounceGentle: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-5px)' },
                },
            },
            transitionDuration: {
                '200': '200ms',
                '300': '300ms',
            },
            transitionTimingFunction: {
                'out': 'ease-out',
            },
            backdropBlur: {
                xs: '2px',
            },
            screens: {
                'xs': '475px',
            },
            zIndex: {
                '60': '60',
                '70': '70',
                '80': '80',
                '90': '90',
                '100': '100',
            },
        },
    },
    plugins: [
        function({ addUtilities }) {
            const newUtilities = {
                '.transition-fast': {
                    transition: 'all 200ms ease-out',
                },
                '.transition-normal': {
                    transition: 'all 300ms ease-out',
                },
                '.glass-effect': {
                    'backdrop-filter': 'blur(10px)',
                    'background': 'rgba(255, 255, 255, 0.8)',
                    'border': '1px solid rgba(255, 255, 255, 0.2)',
                },
                '.text-gradient': {
                    'background': 'linear-gradient(135deg, #3B82F6 0%, #EF4444 100%)',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent',
                    'background-clip': 'text',
                },
                '.scrollbar-hide': {
                    '-ms-overflow-style': 'none',
                    'scrollbar-width': 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                },
            }
            addUtilities(newUtilities)
        }
    ],
}