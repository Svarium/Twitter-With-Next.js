import { headers} from "next/headers";
import httpInternalApi from "@/services/common/http.internal.service";
import { split } from "postcss/lib/list";

export async function POST(request: Request) {
   const url =  request.url.split('/proxy')[1];
   console.log(url);   
   const accessToken = headers().get('x-social-access-token');
   const body = await  request.json();   
  
    const response = await  httpInternalApi.httpPost(url, body, accessToken ?? undefined);
     
      return new Response(JSON.stringify(response),{
         status:200
      })  
  
}