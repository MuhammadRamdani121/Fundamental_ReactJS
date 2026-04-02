import { useState } from "react";
import postsData from "../../post.json";
import PostJson from "../postjson/postJson";
import Search from "./search";

export default function MainJson() {
  // Variabel changeSearch
  const [post, setPosts] = useState([]);

  const changeSearch = (value) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.includes(value),
    );
    setPosts(filteredPosts);
  };

  return (
    <>
      <h1 className="mt-4 text-center text-2xl font-bold">4.Props Json</h1>
      <Search changeSearch={changeSearch} />
      {post.map((props, index) => (
        // Spread Array
        <PostJson {...props} key={index} />
      ))}
    </>
  );
}
