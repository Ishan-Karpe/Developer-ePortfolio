import { SENDGRID_API_KEY } from "$env/static/private";
import { json } from "@sveltejs/kit";
import sgMail from "@sendgrid/mail";

export async function POST({ request }) {
    const data = await request.json();
    console.log(data)

    return json({
        message: "Email sent successfully", emailSentSuccessfully: true})
}