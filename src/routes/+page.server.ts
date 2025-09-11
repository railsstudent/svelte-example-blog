import type { PageServerLoad } from './$types';
import { BASE_URL } from '$lib/constants/posts.const';
import type { Post } from '$lib/types/post';
import type { RequestHandler } from '@sveltejs/kit';

// retreive all posts
export const load: PageServerLoad = async ({ fetch }: RequestHandler) => {
	const posts = await fetch(`${BASE_URL}/posts`)
		.then((response) => response.json() as Promise<Post[]>)
		.catch((error) => {
			console.error('Error fetching posts:', error);
			return [] as Post[];
		});

	return {
		posts
	};
};
