import Image from "next/image"
import ssrLogo from "/public/ssrLogo.png"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="sm:absolute bottom-0 h-max sm:h-44 w-full flex items-center justify-center sm:gap-0 gap-5 flex-col bg-mainDark text-whiteColor">
        <div className="h-full w-4/5 sm:w-3/5 flex items-center justify-between flex-col sm:flex-row text-xl font-normal sm:gap-4 gap-10">
            <div className="grid place-items-center w-full">email@email.com</div>
            <div className="sm:h-full sm:w-1 h-px w-full bg-whiteColor"></div>
            <div className="grid place-items-center w-full">
                <Link className="flex items-center justify-center group h-full" href="https://www.srednjasolaravne.si/" target="blank">
                    <Image className="h-3/4 w-auto group-hover:scale-105 transition-all ease-in-out duration-200" src={ssrLogo} alt="Srednja Šola Ravne" height={1000} width={1000}/>
                </Link>
            </div>
            <div className="sm:h-full sm:w-1 h-px w-full bg-whiteColor"></div>
            <div className="grid place-items-center w-full">Kontakt</div>
        </div>
        <div className="text-xs flex items-center justify-center gap-2 p-5">
            <div className="flex items-center justify-center gap-1">
                <p>©</p>
                <p>{(new Date().getFullYear())}</p>
            </div>
            <p>Vse pravice pridržane</p>
        </div>
    </footer>
  )
}
