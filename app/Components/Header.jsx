export default function Header() {
    return (
      <header className="bg-mainDark text-whiteColor absolute h-max w-full py-10 font-Montserrat sm:px-36 flex justify-between">
        <div className="flex sm:justify-normal items-center justify-between w-full sm:gap-5 px-5 sm:px-0 text-4xl">
          <h1 className="font-bold">ELEKTRIADA</h1>
          <div className="h-full w-1 bg-whiteColor"></div>
          <h1 className="text-primaryColor">APR 17-18</h1>
        </div>
        <h1 className="text-3xl font-medium sm:flex hidden">
          SŠR
        </h1>
      </header>
    )
  }