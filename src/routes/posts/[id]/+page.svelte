<script lang="ts">
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
	const { post, user } = data;
</script>

<div class="mb-10">
	<h1 class="text-3xl">{post?.title || ''}</h1>
	<div class="mb-10 text-gray-500">{user?.name || ''}</div>
	<div class="mb-10">{post?.body || ''}</div>
</div>
