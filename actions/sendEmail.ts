"use server";

import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage, ValidationString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (formData: FormData) => {
    console.log("Running on server");
    console.log(formData.get("senderEmail"));
    console.log(formData.get("message"));
    const senderEmail = formData.get("senderEmail") as string;
    const message = formData.get("message") as string ;
    if (!ValidationString(message, 5000)) {
        return {
            error:"Invalid message"
        }
    }
    if (!ValidationString(senderEmail, 500)) {
        return {
            error:"Invalid email"
        }
    }
    let data;
    try{
        data = await resend.emails.send({
            from:"Contact Form <onboarding@resend.dev>",
            to:"vennushyamkumar@gmail.com",
            subject:"Message from contact form",
            reply_to: senderEmail,
            // text:message,
            react: React.createElement(ContactFormEmail, {message: message, senderEmail:senderEmail})
        })
    }
    catch(error: unknown){       
        
    return {
        error: getErrorMessage(error),
    }
    }
    return {
        data,
    }
    
}