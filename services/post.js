import endPoints from "./index";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const user = cookies.get("user");

const getAllPost = async () => {
  try {
    const res = await fetch(endPoints.posts.getAllPost());
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const getPost = async (id) => {
  try {
    const res = await fetch(endPoints.posts.getPost(id));
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const getPostByTitle = async (title) => {
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
        Authorization: `Bearer ${user?.token}`,
      },
      body: JSON.stringify(post),
    });
    const data = await res.json();

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
        Authorization: `Bearer ${user?.token}`,
      },
      body: JSON.stringify(post),
    });
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (id) => {
  try {
    const res = await fetch(endPoints.posts.deletePost(id), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?.token}`,
      },
    });
    const data = await res.json();

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
