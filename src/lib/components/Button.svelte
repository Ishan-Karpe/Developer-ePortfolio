<script lang="ts">
    import type {Snippet} from 'svelte';
    let {children, className, onclick, ...props}: ButtonProps = $props(); //wtv is passed into button we want on screen
//props that come out of this rune should be button
    interface ButtonProps {
        children: Snippet;
        onclick: ((e: MouseEvent) => void) | (() => void); //ether other
        className?: string; //optional
    }
</script>

<button class={`btn ${className ?? ''}`} onclick={onclick} {...props}>
    {@render children()}
</button>

<style>
    .btn {
        font-family: 'Inter Tight', sans-serif;
        font-weight: 500;
        background-color: black;
        color: white;
        font-size: 24px;
        padding: 14px 40px;
        border-radius: 10px;
    }

    .nav-bar {
        padding: 10px 24px;
        font-size: 20px;
    }
</style>