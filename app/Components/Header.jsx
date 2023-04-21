import Link from "next/link"

export default function Header() {
    return (
      <header className="bg-mainDark text-whiteColor absolute h-max w-full py-10 lg:px-36 md:px-5 font-Montserrat flex justify-between">
        <div className="flex items-center justify-between text-2xl lg:text-4xl w-full md:w-full lg:w-max lg:gap-5 px-5 lg:px-0">
          <h1 className="font-bold">ELEKTRIADA</h1>
          <div className="h-full w-1 bg-whiteColor lg:flex md:hidden"></div>
          <h1 className="text-primaryColor">APR 17-18</h1>
        </div>
        <Link href="https://www.srednjasolaravne.si/" target="blank" className="text-3xl font-medium lg:flex md:hidden hidden hover:opacity-80 transition-all ease-in-out duration-300">
          Srednja Šola Ravne
        </Link>
      </header>
    )
  }