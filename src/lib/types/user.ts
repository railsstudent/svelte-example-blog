import type { Post } from './post';

export type User = {
	id: number;
	name: string;
};

export type PostWitUser = {
	post: Post | undefined;
	user: User | undefined;
};
