import Message from "@/components/messages/Message";
import UserTabs from "@/components/users/UserTabs";
import UserApi from "@/services/users/users.service";

import Image from "next/image";
import Link from "next/link";




const UserPage = async ({ params }: { params: { username: string } }) => {

    const userPromise =  UserApi.getUserData(params.username); 
    const userMessagesPromise =  UserApi.getUserMessages(params.username);
    const userMessagesRepliesPromise =  UserApi.getUserMessagesReplies(params.username);

    const [user, userMessages, userMessagesReplies] = await Promise.all([userPromise, userMessagesPromise, userMessagesRepliesPromise]);


    return <main className="flex flex-col bg-gray-100 p-8">

        <section className="flex flex-col mb-8">

            <div className="rounded-full  text-center mb-4 block relative w-20 h-20">
                <Image 
                    className="rounded-full"
                    src={user.photoUrl}                    
                    fill
                    priority                   
                    alt="Picture of the author"
                />
            </div>
            <h2 className="mb-1">
                {user.name}
            </h2>
            <div className="text-mb mb-4 text-gray-600 cursor-pointer">
                <Link href={`/users/${user.username}`}>@{user.username} </Link>
            </div>
            <div className="mb-2">
                @{user.bio}
            </div>
            <div className="flex justify-between mb-4">
                <div><span className="font-semibold">{user.followersCount}</span> Seguidores</div>
                <div><span className="font-semibold">{user.followingCount}</span>{user.followingCount} Siguiendo</div>
            </div>
        </section>
        <UserTabs messages={userMessages.content} replies={userMessagesReplies.content} />
    </main>
}

export default UserPage;