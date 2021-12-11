import React from 'react'
import useRouter from "next/router"

const PasienNavLink = ({routes, image, text}) => {
    const router = useRouter()

    return (
        <li className="mt-4">
            <Link href={routes}>
                    <a className={`font-semibold flex item-center text-lg px-6 py-3 ml-2 mr-2 ${router.pathname === routes ? "text-white bg-purple-400" : ""} hover:bg-purple-400 rounded-lg hover:text-white`}>
                        <img src={image} alt="home icon" className="h-7 mr-3 hover:stroke-white" />
                        {text}
                    </a>
            </Link>
        </li>
    )
}

export default PasienNavLink
