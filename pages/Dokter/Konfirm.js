import React from 'react'
import Layout from '../../components/Layout/Layout'
import DokterNav from '../../components/Sidebar/DokterNav'
import PasienVaksin from '../../components/Custom/PasienVaksin'
import Title from '../../components/Custom/title'

const Konfirmasi = ({nama, nik}) => {
    // NamaPasien = 
    return (
        <body className="bg-purple-100">
            <Layout>
                <div className="flex row">
                    <DokterNav/>
                    <section className="w-9/12 ml-10">
                        <div>
                            <Title title="Konfirmasi Vaksin"/>
                            <PasienVaksin nama={nama} nik={nik}/>
                            <div className="w-8/12">
                            <button className="px-5 py-2 bg-purple-500 hover:bg-purple-700 text-white mt-10 rounded-md">Konfirmasi</button>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </body>
    )
}


export default Konfirmasi