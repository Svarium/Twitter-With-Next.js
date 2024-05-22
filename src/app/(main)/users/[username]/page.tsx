import Message from "@/components/messages/Message";
import UserTabs from "@/components/users/UserTabs";
import Image from "next/image";
import Link from "next/link";


const getUserData = async (username:string) : Promise<UserType> => {
    const res = await fetch(`http://localhost:8080/api/public/users/${username}`)

    if(!res.ok){
        throw new Error('Failed to retrieve users');
    }

   return res.json();
}

const UserPage = async ({ params }: { params: { username: string } }) => {

    const user = await getUserData(params.username) 

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
        <UserTabs messages={[]} replies={[]} />
    </main>
}

export default UserPage;