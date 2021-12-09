import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'

export default function Home() {
  return (
    <Layout>
      <section>
        <div>
          <img src="/home page.png" alt="ilustrasi medis" className="py-5 h-50 mx-auto flex item-center" />
        </div>
        <div className="font-sans">
          <h1 className="flex justify-center text-6xl italic font-bold py-5">
          <span className="bg-gradient-to-b bg-clip-text from-purple-800 to-purple-400 text-transparent">VaksinKuy</span>
          </h1>
          <p className="w-10/12 flex text-center text-xl mx-auto text-gray-500">
            VaksinKuy adalah sebuah situs yang memudahkan untuk mendaftar vaksinasi Covid 19 secara online.
            Pendaftar akan dilayani oleh dokter yang bertugas sesuai dengan jadwalnya dan akan dilayani sesuai antrian di hari tersebut. </p>
          <p className="flex justify-center text-xl mx-auto text-gray-700 text-semibold py-2">Sudah Daftar Vaksin?</p>
        </div>
        <div className="mt-4 flex justify-center">
          <Link href="/login">
            <button className="bg-purple-500 hover:bg-purple-700 text-white text-xl font-semibold rounded-md px-8 py-3">Daftar Vaksin</button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
