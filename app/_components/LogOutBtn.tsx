"use client"
import React from 'react'
import { logoutAction } from '../actions/auth'
import { useRouter } from 'next/navigation'

const LogOutBtn = () => {

 const router= useRouter();
  const handleLogout = async ()=>{
    try {
          await logoutAction();
          router.push("/login");
          router.refresh();
    } catch (error) {
        console.log("logout faild", error);
        
    }

  }
  return (
    <button className='px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors cursor-pointer' onClick={handleLogout}>Logout</button>
  )
}

export default LogOutBtn