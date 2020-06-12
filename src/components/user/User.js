import React, { Component } from 'react';
import UserDetail from './UserDetail';
import UserStoryList from './UserStoryList';


class User extends Component{

    render(){
    return (
        <div className="flex justify-center h-center">           
            <div className="border-2 relative border-gray-800 w-px5 rounded my-16">
            
            <UserDetail/>
               {/* <div>
               <div className="flex">
                    <h2 className="ml-20 mb-4"><p className="font-bold text-blue-600 text-2xl">Cerita</p></h2>
                    <h2 className="mx-20 mb-4"><p className="text-2xl">Like</p></h2>
                    <h2 className="mr-20 mb-4"><p className="text-2xl">Favorit Cerita</p></h2>
                    <h2 className="mr-20 mb-4"><p className="text-2xl">Mengikuti</p></h2>
                </div>
               </div> */}
               <UserStoryList/>
            </div>
        </div>
    );
    }
}


export default User;
  