import { sveltekit } from '@sveltejs/kit/vite';
import dothing from './myplugin.js';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [dothing(), sveltekit()]
};

export default config;
