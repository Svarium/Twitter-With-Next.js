"use client"

import { LinkType } from "@/types/link.types";
import { useRouter } from "next/navigation";


type MenuProps = {
    links:LinkType[]
}

const Menu = ({links}: MenuProps) => {

    const router = useRouter();

    const onGoToLink = (href:string) => {
        router.push(href);
        router.refresh();
    }

    return <nav className="flex flex-col w-full">
        <ul className="mb-4 w-full">
            {links && links.map((link, index) => 
            <li key={`menu-link${index}`} 
            className="text-2xl w-full cursor-pointer  hover:bg-blue-400 hover:text-white">
               <div className="p-2  w-full flex" onClick={() => onGoToLink(link.href)}>{link.title}</div>
                </li> 
            )}           
        </ul>
        <button className="button-primary uppercase font-semibold">Postear</button>
    </nav>
}

export default Menu