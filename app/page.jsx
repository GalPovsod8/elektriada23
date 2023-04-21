import BtnPrimary from "./Components/BtnPrimary"

export default function Home() {
  return (
    <main className="lg:h-screen h-[70vh] w-full grid place-items-center font-Montserrat bg-mainDark text-whiteColor">
      <article className="absolute top-44 lg:top-44 h-max w-full flex flex-col items-center justify-between gap-14 lg:gap-20">
        <h1 className="lg:text-9xl md:text-7xl text-5xl text-center font-semibold animate-fadeIn">ELEKTRIADA <span className="text-primaryColor">2023</span></h1>
        <div className="grid place-items-center gap-8 animate-show">
          <div className="text-2xl lg:text-4xl text-center grid place-items-center gap-4">
            <h2>OKTOBER 6 - 8</h2>
            <h2 className=" font-medium">UMAG, HRVAŠKA</h2>
          </div>
          <BtnPrimary BtnPrimaryText="HOTEL SOL GARDEN ISTRA" BtnPrimaryLink="https://www.plavalaguna.com/sl/hoteli/garden-istra" BtnPrimaryTarget="blank"/>
        </div>
      </article>
    </main>
  )
}
