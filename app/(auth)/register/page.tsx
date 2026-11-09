import { RegisterForm } from "@/app/_components/RegisterForm";
import Link from "next/link";

export default function Page(){
    return(
        <>
         <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
         <h1 className="text-2xl font-bold mb-6">Register</h1>
         <RegisterForm/>
         <p className="mt-4 text-center">Don't have a account ? <Link className="text-blue-600 hover:underline" href="/register">Register</Link></p>
        </div>
        </>
    )
}