import Link from "next/link";
import PostsCounter from "../counters/PostsCounter";
import { TrendingHashtag } from "@/types/hash.types";
import { TrendingUserType } from "@/types/user.types";
import Image from "next/image";
import UserCard, { UserCardLayout } from "../users/UserCard";

type ExploreUsersProps = {
    users: TrendingUserType[]
}

const ExploreUsers = ({ users }: ExploreUsersProps) => {
    if (!users || users.length === 0) return <></>
    return <>
        <div className="bg-gray-200 rounded-lg px-8 py-4" style={{ minWidth: 250 }}>
            <h2 className="mb-2">A quién seguir</h2>
            {users.slice(0, 4).map((user, index) =>
                <UserCard user={user} key={`trending-user-${index}`} layout={UserCardLayout.VERTICAL}/>                
            )}
            {users.length > 4 &&
                <Link href="/explorar?type=hash">
                    <div className="text-center link-primary">
                        Ver más
                    </div>
                </Link>
            }

        </div>
    </>
}


export default ExploreUsers;