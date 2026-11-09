"use client";

import React, { useActionState, useEffect } from "react";
import { ContactType } from "../_types/contact";
import { useRouter } from "next/navigation";

type ContactFormProps = {
    action: (prevState: any, formData: FormData) => Promise<any>;
    contact?: ContactType;
};

export const ContactForm = ({
    action,
    contact,
}: ContactFormProps) => {
    const router = useRouter();

    const [state, formAction] = useActionState(action, null);

    useEffect(() => {
        if (state?.success) {
            router.push("/contact");
        }
    }, [state, router]);

    return (
        <div>
            <form action={formAction} className="space-x-4">
                <input
                    type="hidden"
                    name="id"
                    value={contact?.id || ""}
                />

                <div>
                    <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="name"
                    >
                        Name
                    </label>

                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        defaultValue={contact?.name || ""}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                    />
                </div>

                <div className="mt-3">
                    <label
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="email"
                    >
                        Email
                    </label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        defaultValue={contact?.email || ""}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                    />
                </div>

                {state?.error && (
                    <p className="mt-3 text-sm text-red-500">
                        {state.error}
                    </p>
                )}

                <button
                    type="submit"
                    className="mt-3 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                    {contact ? "Update Contact" : "Create Contact"}
                </button>
            </form>
        </div>
    );
};