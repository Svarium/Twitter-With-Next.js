import { MessageType } from "@/types/message.types"; //importo mis propiedades tipadas
import Link from "next/link";

type MessageProps = {
    message: MessageType; //tipado que viene desde message.types 
}

const Message = ({message} : MessageProps ) => { //indico el tipado para el objeto message
    return <div className="flex">
    <div className="rounded-full p-5 bg-gray-300 w-16 text-center mb-4">
<span className="font-semibold text-sm">AR</span>
     </div>
     <div className="flex flex-col ml-4 mt-2">
        <div className="flex">
        <h3>
            {message.name}
        </h3>
        <div className="text-mb ml-2 text-gray-600 cursor-pointer">
            <Link href={`/users/${message.username}`}>@{message.username} </Link>
        </div>
        </div>
        <p>{message.message}</p>
     </div>                       
    </div>
}

export default Message;