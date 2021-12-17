import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router"
import { faHome, faRegistered, faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PasienNavLink = ({routes, text, icon, size}) => {
    const router = useRouter()

    return (
        <li className="mt-4">
            <Link href={routes}>
                    <a className={`font-semibold flex items-center text-lg px-6 py-3 ml-2 mr-2 ${router.pathname === routes ? "text-white bg-purple-400" : ""} hover:bg-purple-400 rounded-lg hover:text-white`}>
                        <div className='w-10'>
                            {icon}
                        </div>
                        <p className='ml-2'>
                            {text}
                        </p>
                    </a>
            </Link>
        </li>
    )
}

export default PasienNavLink
