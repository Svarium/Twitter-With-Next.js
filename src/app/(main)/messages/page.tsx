import Message from "@/components/messages/Message";
import Link from "next/link";
 
 const MessagePage = () => {
 
    const  messages = [
        {
            name: 'Ben el Rápido',
            username:'Ben',
            message: 'Tercer mensaje',
            repliesCount: 13
        },
        {
            name: 'Karsa Orlong',
            username:'Karsa',
            message: 'Cuarto mensaje',
            repliesCount: 13,
        },
    ]

  return <>
    <main className="flex flex-col bg-gray-100 p-8">

    <section className="flex flex-col mb-8">

            {
                messages.map((message, index) =>
                    <Message key={`${index}`} message={message}></Message>
                )
            }
        
    </section>

    </main>
    
    </>
  
}
 export default MessagePage;