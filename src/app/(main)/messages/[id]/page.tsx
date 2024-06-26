import messageApi from "@/services/messages/messages.service";
import MessagePageContainer from "./page.container";
import { headers } from "next/headers";
import UserApi from "@/services/users/users.service";


const MessagePage = async ({ params }: { params: { id: string } }) => {

    const accessToken = headers().get('x-social-access-token') ?? null;  
    const currentUser = accessToken ?  await UserApi.getMeInternal(accessToken) : undefined;


    const repliesPagePromise = messageApi.getMessageReplies(params.id, 0, 10)
    const MessagePromise = messageApi.getMessage(params.id);

    const [repliesPage, message] = await Promise.all([repliesPagePromise, MessagePromise]);


    return <main className="flex flex-col bg-gray-100 p-8">

        <MessagePageContainer message={message}
         repliesPage={repliesPage}
         parentId={params.id}
         currentUser={currentUser}
        />       
    </main>

}

export default MessagePage;