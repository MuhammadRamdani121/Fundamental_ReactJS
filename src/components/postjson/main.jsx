import post from "../../post.json";
import PostJson from "../postjson/postJson";
export default function MainJson() {
  // Variabel changeSearch
  const changeSearch = (event) => {
    console.log(event.target.value);
  };
  return (
    <>
      <h1 className="mt-4 text-center text-2xl font-bold">4.Props Json</h1>
      <div>
        Cari Artikel :<input onChange={changeSearch}></input>
      </div>
      {post.map((title, tags, date) => (
        // Spread Array
        <PostJson {...{ title, tags, date }} />
      ))}
    </>
  );
}
