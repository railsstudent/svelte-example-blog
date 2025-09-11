import type { PageServerLoad } from './$types';
import { fetchAll } from '$lib/loader/posts.data';

// retreive all posts
export const load: PageServerLoad = async () => {
	const posts = await fetchAll();

	return {
		posts
	};
};
