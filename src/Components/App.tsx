import { Devvit, useState } from "@devvit/public-api";
import { First } from "./First.js";
import { HomePage } from "./HomePage.js";
import Final from "./Final.js";

enum Page{
   HomePage="HomePage",
    First="First",
    Final="Final"
}



export function App(ctx:Devvit.Context){
    const [page,setPage]=useState(Page.HomePage)

    const updateValue = (newValue: string) => {
        setPage(newValue); // Update parent state
      };

    const ui=ctx.ui;
    // return (
    //     // <vstack height="100%" width="100%" gap="medium" alignment="center middle">
    //     //   <text style="heading" size="xxlarge">
    //     //    {questions[Math.floor(Math.random()*questions.length)]}
    //     //   </text>
  
    //     //   <button icon="add-emoji" appearance="primary" onPress={()=>{
    //     //     // ui.showToast({text:"Button is pressed!!!"})
    //     //   }}/>
    //     //     <button icon="activity-fill" appearance="primary" onPress={()=>{
    //     //     ui.navigateTo("https://www.google.com")
    //     //   }}/>
    //     // </vstack>

        
    //   );

    if (page==Page.First)
    {
        return <First page={Page.First} updateParentValue={updateValue}/>
    }
    else if(page==Page.HomePage)
    {
        return <HomePage page={Page.HomePage} updateParentValue={updateValue}/>
    }
    else if(page==Page.Final)
    {
        return <Final page={Page.Final} updateParentValue={updateValue}/>
    }

}