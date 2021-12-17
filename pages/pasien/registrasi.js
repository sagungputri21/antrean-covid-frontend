import React from 'react'
import PasienNav from '../../components/Sidebar/PasienNav'
import Layout from '../../components/Layout/Layout'
import { useForm } from "react-hook-form"
import Identitas from '../../components/Custom/identitas'

const Registrasi = ({nama}) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <body className="bg-purple-100">
            <Layout>
                <div className="flex row">
                    <PasienNav />
                    <section className="w-9/12 ml-20 mt-12">
                    <p className="text-xl">Selamat datang!</p>
                    <div className="w-7/12 h-fit mt-8 border-solid border border-purple-300 bg-white rounded-xl">
                    <div className="font-Roboto mt-4">
                    <Identitas nama={nama}/>
                    </div>
                    </div>
                    <p className="text-lg mt-12">Silakan tekan tombol di bawah ini untuk melakukan registrasi</p>
                    <button className="px-5 py-2 bg-purple-500 hover:bg-purple-700 text-white mt-6 rounded-md">Registrasi</button>
                    </section>
                </div>


            </Layout>
        </body>
    )
}

export default Registrasi
