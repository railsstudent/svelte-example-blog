<script lang="ts">
    import type { PageProps } from './$types';

    const { data }: PageProps = $props();
    const { post } = data;
</script>

<div class="mb-10">
    <h1 class="text-3xl">{ post.title }</h1>
    <div class="text-gray-500 mb-10">by Connie</div>
    <div class="mb-10">{ post.body }</div>
</div>

