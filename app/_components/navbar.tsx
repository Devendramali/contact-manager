import Link from "next/link";
import React, { Suspense } from "react";
import LogOutBtn from "./LogOutBtn";
import { getSession } from "../_lib/session";

const NavbarContent = async () => {
    const session = await getSession();

    return (
        <div className="flex items-center space-x-4">
            {session ? (
                <>
                    <Link href="/contact" className="hover:text-blue-800 mr-8">
                        Contacts
                    </Link>
                    <LogOutBtn />
                </>
            ) : (
                <>
                    <Link href="/login" className="hover:text-blue-800 mr-5">
                        Login
                    </Link>
                    <Link href="/register" className="hover:text-blue-800">
                        Register
                    </Link>
                </>
            )}
        </div>
    );
};

export const Navbar = () => {
    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto p-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-blue-800">
                    Contact Manager
                </Link>

                <Suspense fallback={<div>Loading...</div>}>
                    <NavbarContent />
                </Suspense>
            </div>
        </nav>
    );
};