<script lang='ts'>
	import { goto } from "$app/navigation";
	import Button from "../Button.svelte";

    function onclick() {
        goto('/#contact-form')
    }

</script>
<section class="hero-section default-margin">
    <h3>Hello, I'm Ishan</h3>
    <div class='underscore mb-m'></div> <!--mb-m is margin medium-->
    <h1>I'm a Svelte Developer crafting glamorous</h1>
    <h1 class='dark-grey mb-m'>web experiences.</h1>
    <Button {onclick}>Get in Touch</Button> <!--passing onclick from herosection into the button, expect onlcick to come in-->
</section>

<style>
    .hero-section {
        padding-top: 45px;
    }
</style>