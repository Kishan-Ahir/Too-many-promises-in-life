// Sample user data
const user = {
    name: "Alice",
    lastActivity: null,
    posts: [],
  };
  
  // Promise that resolves after 1 second with the current time
  function getCurrentTime() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(new Date());
      }, 1000);
    });
  }
  
  // Function to update the last activity time of the user
  function updateLastUserActivityTime() {
    return getCurrentTime().then((currentTime) => {
      user.lastActivity = currentTime;
      return user.lastActivity;
    });
  }
  
  // Function to create a new post for the user
  function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        user.posts.push(post);
        resolve(post);
      }, 1000);
    });
  }
  
  // Function to delete the last post of the user
  function deleteLastPost() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const deletedPost = user.posts.pop();
        if (deletedPost) {
          resolve(deletedPost);
        } else {
          reject(new Error("No posts to delete"));
        }
      }, 1000);
    });
  }
  
  
  createPost({ title: "First post" })
    .then(() => {
      return updateLastUserActivityTime();
    })
    .then(() => {
      return createPost({ title: "Second post" });
    })
    .then(() => {
      return updateLastUserActivityTime();
    })
    .then(() => {
      console.log("Posts:", user.posts);
      console.log("Last activity time:", user.lastActivity);
      return deleteLastPost();
    })
    .then(() => {
      console.log("Posts after deletion:", user.posts);
    })
    .catch((error) => {
      console.error(error);
    });
  