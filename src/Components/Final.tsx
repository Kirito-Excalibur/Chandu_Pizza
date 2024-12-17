import { Devvit } from "@devvit/public-api";

interface FinalProps {
  page: string;
  updateParentValue: (newValue: string) => void;
  score?: string;
}

export default function Final({ page, updateParentValue, score }: FinalProps) {
  return (
    <vstack backgroundColor="Yellow-200" gap="medium" height="100%" alignment="middle center">
      <text color="black" size="xxlarge" weight="bold">Game Finished</text>
      <button  appearance="plain" icon="dashboard-fill" onPress={()=>updateParentValue("LeaderBoard")}/>
   
    </vstack>
  );
}
