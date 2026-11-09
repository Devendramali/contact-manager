import { LoginForm } from "@/app/_components/LoginForm";
import Link from "next/link";

export default function Login(){
    return(
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
         <h1 className="text-2xl font-bold mb-6">Login</h1>
         <LoginForm/>
         <p className="mt-4 text-center">Don't have a account ? <Link className="text-blue-600 hover:underline" href="/register">Register</Link></p>
        </div>
    )
}