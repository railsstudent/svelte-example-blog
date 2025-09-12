import { BASE_URL } from '$lib/constants/posts.const';
import type { Post } from '$lib/types/post';
import type { PostWitUser, User } from '$lib/types/user';
import type { PageLoad } from './$types';

// retreive a post by an ID
export const load: PageLoad = async ({ params, fetch }): Promise<PostWitUser> => {
	console.log('params', params);

	const post = await fetch(`${BASE_URL}/posts/${params.id}`)
		.then((response) => response.json() as Promise<Post>)
		.catch((error) => {
			console.error('Error fetching posts:', error);
			return undefined;
		});

	const user = post
		? await fetch(`${BASE_URL}/users/${post?.userId}`)
				.then((response) => response.json() as Promise<User>)
				.catch((error) => {
					console.error('Error fetching posts:', error);
					return undefined;
				})
		: undefined;

	return {
		post,
		user
	};
};
