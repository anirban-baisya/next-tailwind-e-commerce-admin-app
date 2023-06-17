
import React from 'react'



export default function OrderListPage() {


    return (
        <>
            {/* <!-- component --> */}
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingInline: '10px' }}>
                <div>

                    <h6 className="text-4xl my-8">
                        Orders List :-
                    </h6>
                </div>
                <div></div>
            </div>
            <div>

                <table className="min-w-full table-auto mt-8">
                    <thead className="justify-between">
                        <tr className="bg-gray-800">

                            <th className="px-16 py-2">
                                <span className="text-gray-300">Name</span>
                            </th>
                            <th className="px-16 py-2">
                                <span className="text-gray-300">Email</span>
                            </th>
                            <th className="px-16 py-2">
                                <span className="text-gray-300">Date Of Purchase</span>
                            </th>

                            <th className="px-16 py-2">
                                <span className="text-gray-300">Product Name</span>
                            </th>
                            <th className="px-16 py-2">
                                <span className="text-gray-300">Quantity</span>
                            </th>
                            <th className="px-16 py-2">
                                <span className="text-gray-300">Total Amount</span>
                            </th>

                            <th className="px-16 py-2">
                                <span className="text-gray-300">Status</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-200">

                        <tr className="bg-white border-4 border-gray-200">

                            <td className="px-2 py-2 ">
                                <span className="text-center ml-2 font-semibold">Ralph Barnes</span>
                            </td>
                            <td className="px-9 py-2">
                                abc@gmail.com

                            </td>
                            <td className="px-9 py-2">
                                <span>05/06/2020</span>
                            </td>
                            <td className="px-9 py-2">
                                <span>Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin	</span>
                            </td>
                            <td className="px-9 py-2">
                                <span>2</span>
                            </td>
                            <td className="px-9 py-2">
                                <span>₹5458</span>
                            </td>
                            <td className="px-16 py-2">
                                <button className="bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-white hover:border-indigo-500 hover:text-black ">
                                    Shipped
                                </button>
                            </td>


                        </tr>

                    </tbody>
                </table>
            </div>

        </>
    )
}
