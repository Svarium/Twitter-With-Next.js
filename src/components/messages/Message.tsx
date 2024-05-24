import { MessageType } from "@/types/message.types"; //importo mis propiedades tipadas
import Image from "next/image";
import Link from "next/link";
import UserCard, { UserCardLayout } from "../users/UserCard";

type MessageProps = {
    message: MessageType; //tipado que viene desde message.types 
}

const Message = ({message} : MessageProps ) => { //indico el tipado para el objeto message

    return <UserCard user={message.user}  layout={UserCardLayout.HORIZONTAL}> 
    <p>{message.message}</p>    
    </UserCard>   
}

export default Message;