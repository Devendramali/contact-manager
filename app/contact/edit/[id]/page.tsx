
import React, { Suspense } from "react";
import { ContactForm } from "@/app/_components/ContactForm";
import { UpdateContactAction } from "@/app/actions/contact";
import { getContactById } from "@/app/api/contact";
import { getSession } from "@/app/_lib/session";
import { redirect, notFound } from "next/navigation";

async function EditContactContent({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const user = await getSession();

    if (!user) {
        redirect("/login");
    }

    const { id } = await params;

    // Get contact belonging to logged-in user only
    const contact = await getContactById(id, user.id);

    if (!contact) {
        notFound();
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6">
                Edit Contact
            </h1>

            <ContactForm
                action={UpdateContactAction}
                contact={contact}
            />
        </div>
    );
}

export default function EditContact({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    return (
        <Suspense fallback={<p>Loading contact...</p>}>
            <EditContactContent params={params} />
        </Suspense>
    );
}
