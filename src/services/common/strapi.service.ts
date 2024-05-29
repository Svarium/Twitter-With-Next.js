import { URLSearchParams } from "url";

const API_URL = "http://localhost:1337/api";



export const strapiGet = async <T>(endpoint: string, params?:URLSearchParams) : Promise<T>  => {
    const res = await fetch(`${API_URL}${endpoint}${params ? `?${params}` : ''}`,{
        headers:{
            'Authorization': `Bearer 56aea706dded18e47aed39cc99ae67ad558a0e6772253c8e22a233ed0b1c76f82e29168671b005a0f5b499cdf4e4d83c4a96082ff9242a247d8cbcd754c0087a1f6c1db82ecab14327576fe01db619a2a3f52f59cffcb0ab306c2c4f1e9a172f2002bd979f386d2d6df9766ffab7af55fed21463b5e776e4fe6170e521dba94c`
        }
    });

   
    

    if(!res.ok){
        throw new Error('Failed to retrieve: ' + endpoint);
    }

    return res.json()
}



