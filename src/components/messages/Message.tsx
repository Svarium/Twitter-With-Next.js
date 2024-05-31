"use client";

import { MessageType } from "@/types/message.types"; //importo mis propiedades tipadas
import UserCard, { UserCardLayout } from "../users/UserCard";
import RepliesCounter from "../counters/RepliesCounter";
import { useRouter } from "next/navigation";

type MessageProps = {
    message: MessageType; //tipado que viene desde message.types 
}

const Message = ({message} : MessageProps ) => { //indico el tipado para el objeto message
    
    const router = useRouter()

    

    return <UserCard user={message.user}  layout={UserCardLayout.HORIZONTAL}> 
    <div className="flex flex-col">
    <p>{message.message}</p> 
    <div className="flex justify-end">
            {<RepliesCounter 
            count={message.repliesCount} 
            onClick={() => router.push(`/messages/${message.id}`)}
            />}
        </div>   
    </div>
    </UserCard>   
}

export default Message;