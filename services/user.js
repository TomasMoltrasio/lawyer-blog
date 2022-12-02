import endPoints from "./index";

const login = async (username, password) => {
  try {
    const res = await fetch(endPoints.users.login(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

export { login };
