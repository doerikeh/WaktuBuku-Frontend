import React from 'react';

const Categories = () => {
    return (
        <div>
            <h1 className="ml-12 mt-8"><p className="font-bold text-3xl font-sans">Top Categories :</p></h1>

            <div className="flex">

                <div className="max-w-sm rounded overflow-hidden shadow-lg ml-12 mt-16">
                    <div className="relative">
                    <div className="static">
                        <img className="w-full" src={require("../../assets/image/home/holmes.jpg")} alt="Sunset in the mountains"/>
                    </div>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Horror</div>
                        
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg ml-16 mt-16">
                    <div className="relative">
                    <div className="static">
                        <img className="w-full" src={require("../../assets/image/home/holmes.jpg")} alt="Sunset in the mountains"/>
                    </div>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Romance</div>
                        
                    </div>
                    
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg ml-16 mt-16">
                    <div className="relative">
                        <div className="static">
                            <img className="w-full" src={require("../../assets/image/home/holmes.jpg")} alt="Sunset in the mountains"/>
                        </div>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Adventure</div>
                        
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg ml-16 mt-16">
                    <div className="relative">
                        <div className="static">
                            <img className="w-full" src={require("../../assets/image/home/holmes.jpg")} alt="Sunset in the mountains"/>
                        </div>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">comedy</div>
                        
                    </div>
                </div>
                </div>
                <div className="flex">

                <div className="max-w-sm rounded overflow-hidden shadow-lg ml-12 mt-16">
                    <div className="relative">
                    <div className="static">
                        <img className="w-full" src={require("../../assets/image/home/holmes.jpg")} alt="Sunset in the mountains"/>
                    </div>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Fantasy</div>
                        
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg ml-16 mt-16">
                    <div className="relative">
                    <div className="static">
                        <img className="w-full" src={require("../../assets/image/home/holmes.jpg")} alt="Sunset in the mountains"/>
                    </div>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Sains</div>
                        
                    </div>
                    
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg ml-16 mt-16">
                    <div className="relative">
                        <div className="static">
                            <img className="w-full" src={require("../../assets/image/home/holmes.jpg")} alt="Sunset in the mountains"/>
                        </div>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Life</div>
                        
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg ml-16 mt-16">
                    <div className="relative">
                        <div className="static">
                            <img className="w-full" src={require("../../assets/image/home/holmes.jpg")} alt="Sunset in the mountains"/>
                        </div>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Action</div>
                        
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Categories;
