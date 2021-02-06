import React from 'react';
import { Table } from './components';

const Campaigns = () => {
    return (
        <div>
            <div className="grid grid-cols-12 p-4 items-center">
                <div className="col-span-2 capitalize text-center">
                    Campaigns
                </div>
                <div className="col-span-7">
                    <input type="search" placeholder="Search Campaign..." className="bg-gray-100 p-3 rounded-2xl focus:outline-none w-11/12	" />
                </div>
                <div className=" col-span-3">
                    <button className="focus:outline-none bg-blue-200 text-blue-800 font-semibold py-1 px-4 rounded-lg">
                       + New Campaign 
                    </button>
                </div>
            </div>
            <hr />
            <Table />
        </div>
    )
}

export default Campaigns