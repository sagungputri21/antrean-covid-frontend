import React from 'react'
import Layout from '../../components/Layout/Layout'
import DokterNav from '../../components/Sidebar/DokterNav'
import PasienVaksin from '../../components/Custom/PasienVaksin'
import Title from '../../components/Custom/title'

const Konfirmasi = () => {
    // NamaPasien = 
    return (
        <body className="bg-purple-100">
            <Layout>
                <div className="flex flex row">
                    <DokterNav/>
                    <section className="w-9/12 ml-10">
                        <div>
                            <Title title="Konfirmasi Vaksin"/>
                            <PasienVaksin/>
                            <button></button>
                        </div>
                    </section>
                </div>
            </Layout>
        </body>
    )
}


export default Konfirmasi