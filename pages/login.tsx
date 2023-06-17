import Link from 'next/link'
import React from 'react'

export default function Login() {
    return (
        <>
            <div className="h-screen font-sans login bg-cover">
                <div className="container mx-auto h-full flex flex-1 justify-center items-center">
                    <div className="w-full max-w-lg">
                        <div className="leading-loose">
                            <form className="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
                                <p className="text-gray-800  text-center text-lg font-bold">Login</p>
                                <div className="">
                                    <label className="block text-sm text-gray-00" >Username</label>
                                    <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"  name="username" type="text"  placeholder="User Name"  />
                                </div>
                                <div className="mt-2">
                                    <label className="block text-sm text-gray-600" >Password</label>
                                    <input className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" name="password" type="text"  placeholder="*******"  />
                                </div>
                                <div className="mt-4 items-center justify-between">
                                    <button className="px-4 py-1 text-white font-light tracking-wider bg-orange-500 rounded" type="submit">Login</button>

                                </div>
                                <Link className="inline-block right-0 align-baseline font-bold text-sm text-500 hover:text-blue-800" href={'/register'}>   Not registered ?
                                </Link>

                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
