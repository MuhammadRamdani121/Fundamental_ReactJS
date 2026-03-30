import img2 from "../assets/2.png";
export default function Variable() {
  const name = "Muhammad Ramdani";
  const title = [
    "Tutorial ReactJS",
    "Tutorial TailwindCSS",
    "Tutorial JavaScript",
  ];
  //array.map(namaItem => namaItem)
  return (
    <>
      <h1 className="mt-4 text-center text-2xl font-bold">2.Variable</h1>
      <main className="flex justify-around items-center ">
        <header>
          <h1>{name}</h1>
          <h2>
            {title.map((title) => (
              <div>-{title}</div>
            ))}
          </h2>
        </header>
        <main>
          <img className="h-72 w-auto" src={img2} alt="" />
        </main>
      </main>
    </>
  );
}
