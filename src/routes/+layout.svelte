<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav class="mb-10 bg-green-400 p-5 text-white">
	<a href="/">
		<span class="text-2xl">Snazzy Fake Blog</span>
	</a>
</nav>

{@render children?.()}
