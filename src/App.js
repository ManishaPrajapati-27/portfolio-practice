import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Post from "./components/Post";
import Project from "./components/Project";
import SinglePost from "./components/Singlepost";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route Component={Home} path="/" exact />
        <Route Component={About} path="/about" />
        <Route Component={Post} path="/post" />
        <Route Component={SinglePost} path="/post/:slug" />
        <Route Component={Project} path="/project" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
