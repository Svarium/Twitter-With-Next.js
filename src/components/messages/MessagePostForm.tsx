 'use client'

import useMessages from "@/contexts/message.content";
import messageApi from "@/services/messages/messages.service";
import { UserType } from "@/types/user.types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type MessagePostFormType = {
    parentId?:string
    currentUser?: UserType
}

type FormData = {
    message:string,   
   
}


const MessagePostForm = ({parentId, currentUser}: MessagePostFormType) => {  
    const router = useRouter();
    const {postMessage} = useMessages();     
    const {register, handleSubmit, resetField, setFocus} = useForm<FormData>();

    useEffect(() => {
        setFocus('message')
    }, [setFocus])

    const onSubmit = async (data:FormData) => {
     await postMessage(data.message, parentId);
    resetField("message")  
    setFocus("message")
    }

    const goToLogin = () => {
        router.push('/login')
        router.refresh();
    }

    if(!currentUser){
        return <><div  className="mb-4 flex-col items-center">
            <h3>
                Inicia Sesión para escribir un mensaje
            </h3>
                 <button type="submit" className="button-primary  font-semibold w-fit mt-4" onClick={() => goToLogin()}>Iniciar Sesión</button>  
            </div></>
    }
    
    return <div  className="mb-4 grid grid-cols-12">
    <div className="w-full h-full mt-1 text-center mb-4 col-span-2 flex items-center justify-center">
        <Image
            className="rounded-full"
            src={currentUser.photoUrl}
            width={60}
            height={60}
            priority
            alt={""}
        />
    </div>
    <div className="flex flex-col ml-4 mt-2 col-span-10">
    <form onSubmit={handleSubmit(onSubmit)}>
     <textarea 
     rows={4} 
     className="mb-4 p-4 rounded bg-gray-50 w-full border border-gray-200 resize-none"
     placeholder="¿Qué estas pensando?"   
     {...register("message", {
        required:true
     })}
      />   
      <div className="flex justify-end">
    <button type="submit" className="button-primary  font-semibold w-fit" >Postear</button>      
      </div>
      </form>
    </div>
</div>

      
           
   
}

export default MessagePostForm;