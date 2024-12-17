import { Devvit, useState } from "@devvit/public-api";

interface LeaderBoardProps {
    page: string;
    updateParentValue: (newValue: string) => void;
    score?: string;
    context:Devvit.Context;
  }

export default  function LeaderBoard({page,updateParentValue,score,context}:LeaderBoardProps)
{
    const[data,setData]=useState([{member:"mew",score:20}])

    const getLeaderBoard=async()=>{

        const leaderboard=await context.redis.zRange('leaderboard',0,4,{
            reverse:true,
            by:'score'
        })

        setData(leaderboard)
    }

  getLeaderBoard();

    return(
        <vstack height="100%" alignment="middle center" backgroundColor="Yellow-200">
            <text size="xlarge" weight="bold">Leaderboard</text>
           
            {data.map((index)=>{
                return(
                
                    <hstack gap="medium">
                    <text>{index.member}</text>
                    <text>{index.score}</text>  
                    </hstack>
                   
                )
})}

        </vstack>
    )

}