import React from 'react'
import Title from '../../components/Custom/title'
import Layout from '../../components/Layout/Layout'
import PasienNav from '../../components/Sidebar/PasienNav'
import Status from '../../components/StatusVaksin/Status'

const CekStatus = () => {
    return (
        <body className="bg-purple-100">
            <Layout>
                <div className="flex row">
                    <PasienNav />
                    <section className="w-9/12">
                    <Title title="Cek Status Vaksinasi"/>
                    <Status/>
                    </section>
                </div>
            </Layout>
        </body>
    )
}

export default CekStatus