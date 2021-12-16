import React from 'react'
import Title from '../../components/Custom/title'
import Layout from '../../components/Layout/Layout'
import PasienNav from '../../components/Sidebar/PasienNav'
import Status0 from '../../components/StatusVaksin/Status0'
import Status1 from '../../components/StatusVaksin/Status1'
import Status2 from '../../components/StatusVaksin/Status2'


const CekStatus = () => {
    return (
        <body className="bg-purple-100">
            <Layout>
                <div className="flex flex row">
                    <PasienNav />
                    <section className="w-9/12">
                    <Title title="Cek Status Vaksinasi"/>

                    {/* Tambah sekeleksi status vaksin pake componen status0 - status2 */}

                    </section>

                </div>
            </Layout>
        </body>
    )
}

export default CekStatus