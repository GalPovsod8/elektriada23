import Image from "next/image"
import ssrLogo from "/public/ssrLogo.png"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="lg:absolute font-Montserrat bottom-0 h-max lg:h-44 w-full flex items-center justify-center lg:gap-0 gap-5 flex-col py-10 lg:py-0 animate-show bg-mainDark text-whiteColor">
        <div className="h-full w-4/5 lg:w-3/5 flex items-center justify-between flex-col lg:flex-row text-xl font-normal lg:gap-4 gap-10">
            <Link href="mailto:info@elektriada-2023.si" className="grid place-items-center w-full">info@elektriada-2023.si</Link>
            <div className="lg:h-full lg:w-1 h-px w-full bg-whiteColor"></div>
            <div className="grid place-items-center w-full">
                <Link className="flex items-center justify-center group h-full" href="https://www.srednjasolaravne.si/" target="blank">
                    <Image className="h-4/5 w-auto group-hover:scale-105 transition-all ease-in-out duration-200" src={ssrLogo} alt="Srednja Šola Ravne" height={1000} width={1000}/>
                </Link>
            </div>
            <div className="lg:h-full lg:w-1 h-px w-full bg-whiteColor"></div>
            <div className="grid place-items-center w-full">Tel. Št.: 02 8750 600</div>
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
