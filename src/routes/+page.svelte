<script lang="ts">
	import type { PageProps } from './$types';
	import PostCard from '$lib/components/post-card.svelte';
	import { resolve } from '$app/paths';

	const { data }: PageProps = $props();
	const { posts } = data;
</script>

<div class="flex flex-grow flex-wrap">
	{#each posts as post (post.id)}
		<PostCard {post} />
	{/each}
</div>
