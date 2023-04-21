import Link from "next/link"

export default function Header() {
    return (
      <header className="bg-mainDark text-whiteColor absolute h-max w-full py-10 font-Montserrat sm:px-36 flex justify-between">
        <div className="flex items-center justify-between text-2xl sm:text-4xl w-full sm:w-max sm:gap-5 px-5 sm:px-0">
          <h1 className="font-bold">ELEKTRIADA</h1>
          <div className="h-full w-1 bg-whiteColor"></div>
          <h1 className="text-primaryColor">APR 17-18</h1>
        </div>
        <Link href="https://www.srednjasolaravne.si/" target="blank" className="text-3xl font-medium sm:flex hidden hover:opacity-80 transition-all ease-in-out duration-300">
          Srednja Šola Ravne
        </Link>
      </header>
    )
  }