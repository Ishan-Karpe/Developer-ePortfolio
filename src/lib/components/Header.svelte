<script lang="ts">
	import { goto } from "$app/navigation";
    import Button from './Button.svelte';

    function goToContactForm() {
        goto('#contact-form');
    }

</script>

<nav class='navbar default-margin'>
    <a href='/' class='logo'>IK</a>
    <div class='navbar-links'>
        <a href='/'>Home</a>
        <a href='/#about-me' class='nav-link'>About Me</a>
        <a href='/#my-work' class='nav-link'>Work</a>
        <Button className='nav-bar' onclick={goToContactForm}>Contact</Button>
    </div>
</nav>

<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
    }

    .logo {
        font-size: 35px;
        font-weight: bold;
    }

    .navbar-links {
        display: flex;
        align-items: center;
        gap: 60px;
    }

    .navbar-links a {
        color: black;
        text-decoration: none;
        font-size: 1rem;
    }

    .nav-link:hover {
        text-decoration: underline;
    }
    
</style>