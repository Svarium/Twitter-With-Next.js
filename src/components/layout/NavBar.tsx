'use client'

import authApi from "@/services/auth/auth.api";
import Link from "next/link";



const NavBar = () => {

    const logout = async () => {
        await authApi.logout()
    }
 
    return <>
        <header className="w-full">   
    <nav className="flex justify-between w-full bg-blue-500 text-white p-2 mb-2">  
          <Link href="/explore">
            <div className="px-4 py-1">
            LOGO
            </div>         
            </Link>
            <div>
                <button className="button-secondary" onClick={() => logout()}>Cerrar Sesión</button>
            </div>       
    </nav>
    </header>
    </>


}

export default NavBar;