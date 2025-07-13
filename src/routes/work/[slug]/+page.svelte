<script lang="ts">
	import { PortableTextMarkersContext } from "sanity/_singletons";

    let {data}: {data: {project: ProcessedProject}} = $props(); // Get the data prop
    $inspect(data); // Inspect the data prop

    const {name: title} = data.project; // Destructure name as title from the project data
    $inspect(title); // Inspect the title variable

    const {name, date, stack, description, projectImageUrl, slug, content} = data.project; // Destructure other project properties
    function getTagFromStyle(style: ProcessedTextContent['style']): string {
        if (style === 'normal') {
            return 'p';
        } else {
            return style;
        }
    }
    // TODO: create description as a shorthand description on front page and inside page contains longhand description, both are in sanity
</script>

<main class='default-margin work-page'>
    <h2>{title}</h2>
    <div class='underscore'></div>
    <img class='project-image' src={projectImageUrl} alt={title}/>
    <div class='project-container mt-m'>
        <div class='meta-data'>
            <h3 class='semi-bold'>Date</h3>
            <p>{date.slice(0,7)}</p>
            <h3 class='semi-bold mt-m'>Tech Stack</h3>
            <ul>
                {#each stack as skill}
                    <li>{skill}</li>
                {/each}
            </ul>
        </div>
        <div class='project-text'>
            {#each content as block}
                {#if block.type === 'text'}
                    <svelte:element this={getTagFromStyle(block.style)}>{block.textToRender}</svelte:element>
                {:else}
                    <img class='content-image' src={block.url} alt=""/>
                {/if}
            {/each}
        </div>
    </div>
</main>

<style>
    .work-page {
        padding-top: 60px;
        padding-bottom: 20px;
    }

    .project-image {
        width: 100%;
        max-height: 450px;
        object-fit: cover;
        margin-top: 24px;
    }

    .content-image {
        width: 100%;
    }

    .project-container {
        display: flex;
    }

    .meta-data {
        min-width: 200px;
    }
</style>