import authApi from "@/services/auth/auth.api";
import { AccessDeniedError } from "@/services/common/http.errors";
import { createClient } from "redis";
import * as yup from "yup";
import {v4 as uuidv4} from 'uuid';
import authService from "@/services/auth/auth.service";

const schema = yup.object({
   username: yup.string().required(),
   password: yup.string().required()
}).required();

const client = createClient({
   url:'redis://default:SocialNetworkPass@localhost:6379'
})

client.connect().then(() => {
   console.log('connected to redis');    
 })  


export async function POST(request: Request) {

   const {username, password} = await schema.validate(await request.json());
   

   try {      
      const loginResponse = await authService.authenticate(username, password) 

      const authCookie = `SocialSessionID=${loginResponse.sessionId}; Expires=${loginResponse.expireAt};Domain=localhost; HttpOnly; Path=/`; ;      
      
     
      return new Response(JSON.stringify(loginResponse.user),{
         status:200,
         headers: {'Set-Cookie': authCookie},
      })


   } catch (e) {
      if (e instanceof AccessDeniedError) {
         return new Response(JSON.stringify({error:'Invalid credentials for user: ' + username}), {
            status:403,           
         })

      } else {
         return new Response(JSON.stringify({error:'Internal server error'}), {
            status:500,           
         })
      }
   }
  
}