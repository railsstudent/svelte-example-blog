import type { Post } from '$lib/types/post';
import type { PageLoad } from './$types';

// retreive a post by an ID
export const load: PageLoad = async ({ params }): Promise<Post> => {
	console.log(params);

	return {
		id: 1,
		userId: 1,
		body: 'post body',
		title: 'post title'
	};
};
