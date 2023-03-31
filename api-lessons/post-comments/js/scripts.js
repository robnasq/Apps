const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector("#loading");
const postContainer = document.querySelector("#posts-container");

// Get all posts

async function getAllPosts() {
  const response = await fetch(url);
  console.log(response);
}
getAllPosts();
