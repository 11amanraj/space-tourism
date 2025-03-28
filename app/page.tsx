import NavBar from "./components/NavBar/NavBar";

export default function Home() {
  return (
    <div>
      <main>
        <NavBar />
        <div className="text-preset-1 text-tertiary">Is it running?</div>
      </main>
    </div>
  );
}
