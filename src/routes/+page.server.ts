import { BASE_URL } from '$lib/constants/posts.const';
import type { Post } from '$lib/types/post';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// retreive all posts
export const load: PageServerLoad = async ({ fetch }) => {
	const postResponse = await fetch(`${BASE_URL}/posts`);

	if (!postResponse.ok) {
		error(404, {
			message: 'Failed to fetch posts'
		});
	}

	const posts = (await postResponse.json()) as Post[];
	return { posts };
};
