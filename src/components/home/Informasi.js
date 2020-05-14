import React from 'react';

const Informasi = () => {
    return (
        <div className="mt-20">
            <div className="border border-none bg-blue-600 p-5">
                <div className="flex justify-center">
                <h2 className="text-2xl"><p className="font-bold text-white">Kenapa Harus Memulai Karya Menulis</p></h2>
                </div>
                <div className="flex justify-center">
                    <div className="md:flex bg-white rounded-lg p-6 w-px2 mt-8 ml-16">
                        <img className="w-16 h-16 rounded-full mx-auto" src={require("../../assets/image/home/holmes.jpg")} alt=""/>
                        <div className="text-center md:text-left">
                        <h2 className="text-lg">Erin Lindford</h2>
                        <div className="text-purple-500">Customer Support</div>
                        <div className="text-gray-600">erinlindford@example.com</div>
                        <div className="text-gray-600">(555) 765-4321</div>
                        </div>
                    </div>
                    <div className="md:flex bg-white rounded-lg p-6 w-px2 mt-8 ml-8">
                        <img className="w-16 h-16 rounded-full mx-auto" src={require("../../assets/image/home/holmes.jpg")} alt=""/>
                        <div className="text-center md:text-left">
                        <h2 className="text-lg">Erin Lindford</h2>
                        <div className="text-purple-500">Customer Support</div>
                        <div className="text-gray-600">erinlindford@example.com</div>
                        <div className="text-gray-600">(555) 765-4321</div>
                        </div>
                    </div>
                    
                    <div className="md:flex bg-white rounded-lg p-6 w-px2 mt-8 ml-8">
                        <img className="w-16 h-16 rounded-full mx-auto" src={require("../../assets/image/home/holmes.jpg")} alt=""/>
                        <div className="text-center md:text-left">
                        <h2 className="text-lg">Erin Lindford</h2>
                        <div className="text-purple-500">Customer Support</div>
                        <div className="text-gray-600">erinlindford@example.com</div>
                        <div className="text-gray-600">(555) 765-4321</div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Informasi;
