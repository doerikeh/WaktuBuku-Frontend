import React, { useState }  from 'react';
import {Link} from 'react-router-dom';

function Categories(){

    const [isOpen, setIsOpen] = useState(false);


    return (
        <div>
            <div className="border-none w-full p-5 bg-gradient-r-red-pink mb-16">
                <h2 className="flex justify-center"><p className="font-bold text-white text-5xl">Horror</p></h2>
            </div>
            <div className="border-b-2 border-gray-400 ml-64 mr-px6 mb-16">
                <div className="flex">
                    <h2 className="mr-8 mb-2"><p className="font-bold text-2xl text-blue-500">Popular</p></h2>
                    <h2><p className="font-bold text-2xl ">Trending</p></h2>
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
                <div className="w-56 mr-10 rounded overflow-hidden shadow-lg">
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
            <div className="mt-20">
            <div className="border border-none bg-blue-600 p-5">
                <div className="flex justify-center">
                <h2 className="text-2xl"><p className="font-bold text-white">Kenapa Harus Memulai Karya Menulis</p></h2>
                </div>
                <div className="flex justify-center">
                    <div class="md:flex bg-white rounded-lg p-6 w-px2 mt-8 ml-16">
                        <img className="w-16 h-16 rounded-full mx-auto" src={require("../../assets/image/home/holmes.jpg")} alt=""/>
                        <div class="text-center md:text-left">
                        <h2 class="text-lg">Erin Lindford</h2>
                        <div class="text-purple-500">Customer Support</div>
                        <div class="text-gray-600">erinlindford@example.com</div>
                        <div class="text-gray-600">(555) 765-4321</div>
                        </div>
                    </div>
                    <div class="md:flex bg-white rounded-lg p-6 w-px2 mt-8 ml-8">
                        <img className="w-16 h-16 rounded-full mx-auto" src={require("../../assets/image/home/holmes.jpg")} alt=""/>
                        <div class="text-center md:text-left">
                        <h2 class="text-lg">Erin Lindford</h2>
                        <div class="text-purple-500">Customer Support</div>
                        <div class="text-gray-600">erinlindford@example.com</div>
                        <div class="text-gray-600">(555) 765-4321</div>
                        </div>
                    </div>
                    
                    <div class="md:flex bg-white rounded-lg p-6 w-px2 mt-8 ml-8">
                        <img className="w-16 h-16 rounded-full mx-auto" src={require("../../assets/image/home/holmes.jpg")} alt=""/>
                        <div class="text-center md:text-left">
                        <h2 class="text-lg">Erin Lindford</h2>
                        <div class="text-purple-500">Customer Support</div>
                        <div class="text-gray-600">erinlindford@example.com</div>
                        <div class="text-gray-600">(555) 765-4321</div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
        <div className="mt-20 ml-16 flex justify-center">
            <div className="border-none h-center w-8/12">
                <h2 className="mb-4"><p className="font-bold text-2xl text-gray-700">Semua Karya Genre Horror</p></h2>
                <div className="border bg-gray-700 p-8 bg-opacity-50">
                    <div className="flex">
                        <div className="inline-block">
                            <span className="rounded-md shadow-sm">
                                <button onClick={() => setIsOpen(!isOpen)} type="submit" className="border-none bg-white hover:bg-gray-200 font-bold text-black rounded pl-6 pr-12 py-2 relative mr-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150">
                                    Filter
                                <img src={require("../../assets/image/categories/filter.svg")} className="h-8 w-8 absolute top-0 right-0 mt-2 mr-2" alt=""/>
                                </button>
                            </span>
                            <div className="origin-top-right absolute right-1 mt-2 w-56 rounded-md shadow-lg">
                                <div className="rounded-md bg-white shadow-xs">
                                    <div className="py-1" >
                                        <Link href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 transition duration-150 ease-in-out">Account settings</Link>
                                        <Link href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 transition duration-150 ease-in-out">Support</Link>
                                        <Link href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 transition duration-150 ease-in-out">License</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <button type="submit" className="border-none bg-white hover:bg-gray-200 font-bold text-black rounded pl-6 pr-12 py-2 relative">
                            Like
                        <img src={require("../../assets/image/categories/filter.svg")} className="h-8 w-8 absolute top-0 right-0 mt-2 mr-2" alt=""/>
                        </button>
                    </div>
                </div>
                <div className="border p-5 w-full h-32 mt-5">
                    <div className="border border-none flex">
                        <img src={require("../../assets/image/home/holmes.jpg")} className="h-20 w-24" alt=""/>
                        <div className="mr-32">
                            <h2 className="ml-6 mb-1"><p className="font-bold">Kisah Detektif Dari Desa</p></h2>
                            <h2 className="ml-6 mb-1"><p className="text-xs">Hilangnya Ayam Pak Kades</p></h2>
                            <h2 className="ml-6 w-px2"><p className="text-sm">pak kades mencari sherlock ke rumah nya dan disana ada sherlock sedang bercengrama dengan ....</p></h2>
                        </div>
                        <div className="right-0">
                            <h2 className="mb-1"><p className="text-xs">total Chapter:</p></h2>
                            <h2 className="mb-1"><p className="text-xs">Word:</p></h2>
                            <h2 className="w-px2"><p className="text-xs">Di upload Date:</p></h2>
                            <div className="flex">
                            <img src={require("../../assets/image/home/like.svg")} className="h-6 w-6 mt-2 mr-6" alt="" />
                            <img src={require("../../assets/image/home/unlike.svg")} className="h-6 w-6 mt-3 mr-6" alt="" />  
                            <img src={require("../../assets/image/home/like.svg")} className="h-6 w-6 mt-2" alt="" />  
                            </div>
                        </div>
                        
                    </div>
               </div>

               <div className="border p-5 w-full h-32 mt-5">
                    <div className="border border-none flex">
                        <img src={require("../../assets/image/home/holmes.jpg")} className="h-20 w-24" alt=""/>
                        <div className="mr-32">
                            <h2 className="ml-6 mb-1"><p className="font-bold">Kisah Detektif Dari Desa</p></h2>
                            <h2 className="ml-6 mb-1"><p className="text-xs">Hilangnya Ayam Pak Kades</p></h2>
                            <h2 className="ml-6 w-px2"><p className="text-sm">pak kades mencari sherlock ke rumah nya dan disana ada sherlock sedang bercengrama dengan ....</p></h2>
                        </div>
                        <div className="right-0">
                            <h2 className="mb-1"><p className="text-xs">total Chapter:</p></h2>
                            <h2 className="mb-1"><p className="text-xs">Word:</p></h2>
                            <h2 className="w-px2"><p className="text-xs">Di upload Date:</p></h2>
                            <div className="flex">
                            <img src={require("../../assets/image/home/like.svg")} className="h-6 w-6 mt-2 mr-6" alt="" />
                            <img src={require("../../assets/image/home/unlike.svg")} className="h-6 w-6 mt-3 mr-6" alt="" />  
                            <img src={require("../../assets/image/home/like.svg")} className="h-6 w-6 mt-2" alt="" />  
                            </div>
                        </div>
                        
                    </div>
               </div>
               <div className="border p-5 w-full h-32 mt-5">
                    <div className="border border-none flex">
                        <img src={require("../../assets/image/home/holmes.jpg")} className="h-20 w-24" alt=""/>
                        <div className="mr-32">
                            <h2 className="ml-6 mb-1"><p className="font-bold">Kisah Detektif Dari Desa</p></h2>
                            <h2 className="ml-6 mb-1"><p className="text-xs">Hilangnya Ayam Pak Kades</p></h2>
                            <h2 className="ml-6 w-px2"><p className="text-sm">pak kades mencari sherlock ke rumah nya dan disana ada sherlock sedang bercengrama dengan ....</p></h2>
                        </div>
                        <div className="right-0">
                            <h2 className="mb-1"><p className="text-xs">total Chapter:</p></h2>
                            <h2 className="mb-1"><p className="text-xs">Word:</p></h2>
                            <h2 className="w-px2"><p className="text-xs">Di upload Date:</p></h2>
                            <div className="flex">
                            <img src={require("../../assets/image/home/like.svg")} className="h-6 w-6 mt-2 mr-6" alt="" />
                            <img src={require("../../assets/image/home/unlike.svg")} className="h-6 w-6 mt-3 mr-6" alt="" />  
                            <img src={require("../../assets/image/home/like.svg")} className="h-6 w-6 mt-2" alt="" />  
                            </div>
                        </div>
                        
                    </div>
               </div>
               <div className="border p-5 w-full h-32 mt-5">
                    <div className="border border-none flex">
                        <img src={require("../../assets/image/home/holmes.jpg")} className="h-20 w-24" alt=""/>
                        <div className="mr-32">
                            <h2 className="ml-6 mb-1"><p className="font-bold">Kisah Detektif Dari Desa</p></h2>
                            <h2 className="ml-6 mb-1"><p className="text-xs">Hilangnya Ayam Pak Kades</p></h2>
                            <h2 className="ml-6 w-px2"><p className="text-sm">pak kades mencari sherlock ke rumah nya dan disana ada sherlock sedang bercengrama dengan ....</p></h2>
                        </div>
                        <div className="right-0">
                            <h2 className="mb-1"><p className="text-xs">total Chapter:</p></h2>
                            <h2 className="mb-1"><p className="text-xs">Word:</p></h2>
                            <h2 className="w-px2"><p className="text-xs">Di upload Date:</p></h2>
                            <div className="flex">
                            <img src={require("../../assets/image/home/like.svg")} className="h-6 w-6 mt-2 mr-6" alt="" />
                            <img src={require("../../assets/image/home/unlike.svg")} className="h-6 w-6 mt-3 mr-6" alt="" />  
                            <img src={require("../../assets/image/home/like.svg")} className="h-6 w-6 mt-2" alt="" />  
                            </div>
                        </div>
                        
                    </div>
               </div>
               <div className="border p-5 w-full h-32 mt-5">
                    <div className="border border-none flex">
                        <img src={require("../../assets/image/home/holmes.jpg")} className="h-20 w-24" alt=""/>
                        <div className="mr-32">
                            <h2 className="ml-6 mb-1"><p className="font-bold">Kisah Detektif Dari Desa</p></h2>
                            <h2 className="ml-6 mb-1"><p className="text-xs">Hilangnya Ayam Pak Kades</p></h2>
                            <h2 className="ml-6 w-px2"><p className="text-sm">pak kades mencari sherlock ke rumah nya dan disana ada sherlock sedang bercengrama dengan ....</p></h2>
                        </div>
                        <div className="right-0">
                            <h2 className="mb-1"><p className="text-xs">total Chapter:</p></h2>
                            <h2 className="mb-1"><p className="text-xs">Word:</p></h2>
                            <h2 className="w-px2"><p className="text-xs">Di upload Date:</p></h2>
                            <div className="flex">
                            <img src={require("../../assets/image/home/like.svg")} className="h-6 w-6 mt-2 mr-6" alt="" />
                            <img src={require("../../assets/image/home/unlike.svg")} className="h-6 w-6 mt-3 mr-6" alt="" />  
                            <img src={require("../../assets/image/home/like.svg")} className="h-6 w-6 mt-2" alt="" />  
                            </div>
                        </div>
                        
                    </div>
               </div>
               <div className="border p-5 w-full h-32 mt-5">
                    <div className="border border-none flex">
                        <img src={require("../../assets/image/home/holmes.jpg")} className="h-20 w-24" alt=""/>
                        <div className="mr-32">
                            <h2 className="ml-6 mb-1"><p className="font-bold">Kisah Detektif Dari Desa</p></h2>
                            <h2 className="ml-6 mb-1"><p className="text-xs">Hilangnya Ayam Pak Kades</p></h2>
                            <h2 className="ml-6 w-px2"><p className="text-sm">pak kades mencari sherlock ke rumah nya dan disana ada sherlock sedang bercengrama dengan ....</p></h2>
                        </div>
                        <div className="right-0">
                            <h2 className="mb-1"><p className="text-xs">total Chapter:</p></h2>
                            <h2 className="mb-1"><p className="text-xs">Word:</p></h2>
                            <h2 className="w-px2"><p className="text-xs">Di upload Date:</p></h2>
                            <div className="flex">
                            <img src={require("../../assets/image/home/like.svg")} className="h-6 w-6 mt-2 mr-6" alt="" />
                            <img src={require("../../assets/image/home/unlike.svg")} className="h-6 w-6 mt-3 mr-6" alt="" />  
                            <img src={require("../../assets/image/home/like.svg")} className="h-6 w-6 mt-2" alt="" />  
                            </div>
                        </div>
                        
                    </div>
               </div>
               <div className="border p-5 w-full h-32 mt-5">
                    <div className="border border-none flex">
                        <img src={require("../../assets/image/home/holmes.jpg")} className="h-20 w-24" alt=""/>
                        <div className="mr-32">
                            <h2 className="ml-6 mb-1"><p className="font-bold">Kisah Detektif Dari Desa</p></h2>
                            <h2 className="ml-6 mb-1"><p className="text-xs">Hilangnya Ayam Pak Kades</p></h2>
                            <h2 className="ml-6 w-px2"><p className="text-sm">pak kades mencari sherlock ke rumah nya dan disana ada sherlock sedang bercengrama dengan ....</p></h2>
                        </div>
                        <div className="right-0">
                            <h2 className="mb-1"><p className="text-xs">total Chapter:</p></h2>
                            <h2 className="mb-1"><p className="text-xs">Word:</p></h2>
                            <h2 className="w-px2"><p className="text-xs">Di upload Date:</p></h2>
                            <div className="flex">
                            <img src={require("../../assets/image/home/like.svg")} className="h-6 w-6 mt-2 mr-6" alt="" />
                            <img src={require("../../assets/image/home/unlike.svg")} className="h-6 w-6 mt-3 mr-6" alt="" />  
                            <img src={require("../../assets/image/home/like.svg")} className="h-6 w-6 mt-2" alt="" />  
                            </div>
                        </div>
                        
                    </div>
               </div>
               <div className="border p-5 w-full h-32 mt-5">
                    <div className="border border-none flex">
                        <img src={require("../../assets/image/home/holmes.jpg")} className="h-20 w-24" alt=""/>
                        <div className="mr-32">
                            <h2 className="ml-6 mb-1"><p className="font-bold">Kisah Detektif Dari Desa</p></h2>
                            <h2 className="ml-6 mb-1"><p className="text-xs">Hilangnya Ayam Pak Kades</p></h2>
                            <h2 className="ml-6 w-px2"><p className="text-sm">pak kades mencari sherlock ke rumah nya dan disana ada sherlock sedang bercengrama dengan ....</p></h2>
                        </div>
                        <div className="right-0">
                            <h2 className="mb-1"><p className="text-xs">total Chapter:</p></h2>
                            <h2 className="mb-1"><p className="text-xs">Word:</p></h2>
                            <h2 className="w-px2"><p className="text-xs">Di upload Date:</p></h2>
                            <div className="flex">
                            <img src={require("../../assets/image/home/like.svg")} className="h-6 w-6 mt-2 mr-6" alt="" />
                            <img src={require("../../assets/image/home/unlike.svg")} className="h-6 w-6 mt-3 mr-6" alt="" />  
                            <img src={require("../../assets/image/home/like.svg")} className="h-6 w-6 mt-2" alt="" />  
                            </div>
                        </div>
                        
                    </div>
               </div>
               <div className="border p-5 w-full h-32 mt-5">
                    <div className="border border-none flex">
                        <img src={require("../../assets/image/home/holmes.jpg")} className="h-20 w-24" alt=""/>
                        <div className="mr-32">
                            <h2 className="ml-6 mb-1"><p className="font-bold">Kisah Detektif Dari Desa</p></h2>
                            <h2 className="ml-6 mb-1"><p className="text-xs">Hilangnya Ayam Pak Kades</p></h2>
                            <h2 className="ml-6 w-px2"><p className="text-sm">pak kades mencari sherlock ke rumah nya dan disana ada sherlock sedang bercengrama dengan ....</p></h2>
                        </div>
                        <div className="right-0">
                            <h2 className="mb-1"><p className="text-xs">total Chapter:</p></h2>
                            <h2 className="mb-1"><p className="text-xs">Word:</p></h2>
                            <h2 className="w-px2"><p className="text-xs">Di upload Date:</p></h2>
                            <div className="flex">
                            <img src={require("../../assets/image/home/like.svg")} className="h-6 w-6 mt-2 mr-6" alt="" />
                            <img src={require("../../assets/image/home/unlike.svg")} className="h-6 w-6 mt-3 mr-6" alt="" />  
                            <img src={require("../../assets/image/home/like.svg")} className="h-6 w-6 mt-2" alt="" />  
                            </div>
                        </div>
                        
                    </div>
               </div>
               <div className="border p-5 w-full h-32 mt-5">
                    <div className="border border-none flex">
                        <img src={require("../../assets/image/home/holmes.jpg")} className="h-20 w-24" alt=""/>
                        <div className="mr-32">
                            <h2 className="ml-6 mb-1"><p className="font-bold">Kisah Detektif Dari Desa</p></h2>
                            <h2 className="ml-6 mb-1"><p className="text-xs">Hilangnya Ayam Pak Kades</p></h2>
                            <h2 className="ml-6 w-px2"><p className="text-sm">pak kades mencari sherlock ke rumah nya dan disana ada sherlock sedang bercengrama dengan ....</p></h2>
                        </div>
                        <div className="right-0">
                            <h2 className="mb-1"><p className="text-xs">total Chapter:</p></h2>
                            <h2 className="mb-1"><p className="text-xs">Word:</p></h2>
                            <h2 className="w-px2"><p className="text-xs">Di upload Date:</p></h2>
                            <div className="flex">
                            <img src={require("../../assets/image/home/like.svg")} className="h-6 w-6 mt-2 mr-6" alt="" />
                            <img src={require("../../assets/image/home/unlike.svg")} className="h-6 w-6 mt-3 mr-6" alt="" />  
                            <img src={require("../../assets/image/home/like.svg")} className="h-6 w-6 mt-2" alt="" />  
                            </div>
                        </div>
                        
                    </div>
               </div>
               <div className="border p-5 w-full h-32 mt-5">
                    <div className="border border-none flex">
                        <img src={require("../../assets/image/home/holmes.jpg")} className="h-20 w-24" alt=""/>
                        <div className="mr-32">
                            <h2 className="ml-6 mb-1"><p className="font-bold">Kisah Detektif Dari Desa</p></h2>
                            <h2 className="ml-6 mb-1"><p className="text-xs">Hilangnya Ayam Pak Kades</p></h2>
                            <h2 className="ml-6 w-px2"><p className="text-sm">pak kades mencari sherlock ke rumah nya dan disana ada sherlock sedang bercengrama dengan ....</p></h2>
                        </div>
                        <div className="right-0">
                            <h2 className="mb-1"><p className="text-xs">total Chapter:</p></h2>
                            <h2 className="mb-1"><p className="text-xs">Word:</p></h2>
                            <h2 className="w-px2"><p className="text-xs">Di upload Date:</p></h2>
                            <div className="flex">
                            <img src={require("../../assets/image/home/like.svg")} className="h-6 w-6 mt-2 mr-6" alt="" />
                            <img src={require("../../assets/image/home/unlike.svg")} className="h-6 w-6 mt-3 mr-6" alt="" />  
                            <img src={require("../../assets/image/home/like.svg")} className="h-6 w-6 mt-2" alt="" />  
                            </div>
                        </div>
                        
                    </div>
               </div>
            </div>
        </div>
        </div>
    );
}

export default Categories;
