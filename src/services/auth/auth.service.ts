import { httpPostPublic } from "../common/http.service";
import { LoginResponseType } from "@/types/auth.types";

class AuthAPI {

    login = async (username:string, password:string) : Promise<LoginResponseType> => 
        httpPostPublic(`/auth/login`,{username:username, password:password});   
}

const authApi = new AuthAPI();

export default authApi;