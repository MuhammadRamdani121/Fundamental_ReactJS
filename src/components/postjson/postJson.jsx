import img3 from "../../assets/3.png";

const ArticleStatus = ({ isNew }) => {
  return isNew && <span>--Baru!!!</span>;
};

export default function PostJso(props) {
  //array.map(namaItem => namaItem)
  return (
    <>
      <main className="flex justify-around items-center my-4">
        <header className="">
          <h1>{props.title}</h1>
          <small>
            Date :{props.date}, tags : {props.tags.join(",")}{" "}
            {props.isNew ? "--Baru" : "Lama"}
          </small>
          <ArticleStatus isNew={props.isNew} />
        </header>
        <main>
          <img className="h-72 w-auto" src={img3} alt="" />
        </main>
      </main>
    </>
  );
}
