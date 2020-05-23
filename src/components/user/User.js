import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../../actions/auth';
import { connect } from 'react-redux';


class User extends Component{

    componentDidMount() {
        this.props.getUsers();
      }

    render(){
    return (
        <div className="flex justify-center h-center">           
            <div className="border-2 relative border-gray-800 w-px5 rounded my-16">
            {this.props.auth.map(users => (
                <div className='item' key={users.id}>
                    <div className="">
                        <img src={require("../../assets/image/home/deep_learning.jpeg")} className="" alt="" />
                    </div>
                    <img src={require("../../assets/image/home/holmes.jpg")} className="rounded-full h-40 w-40 absolute top-12 ml-8 left-0" alt="" />
                    <div className="flex justify-end mt-8 mr-20">
                            <Link to="/user/edit">
                                <div className="border rounded-full bg-blue-900 p-3">
                                    <h2><p className="font-bold text-white">Edit Profile</p></h2>
                                </div>
                            </Link>
                    </div>
                    <h2 className="mt-4 ml-8"><p className="font-bold">{users.username_user}</p></h2>
                    <div className="flex mb-12">
                            <img src={require("../../assets/image/user/calendar.svg")} className="h-8 w-8 ml-8 mt-6" alt="" />
                            <p className="mt-6 ml-5">{users.date_updated}</p>
                    </div>
                    <p>{users.email}</p>
                    <p>{users.alamat}</p>
                    <p>{users.gender}</p>
                    <p>{users.biografi}</p>
                    <p></p>
                    <p></p>
                    <p></p>
               </div>
               ))}
               <div className="flex">
                <h2 className="ml-20 mb-4"><p className="font-bold text-blue-600 text-2xl">Cerita</p></h2>
                <h2 className="mx-20 mb-4"><p className="text-2xl">Like</p></h2>
                <h2 className="mr-20 mb-4"><p className="text-2xl">Favorit Cerita</p></h2>
                <h2 className="mr-20 mb-4"><p className="text-2xl">Mengikuti</p></h2>
               </div>
               <div className="border p-5 w-full h-32">
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
               <div className="border p-5 w-full h-32">
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
               <div className="border p-5 w-full h-32">
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
               <div className="border p-5 w-full h-32">
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
               <div className="border p-5 w-full h-32">
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
               <div className="border p-5 w-full h-32">
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
               <div className="border p-5 w-full h-32">
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
    );
    }
}


const mapStateToProps = (state) => ({
    auth: Object.values(state.auth)
});

export default connect(mapStateToProps, {getUsers})(User);
  