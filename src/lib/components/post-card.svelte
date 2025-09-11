<script lang="ts">
	import type { Post } from '$lib/types/post';
	import { resolve } from '$app/paths';

	type Props = {
		post: Post;
	};

	const { post }: Props = $props();

	const postUrl = resolve('/post/[id]', { id: `${post.id}` });

    console.log('post', post);
	console.log('postUrl', postUrl);
</script>

<div
	class="m-2 flex w-1/4 flex-grow items-center gap-2 overflow-hidden rounded shadow-md"
	style="border: 1px solid #eee"
>
	<img src="https://placehold.co/150" style="background: #cccccc" width="150" height="150" />
	<a href={postUrl}>
		{post.title}
	</a>
</div>
