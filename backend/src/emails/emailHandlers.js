import { resendClient,sender } from "../lib/resend.js";
import { createWelcomeEmailTemplate} from "./emailTemplates.js";

export const sendWelcomeEmail = async (name,email,clientURL) =>{
    const {data , error} = await resendClient.emails.send({
        from: `${sender.name} <${sender.email}>`,
        to: email,
        subject : "Welcome to Chatify!" ,
        html: createWelcomeEmailTemplate(name,clientURL),
    });

    if(error){
       console.error("Resend Error Details:", JSON.stringify(error, null, 2));
        throw new Error(`Resend Error: ${error.message}`);
    }

    console.log("Welcome email Sent",data);
}