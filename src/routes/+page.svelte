<script>
	import AboutMeSection from "$lib/components/Sections/AboutMeSection.svelte";
    import HeroSection from "$lib/components/Sections/HeroSection.svelte";
    
    const {data} = $props();

    $inspect(data);//  debugging and logs current value of data into console.

</script>
<HeroSection />
<AboutMeSection /> 
