import { TrendingUserType, UserType } from "@/types/user.types";
import { TrendingHashtag } from "@/types/hash.types";
import { PageType } from "@/types/pagination.types";
import httpInternalApi from "../common/http.internal.service";
import httpExternalApi from "../common/http.external.service";


class exploreAPI {

    getTrendingHashtags = async (page:number, size:number) : Promise<PageType<TrendingHashtag>> => httpInternalApi.httpGetPublic(`/explore/trending`, new URLSearchParams({page:`${page}`, size:`${size}`}));
    getFollowRecomendations = async (page:number, size:number) : Promise<PageType<TrendingUserType>> => httpInternalApi.httpGetPublic(`/explore/follow-recommendations`, new URLSearchParams({page:`${page}`, size:`${size}`}));    
    getMyFollowRecomendations = async (page:number, size:number, accessToken:string) : Promise<PageType<TrendingUserType>> => httpInternalApi.httpGet(`/explore/follow-recommendations`, new URLSearchParams({page:`${page}`, size:`${size}`}), accessToken);    
}

const ExploreApi = new exploreAPI();

export default ExploreApi;