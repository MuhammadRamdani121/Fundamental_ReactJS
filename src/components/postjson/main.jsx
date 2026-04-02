import { useState } from "react";
import post from "../../post.json";
import PostJson from "../postjson/postJson";
export default function MainJson() {
  // Variabel changeSearch

  const [search, setSearch] = useState("");

  const changeSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <>
      <h1 className="mt-4 text-center text-2xl font-bold">4.Props Json</h1>
      <div className="flex justify-center mt-10">
        Cari Artikel :
        <input className="border-2 " onChange={changeSearch}></input>
        <small>Ditemukan 0 dengan data pencarian kata {search}</small>
      </div>
      {post.map(({ title, tags, date }, index) => (
        // Spread Array
        <PostJson {...{ title, tags, date }} key={index} />
      ))}
    </>
  );
}
