import Link from "next/link"

export default function BtnPrimary({BtnPrimaryText, BtnPrimaryLink, BtnPrimaryTarget}) {
    return (
        <Link className="flex items-center justify-center text-3xl font-semibold px-20 py-4 bg-primaryColor hover:opacity-75 transition-all ease-in-out duration-200" aria-label={BtnPrimaryText} href={BtnPrimaryLink} target={BtnPrimaryTarget}>
            {BtnPrimaryText}
        </Link>
    )
  }