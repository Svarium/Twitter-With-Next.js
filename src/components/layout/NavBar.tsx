import Link from "next/link";



const NavBar = () => {
    return <>
        <header className="w-full">   
    <nav className="w-full bg-blue-500 text-white p-2 mb-2">    
          <div>
          <Link href="/explore">
            <div className="px-4 py-1">
            LOGO
            </div>         
            </Link>
        </div>
    </nav>
    </header>
    </>


}

export default NavBar;