<script lang='ts'>
    // Importing the SectionHeadline component using default import syntax
    import SectionHeadline from '../SectionHeadline.svelte';
    // Importing the Button component so we can use it below
    // Importing Button as a default import since Button.svelte exports default
    import Button from '../Button.svelte';
    import ExperienceTable from '../ExperienceTable.svelte';
    import image from '$assets/about-me.jpeg';
    import { goto } from '$app/navigation';


    interface AboutMeProps {
        workExperience: SanityWorkExperience[]; // Array of developer experience objects
    }


    let {workExperience}: AboutMeProps = $props();

    function onclick() {
        // Handle button click event
        goto('/#contact-form');
    }
</script>

<section class='about-me mt-l'>
	<SectionHeadline sectionName="about-me">About Me</SectionHeadline>
    <div class='mt-m content-container default-margin'>
        <img class='image' src={image} alt="About Me" />
        <div class='text'>
            <p>
        Hey, I'm Niklas, the driving force behind my freelancing agency
        specializing in web development and data science.
      </p>
      <p>
        With years of hands-on experience tackling real-world coding challenges
        and meeting diverse client needs, I've built a deep understanding of the
        tech landscape. But beyond coding, my true passion lies in teaching.
        I've had the privilege of guiding hundreds of aspiring developers,
        focusing on making coding both practical and accessible. My goal is to
        translate complex concepts into actionable skills that you can apply
        right away.
      </p>
      <p>
        Through my courses, I’m committed to sharing the insights and lessons
        I’ve learned in the field, so you can skip the pitfalls and fast-track
        your development journey. If you're eager to learn from real-world
        experience and practical know-how, let's dive in together.
      </p>
      <Button className='mt-m' {onclick}>Tell me about your project</Button>
        </div>
    </div>
    <ExperienceTable {workExperience} />
    <!--using dot notation in css to refer to the class name-->
</section>

<style>
    .content-container {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
    }

    .image {
        width: 42%;
        border-radius: 20px;
        object-fit: cover;
    }

    .text {
        width: 55%;
        text-align: left;
    }
</style>