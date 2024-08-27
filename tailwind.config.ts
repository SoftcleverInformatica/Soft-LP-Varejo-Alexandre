import type { Config } from 'tailwindcss';

const config = {
	darkMode: ['class'],
	content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
	prefix: '',
	theme: {
		extend: {
			fontFamily: {
				sc: ['"Roboto", Arial'],
				primary: ['Montserrat', 'Roboto'],
				secondary: ['Ubuntu'],
			},
			colors: {
				sc: '#053553',
				scHover: '#396680',
				sc2: '#00366B',
				pv1: '#24ADB5',
				border: 'hsl(var(--border), <alpha-value>)',
				input: 'hsl(var(--input), <alpha-value>)',
				ring: 'hsl(var(--ring), <alpha-value>)',
				background: 'hsl(var(--background), <alpha-value>)',
				foreground: 'hsl(var(--foreground), <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary), <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground), <alpha-value>)',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary), <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground), <alpha-value>)',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive), <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground), <alpha-value>)',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted), <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground), <alpha-value>)',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent), <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground), <alpha-value>)',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover), <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground), <alpha-value>)',
				},
				card: {
					DEFAULT: 'hsl(var(--card), <alpha-value>)',
					foreground: 'hsl(var(--card-foreground), <alpha-value>)',
				},
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in-left-out-right': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' },
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				range: 'fade-in-left-out-right 6s linear infinite ',
				fadeIn: 'fade-in 0.5s ease-in-out 0.25s 1 forwards',
			},
			backgroundImage: {
				'base-lp': "url('/public/assets/base.png')",
				'hero-monitor': "url('/public/assets/header.png')",
				'hero-laptop-sat-web': 'url("/public/assets/mockup-laptop-sat-web.png")',
			},
			borderRadius: {
				scrollbar: '0.5rem',
			},
		},
	},
	plugins: [require('tailwindcss-animate'), require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements', nocompatible: true })],
} satisfies Config;

export default config;
