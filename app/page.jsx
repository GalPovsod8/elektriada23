import BtnPrimary from "./Components/BtnPrimary"

export default function Home() {
  return (
    <main className="min-h-screen w-full grid place-items-center bg-mainDark text-whiteColor">
      <article className="flex flex-col items-center justify-between gap-20">
        <h1 className="text-9xl font-semibold">ELEKTRIADA <span className="text-primaryColor">2023</span></h1>
        <div className="grid place-items-center gap-8">
          <div className="text-4xl text-center grid place-items-center gap-4">
            <h2>APRIL 17-18</h2>
            <h2 className=" font-medium">UMAG, HRAVAŠKA</h2>
          </div>
          <BtnPrimary BtnPrimaryText="HOTEL SOL GARDEN ISTRA" BtnPrimaryLink="https://www.plavalaguna.com/sl/hoteli/garden-istra" BtnPrimaryTarget="blank"/>
        </div>
      </article>
    </main>
  )
}
