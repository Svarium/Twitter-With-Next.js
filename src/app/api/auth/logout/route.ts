import authService from "@/services/auth/auth.service";
import { type NextRequest } from "next/server";


export async function POST(request: NextRequest) {  
   

   try { 
      
      const authCookie = request.cookies.get('SocialSessionID');
      if(authCookie){
         const sessionId = authCookie.value;
         await authService.logout(sessionId)
      }   
     
      const expireDate = new Date(1970,1,1,1,1,1)

      return new Response(JSON.stringify({}),{
         status:200,
         headers: {'Set-Cookie': `SocialSessionID=; Expires=${expireDate.toUTCString()};Domain=localhost; HttpOnly; Path=/`},
      })


   } catch (e) {    
     
         return new Response(JSON.stringify({error:'Internal server error'}), {
            status:500,           
         })
     
   }
  
}