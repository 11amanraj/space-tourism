export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center p-6 pt-0 gap-6 md:items-start">
          <h3 className="text-preset-8 text-tertiary md:text-[28px]">SO, YOU WANT TO TRAVEL TO</h3>
          <h1 className="text-preset-1 text-[80px] md:text-[144px]">SPACE</h1>
          <p className="text-preset-9 text-tertiary text-center text-[15px] md:text-[18px] md:text-start">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <div className="flex-1 flex items-center justify-center">
          <button className="text-preset-4 text-[18px] text-primary bg-secondary flex items-center justify-center rounded-full w-36 h-36 md:w-68 md:h-68 md:text-[32px]">EXPLORE</button>
      </div>
    </>
    
  );
}