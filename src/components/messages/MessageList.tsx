
import useMessages from "@/contexts/message.content";
import Message from "./Message";



const MessageList = () => {
  const {messagePage} = useMessages();
    return <>
    {
    messagePage.content?.map((message, index) =>
      <Message key={`${index}`} message={message}></Message>
    )
  }    
    </>
}

export default MessageList;