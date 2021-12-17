import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import { useForm } from "react-hook-form"
import SimbolLogin from '../components/simbolLogin'
import Title from '../components/Custom/title'

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const [isDoctor, setisDoctor] = useState(0)

    return (
        <Layout>
            <section className='flex w-full items-start mt-5 items-center'>
                <div className='flex flex-col w-1/2 justify-center items-center'>
                    <Title title="LOGIN" desc="Pilih peranmu sebagai Pendaftar atau Dokter" />
                    <div className='flex flex-col w-1/2 mt-10'>
                        <SimbolLogin doctor={isDoctor} nilaiDoctor={0} setDoctor={setisDoctor} image="/character-2.png" button="Pendaftar" />
                        <SimbolLogin doctor={isDoctor} nilaiDoctor={1} setDoctor={setisDoctor} image="/doctor.png" button="Dokter" />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center bg-white shadow-md px-8 pt-8 mb-4 ml-3 w-full max-w-lg">
                    <p className="text-lg mb-5">Silakan lakukan login terlebih dahulu</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4 w-full">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="text"
                                placeholder="Email"
                                {...register("username", { required: true })} />
                            {errors.username && <ErrorMessage error="Username is Required" />}
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Password"
                                {...register("password", { required: true })} />
                            {errors.username && <ErrorMessage error="Password is Required" />}
                        </div>
                        <div className="mb-4 w-full flex justify-center">
                            <button className="mt-0 mr-6 bg-purple-500 hover:bg-purple-700 text-white font-bold px-7 py-2 rounded-md items-center" type="submit" onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </Layout>
    )
}

export default Login
