import React from "react";
import Link from "next/link";
import { getSession } from "../_lib/session";
import { getContact } from "../api/contact";
import { ContactList } from "../_components/contactList";

const ContactPage = async () => {
    const user = await getSession();

    if (!user) {
        return (
            <div>
                Please{" "}
                <Link href="/login" className="text-blue-600 hover:underline">
                    Login
                </Link>{" "}
                to view contacts.
            </div>
        );
    }

    const contacts = await getContact(user.id);

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1>Your Contact</h1>

                <Link
                    href="/contact/new"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                >
                    Add contact
                </Link>
            </div>

            {contacts.length === 0 ? (
                <p className="text-gray-600">
                    You don't have any contacts yet. Please add a contact.
                </p>
            ) : (
                <ContactList contacts={contacts} />
            )}
        </div>
    );
};

export default ContactPage;