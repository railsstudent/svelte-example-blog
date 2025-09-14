import { BASE_URL } from '$lib/constants/posts.const';
import type { PostWitUser } from '$lib/types/user';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// retreive a post by an ID
export const load: PageServerLoad = async ({ params, fetch }): Promise<PostWitUser> => {
	console.log('params', params);

	const post = await retrieveResource(fetch, `posts/${+params.id}`, 'Post');
	const user = await retrieveResource(fetch, `users/${post.userId}`, 'User');

	return {
		post,
		user
	};
};

type FetchFunction = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

async function retrieveResource(fetch: FetchFunction, subPath: string, item: string) {
	const url = `${BASE_URL}/${subPath}`;
	const response = await fetch(url);
	if (!response.ok) {
		error(404, {
			message: `Failed to fetch ${item}`
		});
	}
	const post = await response.json();

	if (!post) {
		error(404, {
			message: `${item} does not exist`
		});
	}
	return post;
}
