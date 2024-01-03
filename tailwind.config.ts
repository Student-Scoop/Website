import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';
import { primary, defaultDark } from './src/utils/color';

export default {
	content: [
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		fontFamily: {
			benzin: ['Benzin', 'sans-serif']
		},
		extend: {
			gridTemplateAreas: {
				featuresWide: [
					`leftTop    leftTop    centerTop  centerTop    centerTop    right right`,
					`leftBottom leftBottom leftBottom centerBottom centerBottom right right`
				]
			},
			colors: {
				primaryLight: '#effded',
				'aquamarine-blue': {
					'50': '#effcfc',
					'100': '#d7f6f5',
					'200': '#b3eeee',
					'300': '#77dfe0',
					'400': '#43cacd',
					'500': '#27aeb3',
					'600': '#238c97',
					'700': '#23717b',
					'800': '#245d66',
					'900': '#224e57',
					'950': '#12333a'
				},
				'lavender-magenta': {
					'50': '#fdf4ff',
					'100': '#f9e7ff',
					'200': '#f5cfff',
					'300': '#ed9cfe',
					'400': '#e776fc',
					'500': '#d842f3',
					'600': '#bf21d8',
					'700': '#a118b3',
					'800': '#861692',
					'900': '#701877',
					'950': '#4a0250'
				},
				'pastel-green': {
					'50': '#f0fdf5',
					'100': '#dcfce8',
					'200': '#bbf7d1',
					'300': '#86efac',
					'400': '#4ade80',
					'500': '#22c55d',
					'600': '#16a349',
					'700': '#15803c',
					'800': '#166533',
					'900': '#14532b',
					'950': '#052e14'
				}
			}
		}
	},
	plugins: [
		require('@savvywombat/tailwindcss-grid-areas'),
		nextui({
			themes: {
				light: {
					colors: {
						background: '#ffffff',
						foreground: '#000000',
						primary: {
							...primary,
							foreground: '#ffffff'
						},
						default: defaultDark
					}
				}
			}
		})
	]
} satisfies Config;
