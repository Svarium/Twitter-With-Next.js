import { UserType } from "@/types/user.types";
import { httpGetPublic } from "../common/http.service";
import { URLSearchParams } from "url";
import { TrendingHashtag } from "@/types/hash.types";
import { PageType } from "@/types/pagination.types";


class exploreAPI {

    getTrendingHashtags = async (page:number, size:number) : Promise<PageType<TrendingHashtag>> => httpGetPublic(`/explore/trending`, new URLSearchParams({page:`${page}`, size:`${size}`}));
    getFollowRecomendations = async (page:number, size:number) : Promise<PageType<TrendingHashtag>> => httpGetPublic(`/explore/follow-recommendations`, new URLSearchParams({page:`${page}`, size:`${size}`}));
    
}

const ExploreApi = new exploreAPI();

export default ExploreApi;