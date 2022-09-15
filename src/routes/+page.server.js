import { error } from '@sveltejs/kit';
import { api } from './api2';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ locals }) => {
	const response = await api('GET', '2d');

	return {};
};
