import { Devvit, useAsync, useState } from "@devvit/public-api";

interface LeaderBoardProps {
  page: string;
  updateParentValue: (newValue: string) => void;
  score?: string;
  context: Devvit.Context;
}

export default function LeaderBoard({
  page,
  updateParentValue,
  score,
  context,
}: LeaderBoardProps) {
  const {
    data: leaderboards,
    loading,
    error,
  } = useAsync(async () =>(
      await context.redis.zRange("leaderboard", 0, 30, { reverse: true, by: "score"}))
  );

  // const[data,setData]=useState([{member:"mew",score:20}])

  // const getLeaderBoard=async()=>{

  //     const leaderboard=await context.redis.zRange('leaderboard',0,4,{
  //         reverse:true,
  //         by:'score'
  //     })

  //     setData(leaderboard)
  // }

  //   getLeaderBoard();

  const AddScore = async (context: Devvit.Context) => {
    try {
      await context.redis.zAdd("leaderboard", { member: "Simon", score: 25 });
      console.log(`Added Nikhil with score 25 to leaderboard`);
    } catch (error) {
      console.error(`Error adding to leaderboard: ${error}`);
    }
  };

  const checker =  async () => {
    const scores=await context.redis.zRange("leaderboard",0,30,{by:"score"})
    // console.log(scores[0].member);


    console.log(scores)

  };

  return (
    <vstack
      height="100%"
      alignment="middle center"
      backgroundColor="Yellow-200"
    >
      {/* <button
        onPress={() => {
          checker();
        }}
      >
        Function Checker
      </button>
      <button onPress={() => AddScore(context)}>Add Score</button> */}
      <text size="xlarge" color="black" weight="bold">
        Leaderboard
      </text>

{loading && <text>Loading Bro Chill</text>}

      {leaderboards &&
        leaderboards.map((index) => {
          return (
            <hstack gap="medium">
              <text color="black">{index.member}</text>
              <text color="black">{index.score}</text>
            </hstack>
          );
        })}
    </vstack>
  );
}
