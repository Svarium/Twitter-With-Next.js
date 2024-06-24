import UserApi from "@/services/users/users.service";
import UserPageContainerAsync from "@/components/users/UserPageContainerAsync";
import {headers} from 'next/headers';



const ProfilePage = async () => { 
    const accessToken = headers().get('x-social-access-token') ?? '';  
    const me = await UserApi.getMeInternal(accessToken);
    return <UserPageContainerAsync username={me.username} />
}

export default ProfilePage;