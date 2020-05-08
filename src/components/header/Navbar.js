import React from 'react';
import '../../assets/main.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-indigo_blue-900 p-6 ">
                <div className="flex-1">
                    <div className="flex">
                        <h2 className="ml-16 font-bold text-white text-2xl"><Link to='/'>Waktubuku</Link></h2>
                        
                        <div className="relative ml-12 border-none">
                        <Link to="./categories"><img src={require("../../assets/image/navbar/signs.svg")} className="h-10 w-20" alt="" /></Link>
                        </div>
                        <h2 className="font-bold text-white text-2xl">Categories</h2>
                        
                    </div>
                </div>
                <div className="flex-1">
                <form>
                    <div class="md:w-2/3 ml-16 relative">
                        <img src={require("../../assets/image/navbar/search.svg")} className="absolute w-6 h-6 mt-2 mr-3 opacity-25 right-0 top-0 " alt="" />
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 border" type="text" placeholder="pencarian" />
                    </div>
                </form>
                </div>
                <div className="flex-1">
                    <div className="flex">
                    <div className="">
                        <img src={require("../../assets/image/navbar/ui.svg")} className="h-10 w-10 object-right rounded" alt="" />
                    </div>
                    <div className="">
                        <img src={require("../../assets/image/navbar/edit-tools.svg")} className="h-10 w-10 object-right rounded mx-24" alt="" />
                    </div>
                    <div className="">
                        <Link to="/user"><img src={require("../../assets/image/navbar/interface.svg")} className="h-10 w-10 object-right rounded" alt="" /></Link>
                    </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
