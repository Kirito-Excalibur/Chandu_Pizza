import { Devvit } from "@devvit/public-api";

interface FinalProps
{
    page:string;
    updateParentValue: (newValue: string) => void;
    score?:string;
}

export default function Final({ page, updateParentValue,score }: FinalProps) {
  return (
    <text>Game Finished</text>
  )
}
