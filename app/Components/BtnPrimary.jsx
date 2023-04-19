import Link from "next/link"

export default function BtnPrimary({BtnPrimaryText, BtnPrimaryLink, BtnPrimaryTarget}) {
    return (
        <Link className="flex items-center justify-center text-3xl font-semibold px-20 py-4 bg-primaryColor" aria-label={BtnPrimaryText} href={BtnPrimaryLink} target={BtnPrimaryTarget}>
            {BtnPrimaryText}
        </Link>
    )
  }