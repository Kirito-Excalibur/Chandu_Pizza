import { Devvit } from "@devvit/public-api";

interface HomePageProps
{
    page:string;
    updateParentValue: (newValue: string) => void;
}

export function HomePage({page,updateParentValue}:HomePageProps){

    return(
        <vstack height="100%" width="100%" gap="medium" alignment="center middle" backgroundColor="Yellow-200">
            <text style="heading" size="xxlarge">Chandu's Pizza</text>
            <button icon="play-fill"  onPress={()=>{
                updateParentValue("First")
            }}>Let's Get Cooking!</button>
        </vstack>
    )
}