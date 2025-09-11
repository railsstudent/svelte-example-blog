import type { Post } from '$lib/types/post';

const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export function fetchAll(): Promise<Post[]> {
	return fetch(BASE_URL)
		.then((response) => response.json() as Promise<Post[]>)
		.catch((error) => {
			console.error('Error fetching posts:', error);
			return [] as Post[];
		});
}

export function fetchOne(id: number): Promise<Post | undefined> {
	return fetch(`${BASE_URL}/${id}`)
		.then((response) => response.json() as Promise<Post>)
		.catch((error) => {
			console.error('Error fetching posts:', error);
			return undefined;
		});
}
