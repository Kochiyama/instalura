const getPostsFromApi = async (setPosts) => {
  const response = await fetch("http://172.22.168.36:3030/feed");
  const postsInJson = await response.json();
  setPosts(postsInJson);
};

export default getPostsFromApi;
