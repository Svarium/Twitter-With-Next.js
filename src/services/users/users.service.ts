import { UserType } from "@/types/user.types";
import { httpGetPublic } from "../common/http.service";
import { PageType } from "@/types/pagination.types";
import { MessageType } from "@/types/message.types";

class UserAPI {

    getUserData = async (username:string) : Promise<UserType> => httpGetPublic(`/users/${username}`);
    getUserMessages = async (username:string) : Promise<PageType<MessageType>> => httpGetPublic(`/users/${username}/messages`);
    getUserMessagesReplies = async (username:string) : Promise<PageType<MessageType>> => httpGetPublic(`/users/${username}/messages/replies`);

}

const UserApi = new UserAPI();

export default UserApi;