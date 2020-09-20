import response from "./hardcodedFeed";

const getPostsFromApi = async (setPosts) => {
  // this was used to consume the api
  // const response = await fetch("http://172.22.168.36:3030/feed");
  // const postsInJson = await response.json();
  setPosts(response);
};

export default getPostsFromApi;
