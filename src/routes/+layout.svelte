<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page, navigating } from '$app/state';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav class="mb-10 bg-green-400 p-5 text-white">
	<a href="/">
		<span class="text-2xl">Snazzy Fake Blog (Svelte 5 ver.)</span>
	</a>
</nav>

{#if navigating.to}
	<div>Loading page...</div>
{:else if page.error}
	{page.error.message}
{:else}
	<div class="container">
		{@render children?.()}
	</div>
{/if}

<style lang="css">
	.container {
		max-width: 960px;
		margin: 0 auto;
	}
</style>
