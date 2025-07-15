<script lang='ts'>
	import Button from "../Button.svelte";
	import SectionHeadline from "../SectionHeadline.svelte";

    function onSubmit(event: Event) {
        event.preventDefault();
        console.log(event);
    }
</script>
<section class='mt-l'>
    <SectionHeadline sectionName='contact-form'>Let's Get In Touch</SectionHeadline>
    <div class='form-container default-margin mt-m'>
        <form>
            <input class='text-input mb-m' placeholder='Your Name' type='text' name='name' required />
            <input class='text-input mb-m' placeholder='Your Email' type='email' name='email' required />
            <textarea placeholder="Tell me what's on your mind." class='text-input mb-m' name='message' required></textarea>
            <Button onclick={onSubmit}>Submit</Button>
        </form>
        <div class='form-text'>
            <h3 class='bold mb-s'>Talk to me about your project</h3>
            <p>
                I'm always open to discussing new projects and hearing new and innovative ideas! Feel free to reach out if you have a question/comment/concern or details about projects or just want to say hi. I look forward to seeing you soon!
            </p>
        </div>
    </div>
</section>

<style>
    section {
        padding-bottom: 140px;
    }

    .form-container {
        display: flex;
        justify-content: space-between;
    }

    .form-text {
        width: 40%;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 45%;
        align-items: flex-start;
    }

    form * {
        font-size: 20px;
        font-family: 'Inter Tight', sans-serif;
        font-weight: 500;
        color: black;
    }

    textarea,
    
    input {
        width:100%;
        background-color: rgba(0, 0, 0, 0.035);
        border-radius: 8px;
        padding: 4px 12px;
        border: none;
        outline: none;
    }

    input {
        height: 48px;
    }

    textarea {
        height: 120px;
        margin-bottom: 40px;
    }

    textarea::placeholder,
    input::placeholder {
        font-size: 20px;
        font-weight: 400;
    }

    .input-error {
        background-color: rgba(223, 87, 87, 0.66);
    }

    .input-error::placeholder {
        color: white;
    }

    .spinner {
        border: 4px solid rgba(0, 0, 0, 0.1);
        border-left-color: black;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        animation: spin 0.75s linear infinite;
        display: inline-block;
        margin-right: 8px;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .spinner-container {
        display: flex;
        align-items: center;
    }
</style>