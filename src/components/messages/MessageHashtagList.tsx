import ExploreApi from "@/services/explore/explore.service"
import { TrendingHashtag } from "@/types/hash.types"
import { PageType } from "@/types/pagination.types"
import { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import MessageHashtag from "./MessageHashtag"

type MessageHashtagListProps ={
    initialPage: PageType<TrendingHashtag>
}

const MessageHashtagList = ({initialPage}: MessageHashtagListProps) => {
    const [page, setPage] = useState<PageType<TrendingHashtag>>(initialPage)
    const [hashtags, setHashtag] = useState<TrendingHashtag[]>(initialPage.content);
   

    const fetchData = async () => {
        const pageNumber = page.pagination.page + 1
         const response = await ExploreApi.getTrendingHashtags(pageNumber, 5)
         setPage(response);
         setHashtag([...hashtags, ...response.content])    
     }
 
     const refresh = async () => {       
          const response = await ExploreApi.getTrendingHashtags(0, 5)
          setPage(response);
          setHashtag(response.content)          
      }

    return <InfiniteScroll
    dataLength={hashtags.length} //This is important field to render the next data
    next={fetchData}
    hasMore={!page.pagination.last}
    loader={<h4>Cargando más mensajes...</h4>}
    endMessage={
      <p style={{ textAlign: 'center' }}>
        <b>ups! has llegado al final</b>
      </p>
    }
    // below props only if you need pull down functionality
    refreshFunction={refresh}
    pullDownToRefresh
    pullDownToRefreshThreshold={50}
    pullDownToRefreshContent={
      <h3 style={{ textAlign: 'center' }}>&#8595; Arrastra hacia abajo para refrescar</h3>
    }
    releaseToRefreshContent={
      <h3 style={{ textAlign: 'center' }}>&#8593; Suelta para refrescar</h3>
    }
  >
    {
    hashtags.map((hash, index) =>
        <MessageHashtag hash={hash} key={`explore-hash-${index}`}/>
        )
  }
  </InfiniteScroll>   
}

export default MessageHashtagList