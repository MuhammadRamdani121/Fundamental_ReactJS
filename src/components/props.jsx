import img3 from "../assets/3.png";
export default function Props(props) {
  //array.map(namaItem => namaItem)
  return (
    <>
      <h1 className="mt-4 text-center text-2xl font-bold">3.Props Variable</h1>
      <main className="flex justify-around items-center ">
        <header>
          <h1>{props.name}</h1>
          <h2>
            {props.title.map((title) => (
              <div>-{title}</div>
            ))}
          </h2>
        </header>
        <main>
          <img className="h-72 w-auto" src={img3} alt="" />
        </main>
      </main>
    </>
  );
}
