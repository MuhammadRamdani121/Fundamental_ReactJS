import { useState } from "react";

export default function Search(props) {
  const [search, setSearch] = useState("");

  const changeSearch = () => {
    props.changeSearch(search);
  };

  const searchKeydown = (e) => {
    if (e.key === "Enter") {
      changeSearch();
    }
  };

  return (
    <>
      <div className="flex justify-center mt-10">
        Cari Artikel :
        <input
          className="border-2 "
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={searchKeydown}
        ></input>
        <button className="ml-4 h-8 w-10 border-2" onClick={changeSearch}>
          Cari
        </button>
      </div>
      <small className="flex justify-center">
        Ditemukan {props.totalPosts} dengan data pencarian kata {search}
      </small>
    </>
  );
}
