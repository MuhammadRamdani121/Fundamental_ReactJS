import { useState } from "react";

export default function Search(props) {
  const [search, setSearch] = useState("");

  const changeSearch = (event) => {
    setSearch(event.target.value);
    props.changeSearch(event.target.value);
  };

  return (
    <>
      <div className="flex justify-center mt-10">
        Cari Artikel :
        <input className="border-2 " onChange={changeSearch}></input>
        <small>
          Ditemukan {props.totalPosts} dengan data pencarian kata {search}
        </small>
      </div>
    </>
  );
}
