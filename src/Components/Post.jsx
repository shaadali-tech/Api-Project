import { useEffect, useState } from "react";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");

  // ✅ GET (Fetch posts)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 5))); // limit 5
  }, []);

  // ✅ POST (Add new post)
  async function handleAdd() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        body: "New post body",
      }),
    });

    const data = await response.json();

    // update UI
    setPosts((prev) => [...prev, data]);
    setTitle("");
  }

  // ✅ DELETE
  async function handleDelete(id) {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    });

    // update UI
    setPosts((prev) => prev.filter((post) => post.id !== id));
  }

  // ✅ PUT (Edit)
  async function handleEdit(id) {
    const newTitle = prompt("Enter new title");

    if (!newTitle) return;

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newTitle,
        }),
      },
    );

    const data = await response.json();

    // update UI
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, title: data.title } : post,
      ),
    );
  }

  return (
    <div>
      <h1>Post Manager 🚀</h1>

      {/* ADD POST */}
      <input
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Add Post</button>

      {/* SHOW POSTS */}
      {posts.map((post) => (
        <div key={post.id} style={{ marginTop: "10px" }}>
          <strong>{post.title}</strong>
          <p>{post.body}</p>

          <button onClick={() => handleDelete(post.id)}>Delete</button>
          <button onClick={() => handleEdit(post.id)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default Post;
