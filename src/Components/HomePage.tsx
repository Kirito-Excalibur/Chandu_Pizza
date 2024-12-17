import { Devvit } from "@devvit/public-api";

interface HomePageProps
{
    page:string;
    updateParentValue: (newValue: string) => void;
    userName:string|null;
}




export function HomePage({page,updateParentValue,userName}:HomePageProps){

    return(
        <vstack height="100%" width="100%" gap="medium" alignment="center middle" backgroundColor="Yellow-200">
            <text style="heading" size="xxlarge" color="black">Chandu's Pizza</text>
            <button appearance="media" icon="play-fill"  onPress={()=>{
                updateParentValue("First")
            }}>Let's Get Cooking!</button>
            <text color="black">{typeof userName==="string"?userName:"Simon of the Lost world"}</text>
        </vstack>
    )
}