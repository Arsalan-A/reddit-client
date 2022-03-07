const REDDIT_API = 'https://www.reddit.com';

//fetch all the subbreddits
export async function fetchSubreddits() {
  const response = await fetch(`${REDDIT_API}/subreddits.json`);
  const json = await response.json();

  return json.data.children.map((subreddit) => subreddit.data);
}

//fethc the posts based on subbreddit
export async function fetchSubredditPosts(subreddit) {
  const response = await fetch(`${REDDIT_API}/${subreddit}.json`);
  const json = await response.json();

  return json.data.children.map((post) => post.data);
}

//Get the post comments by PostID
export async function fetchPostComments(subreddit, postId) {
  const response = await fetch(
    `${REDDIT_API}/${subreddit}/comments/${postId}.json`
  );
  const json = await response.json();

  return json[1].data.children.map((comments) => comments.data.body);
}
//Subreddit Posts Api
//`https://www.reddit.com${subreddit}.json`;
