import ExploreTabs from "@/components/explore/ExploreTabs";
import ExploreApi from "@/services/explore/explore.service";


 const ExplorePage = async ({searchParams}:{searchParams?: {[key:string]: string | undefined}}) => {    

const hashesPromise = ExploreApi.getTrendingHashtags(0,20);
const usersPromise =  ExploreApi.getFollowRecomendations(0,20);
const [hashes, users] = await Promise.all([hashesPromise, usersPromise]);

  return <>
    <main className="flex flex-col bg-gray-100 p-8">

    <section className="flex flex-col mb-8">   
        <ExploreTabs 
        hashtag={hashes.content} 
        users={users.content} 
       initialTab={searchParams?.type} /> 
    </section>
    </main>    
    </>
  
}
 export default ExplorePage;