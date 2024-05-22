import { MessageType } from "@/types/message.types"; //importo mis propiedades tipadas
import Image from "next/image";
import Link from "next/link";

type MessageProps = {
    message: MessageType; //tipado que viene desde message.types 
}

const Message = ({message} : MessageProps ) => { //indico el tipado para el objeto message
    return <div className="grid grid-cols-12">
    <div className="w-full mt-1 text-center mb-4  h-20 col-span-2 flex items-center justify-center">
                <Image 
                    className="rounded-full"
                    src={message.user.photoUrl}
                    width={60}
                      height={60}
                    priority                   
                    alt="Picture of the author"
                />
            </div>
     <div className="flex flex-col  mt-2 col-span-10">
        <div className="flex">
        <h3>
            {message.user.name}
        </h3>
        <div className="text-mb ml-2 text-gray-600 cursor-pointer">
            <Link href={`/users/${message.user.username}`}>@{message.user.username} </Link>
        </div>
        </div>
        <p>{message.message}</p>       
     </div>                       
    </div>
}

export default Message;