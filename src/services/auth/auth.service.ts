import { createClient, RedisClientType } from "redis";
import { AccessDeniedError } from "../common/http.errors";
import { AuthResponseType } from "@/types/auth.types";
import {v4 as uuidv4} from 'uuid';
import authApi from "./auth.api";

const TEN_MINUTE = 60 * 10;


class AuthService {

    private client: RedisClientType;

    constructor(){
         this.client = createClient({
            url:'redis://default:SocialNetworkPass@localhost:6379'
         })
          
          this.client.connect().then(() => {
            console.log('connected to redis');    
          }) 
    }

    async  authenticate(username: string, password:string): Promise<AuthResponseType> {     
           const loginResponse = await authApi.loginInternal(username, password); 
           const sessionId = uuidv4();   
           const now = new Date();
           const expireAt = new Date(now.getTime() + TEN_MINUTE * 1000).toUTCString();
           this.client.set(sessionId, loginResponse.accessToken, {EX: TEN_MINUTE})       
             
           return {
            sessionId:sessionId,
            user: loginResponse.user,
            expireAt: expireAt
        };         
        
      
    }

        async  getAccessToken(sessionId?: string): Promise<string> {       
        if(!sessionId) throw new AccessDeniedError("Session ID is not valid anymore")    
        const accesToken = await this.client.get(sessionId)        
        if(!accesToken) throw new AccessDeniedError("Session ID is not valid anymore")
        return accesToken
    }
   
}

const authService = new AuthService();

export default authService;