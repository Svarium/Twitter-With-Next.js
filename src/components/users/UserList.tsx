import InfiniteScroll from "react-infinite-scroll-component";
import UserCard, { UserCardLayout } from "./UserCard";
import { TrendingUserType, UserType } from "@/types/user.types";
import { useState } from "react";
import { PageType } from "@/types/pagination.types";
import ExploreApi from "@/services/explore/explore.service";

type UserListProps = {
    initialUserPage : PageType<TrendingUserType>
}



const UserList = ({initialUserPage}: UserListProps) => {
    const [page, setPage] = useState<PageType<TrendingUserType>>(initialUserPage)
    const [users, setUsers] = useState<TrendingUserType[]>(initialUserPage.content);
   

    const fetchData = async () => {
        const pageNumber = page.pagination.page + 1
         const response = await ExploreApi.getFollowRecomendations(pageNumber, 5)
         setPage(response);
         setUsers([...users, ...response.content])    
     }
 
     const refresh = async () => {       
          const response = await ExploreApi.getFollowRecomendations(0, 5)
          setPage(response);
          setUsers(response.content)          
      }

    return <InfiniteScroll
    dataLength={users.length} //This is important field to render the next data
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
    users.map((user, index) =>
        <UserCard key={`explore-user-${index}`} user={user} layout={UserCardLayout.VERTICAL}></UserCard>
        )
  }
  </InfiniteScroll>   
    
}

export default UserList;