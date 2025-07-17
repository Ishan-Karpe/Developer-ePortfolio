<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';

	/* The props rune is a special syntax in Svelte that allows you to access properties passed
	to a component. It makes it easy to use the values passed from a parent component
	to the child component. In this case, it allows us to access the 'children' */
	// 'children' is special: it represents whatever content is placed inside this layout component.
	let { children } = $props();
</script>

<!-- This line tells Svelte to render whatever is inside the 'children' prop.
     Basically, it shows the content that should appear inside this layout. -->

<Header /> <!--This tells it to be everywhere in the site-->	 
{@render children()}
<Footer />