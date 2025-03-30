import NavBar from "./components/NavBar/NavBar";
import FirstPage from "./firstpage/page";

export default function Home() {
  return (
    <div className="flex flex-col h-[100dvh] lg:flex-row lg:px-40 lg:pb-32 lg:items-end lg:justify-between">
        <div className="flex flex-col items-center p-6 gap-6 md:p-32 md:pb-0 lg:p-0 lg:w-135 lg:items-start">
            <h3 className="text-preset-8 text-tertiary md:text-[28px]">SO, YOU WANT TO TRAVEL TO</h3>
            <h1 className="text-preset-1 text-[80px] md:text-[144px]">SPACE</h1>
            <p className="text-preset-9 text-tertiary text-center text-[15px] md:text-[18px] lg:text-start">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className="flex-1 flex items-center justify-center lg:pb-9 lg:flex-0">
            <button className="text-preset-4 text-[18px] text-primary bg-secondary flex items-center justify-center rounded-full w-36 h-36 md:w-68 md:h-68 md:text-[32px]">EXPLORE</button>
        </div>
    </div>
    // <div>
    //   <main>
    //     <div className="flex flex-col h-[100dvh]">
    //       <NavBar />
    //       <FirstPage />
    //     </div>
    //   </main>
    // </div>
  );
}
