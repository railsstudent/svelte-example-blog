import { BASE_URL } from '$lib/constants/posts.const';
import type { Post } from '$lib/types/post';
import type { PostWitUser, User } from '$lib/types/user';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// retreive a post by an ID
export const load: PageServerLoad = async ({ params, fetch }): Promise<PostWitUser> => {
	console.log('params', params);

	const post = (await retrieveResource(fetch, `posts/${+params.id}`, 'Post')) as Post;
	const user = (await retrieveResource(fetch, `users/${post.userId}`, 'User')) as User;

	return {
		post,
		user,
	};
};

type FetchFunction = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

async function retrieveResource(fetch: FetchFunction, subPath: string, itemName: string) {
	const url = `${BASE_URL}/${subPath}`;
	const response = await fetch(url);
	if (!response.ok) {
		error(404, {
			message: `Failed to fetch ${itemName}`
		});
	}
	const item = await response.json();

	if (!item) {
		error(404, {
			message: `${itemName} does not exist`
		});
	}

	return new Promise((resolve) => {
		setTimeout(() => resolve(item), 1000);
	});
}
