import { SENDGRID_API_KEY } from "$env/static/private";
import { json } from "@sveltejs/kit";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(SENDGRID_API_KEY);

export async function POST({ request }) {
    const {contactMail, contactName, informationAboutProject} = await request.json();

    if (!contactMail || !contactName || !informationAboutProject) {
        return json({message: "Invalid input", emailSentSuccessfully: false}, {status: 400});

    }

    const message = {
        to: 'ishan.k.abhijeet@gmail.com',
        from: 'ishankarpe10@icloud.com', //requires sendgrid verified sender
        subject: 'Contact Form on my ePortfolio',
        html: `Somebody used the contact form on your site. <br/>
        Name: ${contactName},
        Email: ${contactMail},
        Information about the project: ${informationAboutProject}`,
    };

    try {
        await sgMail.send(message);
        return json({message: "Email sent successfully", emailSentSuccessfully: true});
    } catch (error) {
        console.error("Error sending email:", error);
        
        return json({message: "Error sending email", emailSentSuccessfully: false}, {status: 500});
    }
}