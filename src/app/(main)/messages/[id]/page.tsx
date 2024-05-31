import Message from "@/components/messages/Message";
import messageApi from "@/services/messages/messages.service";


const MessagePage = async ({params}:{params:{id:string}}) => {


    const repliesPagePromise = messageApi.getMessageReplies(params.id, 0, 10)
    const MessagePromise =  messageApi.getMessage(params.id);
  
    const [repliesPage, message] = await Promise.all([repliesPagePromise, MessagePromise]);


    return <main className="flex flex-col bg-gray-100 p-8">

    <section className="flex flex-col mb-8">
    <Message message={message}></Message>      
    </section>

        <div>
            {
                repliesPage.content.map((message, index) =>
                    <Message key={`${index}`} message={message}></Message>
                )
            }
        </div>
</main>
    
}

export default MessagePage;