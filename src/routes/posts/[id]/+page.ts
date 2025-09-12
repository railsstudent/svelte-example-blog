import { BASE_URL } from '$lib/constants/posts.const';
import type { Post } from '$lib/types/post';
import type { PostWitUser, User } from '$lib/types/user';
import type { PageLoad } from './$types';

// retreive a post by an ID
export const load: PageLoad = async ({ params, fetch }): Promise<PostWitUser> => {
	console.log('params', params);

	try {
		const response = await fetch(`${BASE_URL}/posts/${params.id}`);
		const post = (await response.json()) as Post;

		const userResponse = post ? await fetch(`${BASE_URL}/users/${post?.userId}`) : undefined;
		const user = userResponse ? ((await userResponse.json()) as User) : undefined;

		return {
			post,
			user
		};
	} catch (error) {
		console.error('Error fetching a post:', error);
		return {
			post: undefined,
			user: undefined
		};
	}
};
