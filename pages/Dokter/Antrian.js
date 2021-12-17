import React, { useState } from 'react'
import Title from '../../components/Custom/title'
import Layout from '../../components/Layout/Layout'
import DokterNav from '../../components/Sidebar/DokterNav'


const Antrian = () => {
    const {Pasien, setPasien} = useState ();
    return (
        <body className="bg-purple-100">
            <Layout>
                <div className="flex row">
                    <DokterNav />
                    <section className="w-9/12">
                        <Title title="Daftar Antrian" desc="Berikut adalah daftar nama pasien pada antrian vaksin hari ini." />

                        <button className="px-5 py-3 bg-purple-500 hover:bg-purple-700 text-white mt-10 rounded-md">Panggil Antrian</button>
                    </section>
                </div>
            </Layout>
        </body>
    )
}


export default Antrian