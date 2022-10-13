import endPoints from "./index";

const cache = {};

const getAllPost = async () => {
  if (cache.posts && cache.posts.length > 0) {
    return cache.posts;
  }
  try {
    const res = await fetch(endPoints.posts.getAllPost());
    const data = await res.json();
    cache.posts = data;

    return data;
  } catch (error) {
    console.log(error);
  }
};

const getPost = async (id) => {
  if (cache.posts && cache.posts.length > 0) {
    return cache.posts.find((post) => post.id === id);
  }

  try {
    const res = await fetch(endPoints.posts.getPost(id));
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const getPostByTitle = async (title) => {
  if (cache.posts && cache.posts.length > 0) {
    return cache.posts.find((post) => post.title === title);
  }
  try {
    const res = await fetch(endPoints.posts.getPostByTitle(title));
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const createPost = async (post) => {
  try {
    const res = await fetch(endPoints.posts.createPost(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    const data = await res.json();
    cache.posts = null;

    return data;
  } catch (error) {
    console.log(error);
  }
};

const updatePost = async (id, post) => {
  try {
    const res = await fetch(endPoints.posts.updatePost(id), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    const data = await res.json();
    cache.posts = null;

    return data;
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (id) => {
  try {
    const res = await fetch(endPoints.posts.deletePost(id), {
      method: "DELETE",
    });
    const data = await res.json();
    cache.posts = null;

    return data;
  } catch (error) {
    console.log(error);
  }
};

export {
  getAllPost,
  getPost,
  createPost,
  updatePost,
  deletePost,
  getPostByTitle,
};
