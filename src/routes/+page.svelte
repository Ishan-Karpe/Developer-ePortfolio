<script>
    // this is the main page of the application, which imports and uses various components to display the hero section and about me section.
	import AboutMeSection from "$lib/components/Sections/AboutMeSection.svelte";
	import ContactSection from "$lib/components/Sections/ContactSection.svelte";
    import HeroSection from "$lib/components/Sections/HeroSection.svelte";
    import MyWorkSection from "$lib/components/Sections/MyWorkSection.svelte";
	import SkillsSection from "$lib/components/Sections/SkillsSection.svelte";
// add stuff exported to index.ts
    const {data} = $props();
    let {workExperience, projects, skills} = data;

    $inspect(data);//  debugging and logs current value of data into console.
    $inspect(skills);//  debugging and logs current value of skills into console.
</script>
<HeroSection />
<AboutMeSection {workExperience} />
<!-- The HeroSection component is imported and used to display the hero section of the page. -->
<!-- The AboutMeSection component is imported and used to display the about me section of the page. -->
<!-- The workExperience prop is passed to the AboutMeSection component to display the user's work experience. -->
 <MyWorkSection {projects} />
 <SkillsSection {skills} />
 <ContactSection />
