import NavBar from "./components/NavBar/NavBar";
import FirstPage from "./pages/FirstPage";

export default function Home() {
  return (
    <div>
      <main>
        <div className="flex flex-col h-[100dvh]">
          <NavBar />
          <FirstPage />
        </div>
      </main>
    </div>
  );
}
