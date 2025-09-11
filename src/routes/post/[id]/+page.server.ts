import type { Post } from '$lib/types/post';
import type { PageServerLoad } from './$types';

// retreive a post by an ID
export const load: PageServerLoad = async ({ params }): Promise<{ post: Post }> => {
	console.log('params', params);

	return {
		post: { 
            id: 1,
            userId: 1,
            body: 'post body',
            title: 'post title'
        }
	};
};
