import UserApi from "@/services/users/users.service";
import UserPageContainerAsync from "@/components/users/UserPageContainerAsync";
import { cookies } from "next/headers";
import authService from "@/services/auth/auth.service";



const ProfilePage = async () => { 

    const cookieStore = cookies();
    const sessionId = cookieStore.get('SocialSessionID')?.value ?? '';  
    const accessToken = await authService.getAccessToken(sessionId)  

    
    if(!accessToken) return new Response(JSON.stringify({error: 'access denied'}),{
        status:403,
       })

    const me = await UserApi.getMeInternal(accessToken);

    return <UserPageContainerAsync username={me.username} />
}

export default ProfilePage;