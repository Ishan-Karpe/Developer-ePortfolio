<script lang="ts">
	import SectionHeadline from "../SectionHeadline.svelte";

    let {skills} = $props();// This will be passed from the parent component, which is the main page of the application.
</script>

<section class='mt-l'>
    <SectionHeadline sectionName='skills'>Skills</SectionHeadline>
    <div class='wrapper default-margin'>
        <div class='skills-container mt-m'>
            {#each skills as skill}
                <i class={skill.iconClass} title={skill.skillName}></i>
            {/each}
        </div>
    </div>
</section>

<style>
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .skills-container {
        width: 40%;
        display: flex;
        flex-wrap: wrap;
        row-gap: 16px;
        column-gap: 10px;
        justify-content: center;
    }

    i {
        font-size: 100px;
        color: black;
    }
</style>