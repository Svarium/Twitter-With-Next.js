import messageApi from "@/services/messages/messages.service";
import { MessageType } from "@/types/message.types";
import { PageType } from "@/types/pagination.types";
import { createContext, FC, PropsWithChildren, useCallback, useContext, useEffect, useMemo, useState } from "react"

export type MessageStates = {
    message?: MessageType
    messages:MessageType[]
    messagePage: PageType<MessageType>
    postMessage: (message:string, parentId?:string) => void
    fetchNextPage: () => void
    refresh: () => void

}

const MessageContext = createContext<MessageStates | undefined>(undefined);

type MessageProvidersProps = PropsWithChildren & {
initalPage: PageType<MessageType>
initialMessage?:MessageType
}

export const MessageProvider: FC<MessageProvidersProps>
        = ({initalPage, initialMessage ,children}: MessageProvidersProps) =>{

            const [messagePage, setMessagePage] =
            useState<PageType<MessageType>>(initalPage)

            const [messages, setMessages] = useState<MessageType[]>(initalPage.content);

            const [message, setMessage] =
            useState<MessageType | undefined>(initialMessage)

            useEffect(() => {   
                setMessagePage(initalPage)
                setMessages(initalPage.content)
                
             }, [initalPage])

            const postMessage = useCallback(async(textMessage: string, parentId?:string) => {
                const response = await messageApi.postMessage(textMessage, parentId);    
                setMessages([response, ...messagePage.content])           
               
                if(message && message.id === parentId){
                    setMessage({
                        ...message,
                        repliesCount: message.repliesCount + 1
                    })
                }
            }, [messagePage, message])

            const fetchNextPage = useCallback( async () => {
                const page = messagePage.pagination.page + 1
                 const response = await messageApi.getMessageFeed(page, 10)
                 setMessagePage(response);
                 setMessages([...messages, ...response.content])
               
             }, [messagePage.pagination.page, messages])
         
             const refresh = useCallback( async () => {       
                  const response = await messageApi.getMessageFeed(0, 10)
                  setMessagePage(response);
                  setMessages(response.content)
                 
              }, [])

          

         const value = useMemo(() => ({
            message,
            messages,
            messagePage,
            postMessage,
            fetchNextPage,
            refresh
         }),[message, messages, messagePage, postMessage, fetchNextPage, refresh])   
            return <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
        }

const useMessages = ():MessageStates => {
    const context = useContext(MessageContext)
    if(!context){
        throw new Error("useMessages must be used within a Message")
    }

    return context;
}

export default useMessages