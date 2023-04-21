import Link from "next/link"

export default function BtnPrimary({BtnPrimaryText, BtnPrimaryLink, BtnPrimaryTarget}) {
    return (
        <Link className="flex w-4/5 rounded-md lg:w-max text-center items-center justify-center text-xl lg:text-3xl font-medium px-20 py-4 bg-primaryColor hover:opacity-80 transition-all ease-in-out duration-300" aria-label={BtnPrimaryText} href={BtnPrimaryLink} target={BtnPrimaryTarget}>
            {BtnPrimaryText}
        </Link>
    )
  }