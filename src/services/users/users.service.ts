import { TrendingUserType, UserType } from "@/types/user.types";
import { PageType } from "@/types/pagination.types";
import { MessageType } from "@/types/message.types";
import httpInternalApi from "../common/http.internal.service";


class UserAPI {
    
    getMeInternal = async (accesToken:string) : Promise<UserType> => httpInternalApi.httpGet(`/me`, undefined, accesToken);
    getUserData = async (username:string) : Promise<UserType> => httpInternalApi.httpGetPublic(`/users/${username}`);
    getUserMessages = async (username:string) : Promise<PageType<MessageType>> => httpInternalApi.httpGetPublic(`/users/${username}/messages`);
    getUserMessagesReplies = async (username:string) : Promise<PageType<MessageType>> => httpInternalApi.httpGetPublic(`/users/${username}/messages/replies`);
    getUserFollowers = async (username:string) : Promise<PageType<TrendingUserType>> => httpInternalApi.httpGetPublic(`/users/${username}/followers`);
    getUserFollowing = async (username:string) : Promise<PageType<TrendingUserType>> => httpInternalApi.httpGetPublic(`/users/${username}/following`);

}

const UserApi = new UserAPI();

export default UserApi;