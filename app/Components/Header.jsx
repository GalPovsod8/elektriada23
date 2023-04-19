export default function Header() {
    return (
      <header className="bg-mainDark text-whiteColor absolute h-max w-full py-10 font-Montserrat px-36 flex justify-between">
        <div className="flex gap-5 text-4xl">
          <h1 className="font-bold">ELEKTRIADA</h1>
          <div className="h-full w-1 bg-whiteColor"></div>
          <h1 className="text-primaryColor">APR 17-18</h1>
        </div>
        <h1 className="text-3xl font-medium">
          Srednja Šola Ravne
        </h1>
      </header>
    )
  }