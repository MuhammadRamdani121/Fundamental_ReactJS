import img1 from "../assets/1.png";
export default function ComponentDasar() {
  return (
    <div className="">
      <header className="text-center text-2xl font-bold">
        <h1>1.Dasar components </h1>
      </header>
      <main className="flex justify-around items-center">
        <h1>Component Dasar Pertama</h1>
        <img src={img1} />
      </main>
    </div>
  );
}
