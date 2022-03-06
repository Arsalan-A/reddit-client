const REDDIT_API = 'https://www.reddit.com';

export default async function fetchSubreddit() {
  const response = await fetch(`${REDDIT_API}/subreddits.json`);
  const result = await response.json();

  return result.data.children.map((subreddit) => subreddit.data);
}

//Subreddit Posts Api
//`https://www.reddit.com${subreddit}.json`;
