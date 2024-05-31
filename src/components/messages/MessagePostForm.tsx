 'use client'

import messageApi from "@/services/messages/messages.service";
import Image from "next/image";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type MessagePostFormType = {
    parentId?:string
}

type FormData = {
    message:string,   
}


const MessagePostForm = ({parentId}: MessagePostFormType) => {  
     
    const {register, handleSubmit, resetField, setFocus} = useForm<FormData>();

    useEffect(() => {
        setFocus('message')
    }, [])

    const onSubmit = async (data:FormData) => {
    const response = await messageApi.postMessage(data.message, parentId);
    resetField("message")  
    setFocus("message")
    }
    
    return <div  className="mb-4 grid grid-cols-12">
    <div className="w-full h-full mt-1 text-center mb-4 col-span-2 flex items-center justify-center">
        <Image
            className="rounded-full"
            src={"https://i.pinimg.com/564x/62/ce/55/62ce5561877ab6a4587a2b7dedd4c5ca.jpg"}
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
    <button type="submit" className="button-primary  font-semibold w-fit">Postear</button>      
      </div>
      </form>
    </div>
</div>

      
           
   
}

export default MessagePostForm;