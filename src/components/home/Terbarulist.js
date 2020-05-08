import React from 'react';

const Terbarulist = () => {
    return (
        <div>
            <div className="flex justify-center my-6">
                <h2><span className="font-bold text-2xl">Terbaru</span></h2>
            </div>
            <div className="border-b-2 border-gray-600 mx-64">
                <div className="flex">
                    <h2 className="mb-3 pr-16"><span className="font-bold font-sans text-xl">Horror</span></h2>
                    <h2 className="mb-3 pr-16"><span className="font-sans text-xl">Romance</span></h2>
                    <h2 className="mb-3 pr-16"><span className="font-sans text-xl">Fantasy</span></h2>
                    <h2 className="mb-3 pr-16"><span className="font-sans text-xl">Adventure</span></h2>
                </div>
            </div>
            <div className="ml-64 mt-8 flex">
                <div className="w-56 rounded overflow-hidden shadow-lg">
                    <div className="relative">
                    <div className="static">
                        <img className="w-full" src={require("../../assets/image/home/holmes.jpg")} alt="Sunset in the mountains"/>
                        <img  src={require("../../assets/image/home/IMG_20200412_132558.jpg")} className="rounded-full h-10 w-10 absolute bottom-0 right-0 mr-3" alt=""/>
                    </div>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                        Chp-3 hlm 1-60 ongoing
                        </p>
                    </div>
                    
                    <div className="border p-2 h-8 justify-center items-center">
                        <div className="flex">
                            <p className="text-m">30 minute yang lalu</p>
                            <div className="ml-12">
                                <img src={require("../../assets/image/home/like.svg")} className="h-5 w-5" alt=""/>
                                <span><p className="font-bold">1</p></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-56 rounded overflow-hidden shadow-lg mx-10">
                    <img className="w-full" src={require("../../assets/image/home/holmes.jpg")} alt="Sunset in the mountains"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                        Chp-3 hlm 1-60 ongoing 
                         </p>
                    </div>
                    <div className="px-6 py-4">
                        
                    </div>
                </div>
                <div className="w-56 rounded overflow-hidden shadow-lg mr-10">
                    <img className="w-full" src={require("../../assets/image/home/holmes.jpg")} alt="Sunset in the mountains"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                        Chp-3 hlm 1-60 ongoing 
                        </p>
                    </div>
                    <div className="px-6 py-4">
                       
                    </div>
                </div>
                <div className="w-56 rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={require("../../assets/image/home/holmes.jpg")} alt="Sunset in the mountains"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                        Chp-3 hlm 1-60 ongoing 
                        </p>
                    </div>
                    <div className="px-6 py-4">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Terbarulist;
