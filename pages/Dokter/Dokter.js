import React from 'react'
import Layout from '../../components/Layout/Layout'
import PasienNav from '../../components/Sidebar/PasienNav'
import Halo from '../../components/Custom/haloNama'
import Note from '../../components/Custom/note'
import Jumlah from '../../components/Custom/jumlahAntrian'

const Pasien = ({nama}) => {
    
    return (
        <body className="bg-purple-100">
            <Layout>
                <div className="flex row">
                    <PasienNav />
                    <section className="w-9/12">
                        <div className="w-full text-center">
                            <Halo nama={nama} />
                        </div>
                        <Jumlah/>
                        <div className="mt-40">
                        <Note desc="Silakan pilih menu yang tersedia pada panel sebelah kiri 
                        untuk melakukan pendaftaran vaksinasi dan mengecek status vaksinasi Anda. Terima kasih"/>
                        </div>
                    </section>
                </div>
            </Layout>
        </body>
    )
}


export default Pasien