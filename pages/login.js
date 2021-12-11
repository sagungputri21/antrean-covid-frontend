import React from 'react'
import Layout from '../components/Layout/Layout'
import {useForm} from "react-hook-form"

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <Layout>
            <section className="flex justify-center w-4/5 h-screen items-start mt-32">
                <div className="flex justify-around w-full items-center">
                        <img src="login.svg" alt="Login Picture" className="w-4/5 md:block hidden"/>
                        <div className="flex flex-col justify-center items-center bg-white shadow-md px-8 pt-8 mb-4 ml-3 w-full max-w-lg">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-4 w-full">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">
                                            Username
                                        </label>
                                        <input 
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                        id="username" 
                                        type="text" 
                                        placeholder="Username"  
                                        {...register("username", {required : true})}/>
                                        {errors.username && <ErrorMessage error="Username is Required"/>}
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
                                        {...register("password", {required : true})}/>
                                        {errors.username && <ErrorMessage error="Password is Required"/>}
                                    </div>
                                    <div className="mb-4 w-full flex justify-center">
                                        <button className="mt-0 mr-6 bg-purple-500 hover:bg-purple-700 text-white font-bold px-7 py-2 rounded-md items-center" type="submit">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                        </div>
                </div>
            </section>
        </Layout>
    )
}

export default Login
