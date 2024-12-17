// Learn more at developers.reddit.com/docs
import { Devvit, useState } from "@devvit/public-api";
import {questions} from "./Question/questions.js"
import {App} from "./Components/App.js"
Devvit.configure({
  redditAPI: true,
  redis:true,
});

// Add a menu item to the subreddit menu for instantiating the new experience post
Devvit.addMenuItem({
  label: "Add my counter",
  location: "subreddit",
  onPress: async (_event, context) => {
    const { reddit, ui } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    await reddit.submitPost({
      title: "My king post",
      subredditName: subreddit.name,
      // The preview appears while the post loads
      preview: (
        <vstack height="100%" width="100%" alignment="middle center">
          <text size="large">Loading ...</text>
        </vstack>
      ),
    });
    ui.showToast({ text: "Created post!" });
  },
});

// Add a post type definition
Devvit.addCustomPostType({
  name: "Experience Post",
  height: "tall",
  render:App,
});

export default Devvit;
