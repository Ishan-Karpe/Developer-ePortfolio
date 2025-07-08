<script lang="ts">

    interface ExperienceTableProps {
        workExperience: SanityWorkExperience[];
    }

    let { workExperience }: ExperienceTableProps = $props();
</script>

<section class='default-margin work-experience mt-m'>
    <ul class='experience-list'>
        {#each workExperience as experience} <!--Loop through each experience in the workExperience array-->
            <li class='experience-item'>
                <article> <!--Each experience item, everything is having its own space-->
                    <h3 class='position bold mb-xs'>{experience.position}</h3>
                    <p class='startDate'>{experience.startDate}</p>
                    <p class='endDate'>{experience.endDate}</p>
                    <p class='description'>{experience.description}</p>
                </article> <!--now sanity sends over the data-->
            </li>
        {/each}
    </ul>
    <h2 class='headline'>Past work <br/>Experience</h2>
</section>
<!--The dot is used to select classes in CSS.-->
<!--A Svelte component that displays work experience in a two-column layout. It defines a
  TypeScript interface for experience objects
  hard-coded work data, and renders it as a styled list with a "Past work Experience" headline
  on the right side.-->
<style>
    .work-experience {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .experience-list {
        width: 50%;
    }

    .headline {
        text-align: right;
    }

    .experience-item {
        border-bottom: 1px solid #f0dedf;
        padding-bottom: 12px;
    }

    .experience-item:not(:first-of-type) {
        padding-top: 16px;
    }

    .experience-item p {
        margin-bottom: 0;
    }
    
</style>