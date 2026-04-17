import { useState } from "react";

const Post = () => {
  const [name, setName] = useState("");

  async function adddata() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
      }),
    });

    const data = await response.json();
    console.log("Response:", data);
  }

  return (
    <div>
      <h2>POST Example</h2>

      <input
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={adddata}>Send</button>
    </div>
  );
};

export default Post;
