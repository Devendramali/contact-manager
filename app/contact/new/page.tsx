"use client"
import { ContactForm } from "@/app/_components/ContactForm";
import { CreateContactAction } from "@/app/actions/contact";

export default function NewContact(){
    return(
        <>
            <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6">Create New Contact</h1>
                <ContactForm action={CreateContactAction}/>
            </div>
        </>
    )
}