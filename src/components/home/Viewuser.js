import React from 'react';
import '../../assets/main.css';

const Viewuser = () => {
    return (
        <div>
            <div className="relative"> 
                <img src={require("../../assets/image/home/deep_learning.jpeg")} className="object-cover h-px19 w-full opacity-75" alt=""/>    
                <div className="absolute top-0 left-0">
                    <div className="border p-10 w-auto rounded-lg mt-32 ml-24 bg-white">
                        <div className="font-bold text-lg">Mari Menulis Dan Membaca</div>
                        <p className="mb-10">marilah raih mimpi mu menjadi penulis terkenal</p>
                        <button className="bg-indigo-800 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded shadow-xl">
                            Tulislah
                        </button>
                        <button className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-xl ml-16">
                            Bacalah
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewuser;
