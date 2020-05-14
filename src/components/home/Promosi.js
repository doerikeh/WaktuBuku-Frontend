import React from 'react';

const Promosi = () => {
    return (
        <div>
            <div className="my-32 static">
                <div className="border border-gray-300 bg-gray-300" >
                    <div className="flex justify-center">
                        <h2 className="my-5"><p className="font-bold text-4xl w-px3">Jadilah Penulis Handal yang Mencurahkan Semua inpirasi mu</p></h2>
                    </div>
                    <div className=" ml-px4 justify-center mb-4">
                        <button className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-xl ml-16">
                                Bacalah
                        </button>
                    </div>
                </div>
                <div className="absolute top-13 left-3">
                    <img src={require("../../assets/image/home/IMG_20200412_132558.jpg")} className=" h-full w-56" alt=""/>
                </div>
                
            </div>
        </div>
    )
}

export default Promosi;
