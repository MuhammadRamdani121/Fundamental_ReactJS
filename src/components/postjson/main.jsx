import post from "../../post.json";
import PostJson from "../postjson/postJson";
export default function MainJson() {
  return (
    <>
      <h1 className="mt-4 text-center text-2xl font-bold">4.Props Json</h1>
      {post.map((blog) => (
        <PostJson title={blog.title} tags={blog.tags} date={blog.date} />
      ))}
    </>
  );
}
