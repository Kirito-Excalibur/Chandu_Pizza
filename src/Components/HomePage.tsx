import { Devvit } from "@devvit/public-api";

interface HomePageProps
{
    page:string;
    updateParentValue: (newValue: string) => void;
    userName:string|null;
    context: Devvit.Context;
}




export function HomePage({page,updateParentValue,userName,context}:HomePageProps){

    async function clearRedis(context: Devvit.Context) {
        const { redis } = context;
       
        try {
            await redis.zRem("leaderboard",["Simon"])
        } catch (error) {
            console.log(error)
        }
        
        console.log(`Cleared keys from Redis`);
      }

    return(
        <vstack height="100%" width="100%" gap="medium" alignment="center middle" backgroundColor="Yellow-200">
            <text style="heading" size="xxlarge" color="black">Chandu's Pizza</text>
            {/* <button onPress={()=>clearRedis(context)}>Clean Redis</button> */}
            <button appearance="media" icon="play-fill"  onPress={()=>{
                updateParentValue("First")
            }}>Let's Get Cooking!</button>
            <text weight="bold" color="black">{typeof userName==="string"?userName:"Simon of the Lost world"}</text>
        </vstack>
    )
}