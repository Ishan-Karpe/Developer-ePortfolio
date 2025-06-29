<script lang='ts'>
	import type { Snippet } from "svelte";

    interface SectionHeadlineProps {
        children: Snippet;
        sectionName: string;
    }
    let {children, sectionName}: SectionHeadlineProps = $props(); //props rune does this: <SectionHeadline>My Title</SectionHeadline>
</script>

<div class='default-margin' id={sectionName}>
    <h2>{@render children()}</h2>
    <div class='underscore mb-m'></div>
</div>