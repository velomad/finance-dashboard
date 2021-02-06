import React from 'react';

const Table = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="bg-gray-100 col-span-2">
                <ul className="flex-column py-2 pl-2 space-y-4">
                    <li className="pr-10  py-6 rounded-tl-xl rounded-bl-xl">
                        <div className="pl-2 space-y-1">
                            <div className="text-3xl text-blue-800">
                                87
                        </div>
                            <div className="text-xs text-gray-500">
                                Credit Card
                        </div>
                        </div>
                    </li>

                    <li className="pr-10 bg-white py-6 rounded-tl-xl rounded-bl-xl">
                        <div className="pl-2 space-y-1">
                            <div className="text-3xl text-blue-800">
                                34
                        </div>
                            <div className="text-xs text-gray-500">
                                Home Loan
                        </div>
                        </div>
                    </li>

                    <li className="pr-10  py-6 rounded-tl-xl rounded-bl-xl">
                        <div className="pl-2">
                            <div className="text-3xl text-blue-800">
                                27
                        </div>
                            <div className="text-xs text-gray-500">
                                Personal Loan
                        </div>
                        </div>
                    </li>

                    <li className="pr-10  py-6 rounded-tl-xl rounded-bl-xl">
                        <div className="pl-2">
                            <div className="text-3xl text-blue-800">
                                43
                        </div>
                            <div className="text-xs text-gray-500">
                                Demat                        </div>
                        </div>
                    </li>

                </ul>
            </div>
            <div className="p-2 col-span-10">
                <table className=" w-full" style={{ borderSpacing: "20px" }}>

                    <tr className="border-blue-100  rounded-md">
                        <th className="text-center py-2">
                            ID
                        </th>
                        <th>
                            Card
                        </th>
                        <th>
                            Card Type
                        </th>
                        <th>
                            Fee
                        </th>
                        <th>
                            Eligibility
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                    <tr className="shadow-xl rounded-2xl bg-white ">
                        <td className="text-center py-2">
                            1
                       </td>
                        <td className="py-2">
                            <img src="https://admin.creditkaro.com/storage/uploads/THUMB_2020206130644.png" width="130px" className="mx-auto" />
                        </td>
                        <td className="text-center py-2">
                            Rewards
                       </td>
                        <td className="text-center py-2">
                            <div>
                                First Year Fee - 6000
                                </div>
                            <div>
                                Renewal Fee - 6000
                                </div>
                        </td>
                        <td className="text-center py-2">
                            4 lacs onwards
                       </td>
                        <td className="text-center py-2">
                            <div className="flex justify-center space-x-4">
                                <div>
                                    <svg className="w-6 h-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </div>
                                <div>
                                    <svg className="w-6 h-6 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className="shadow-xl rounded-2xl bg-gray-50 ">
                        <td className="text-center py-2">
                            1
                       </td>
                        <td className="py-2">
                            <img src="https://admin.creditkaro.com/storage/uploads/THUMB_2020205105904.png" width="130px" className="mx-auto" />
                        </td>
                        <td className="text-center py-2">
                            Cashback
                       </td>
                        <td className="text-center py-2">
                            500 - 6000
                       </td>
                        <td className="text-center py-2">
                            6 lacs onwards
                       </td>
                        <td className="text-center py-2">
                            <div className="flex justify-center space-x-4">
                                <div>
                                    <svg className="w-6 h-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </div>
                                <div>
                                    <svg className="w-6 h-6 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Table