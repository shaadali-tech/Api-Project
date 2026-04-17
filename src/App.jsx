import "./App.css";
import Post from "./Components/Post";
import Postlist from "./Components/Postlist";

function App() {
  return (
    <>
      <h1>Working with Apis</h1>
      <p>
        This project demonstrates how to fetch data from an API and display it
        in a React application. It uses the JSONPlaceholder API to retrieve a
        list of posts and displays them in a user-friendly format.
      </p>
      <p>
        The application handles loading states and errors gracefully, ensuring a
        smooth user experience. It also includes basic styling to enhance the
        visual appeal of the content.
      </p>

      <Postlist />
      <Post />
    </>
  );
}

export default App;
