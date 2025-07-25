<script lang='ts'>
	import Button from "../Button.svelte";
	import SectionHeadline from "../SectionHeadline.svelte";

    let contactName = $state('');
    let contactMail = $state('');
    let informationAboutProject = $state('');
    let isFormInvalid = $state(false);
    let isEmailSent = $state(false);
    let showErrorMessage = $state(false);
    let isLoading = $state(false);;

    // console.log({contactMail, contactName, informationAboutProject})
    async function onSubmit(event: Event) {
        event.preventDefault();

        if (contactMail && contactName && informationAboutProject) {
            isLoading = true;
            try {
                const response = await fetch('/api/send-mail', {
                            method: 'POST',
                            body: JSON.stringify({
                                contactMail,
                                contactName,
                                informationAboutProject
                            }),
                            headers: {'Content-Type': 'application/json'}

                        });
                        isLoading = false;

                        if (response.ok) {
                            isEmailSent = true;
                        } else {
                            showErrorMessage = true;
                            console.error('Failed to send email:', response.statusText);
                        }
            } catch (error) {
                isLoading = false;
                showErrorMessage = true;
                console.error('Error sending email:', error);
            }
            
        } else {
            isFormInvalid = true;
        }
    }

    $effect(() => { //the effect rune is run whenever the values change
        if (contactMail || contactName || informationAboutProject) {
            isFormInvalid = false;
        }
    });
</script>
<section class='mt-l'>
    <SectionHeadline sectionName='contact-form'>Let's Get In Touch</SectionHeadline>
    <div class='form-container default-margin mt-m'>
        {#if isLoading}
            <div class='spinner-container'>
                <div class='spinner'></div>
                <h3>Sending the form...</h3>
            </div>
        {:else if isEmailSent}
            <div class='spinner-container'>
                <h3>Thank you for getting in contact with me. I'll usually reply in 24 hours.</h3>
            </div>
        {:else if showErrorMessage}
        <h3>We seem to have trouble with our server at the moment. Please send me an email directly to <a class="link" href='mailto:karpeishan@gmail.com'>karpeishan@gmail.com</a></h3>
        {:else}
            <form>
                <input class={`text-input mb-m ${isFormInvalid && !Boolean(contactName.length) && 'input-error'}`} placeholder='Your Name' type='text' name='name' bind:value={contactName}/>

                <input class={`text-input mb-m ${isFormInvalid && !Boolean(contactMail.length) && 'input-error'}`} placeholder='Your Email' type='email' name='email' bind:value={contactMail} />
                <textarea class={`text-input mb-m ${isFormInvalid && !Boolean(informationAboutProject.length) && 'input-error'}`} placeholder="Tell me what's on your mind." name='message' bind:value={informationAboutProject}></textarea>
                <Button onclick={onSubmit}>Submit</Button>
            </form>
        {/if}

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
