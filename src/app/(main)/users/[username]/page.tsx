import Message from "@/components/messages/Message";
import UserTabs from "@/components/users/UserTabs";
import Image from "next/image";
import Link from "next/link";
import ProfilePic from "../../../../../public/anomander-profile.jpg";

const UserPage = ({ params }: { params: { username: string } }) => {

    const user = {
        username: params.username,
        name: 'Anomander Rake',
        bio: 'Soy Anomander Rake, hijo de oscuridad y llevo mi espada dragnipur en mi espalda.',
        followersCount: 15,
        followingCount: 3,
        messages: [
            {
                name: 'Anomander Rake',
                username: 'Anomander',
                message: 'Segundo mensaje',
                repliesCount: 13
            },
            {
                name: 'Anomander Rake',
                username: 'Anomander',
                message: 'Primer mensaje',
                repliesCount: 13,
            },
        ],
        replies: [{
            message: 'Mi respuesta',
            repliesCount: 0,
        },
        ]

    }

    return <main className="flex flex-col bg-gray-100 p-8">

        <section className="flex flex-col mb-8">

            <div className="rounded-full  text-center mb-4 block relative w-20 h-20">
                <Image 
                    className="rounded-full"
                    src={ProfilePic}                    
                    fill
                    priority
                    placeholder="blur"
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
        <UserTabs messages={user.messages} replies={[]} />
    </main>
}

export default UserPage;