import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../../actions/user';
import { connect } from 'react-redux';
import UserStoryList from './UserStoryList';


export class UserDetail extends Component {

    componentDidMount(){
        this.props.getUsers()
    }

    render() {
        const EditUser = (
            <div className="flex justify-end mt-8 mr-20">
            <Link to="/user/edit">
                <div className="border rounded-full bg-blue-900 p-3">
                    <h2><p className="font-bold text-white">Edit Profile</p></h2>
                </div>
            </Link>
        </div>
        );
        return (
            <div>
                <div className='item'>
                {this.props.user.map(user => (
                    <div className="" key={user.id}>
                        <div className="">
                            <img src={user.image_walpaper} className="w-full h-px11" alt="" />
                        </div>
                        <img src={user.image_profile} className="rounded-full h-40 w-40 absolute top-12 ml-8 left-0" alt="" />
                        {EditUser}
                        <h2 className="mt-4 ml-8"><p className="font-bold">{user.username_user}</p></h2>
                        <div className="flex mb-12">
                                <img src={require("../../assets/image/user/calendar.svg")} className="h-8 w-8 ml-8 mt-6" alt="" />
                                <p className="mt-6 ml-5">{user.date_updated}</p>
                        </div>  
                    </div>
                    
                ))}
                <div className="flex">
                <h2 className="ml-20 mb-4"><p className="font-bold text-blue-600 text-2xl">Cerita</p></h2>
                <h2 className="mx-20 mb-4"><p className="text-2xl">Like</p></h2>
                <h2 className="mr-20 mb-4"><p className="text-2xl">Favorit Cerita</p></h2>
                <h2 className="mr-20 mb-4"><p className="text-2xl">Mengikuti</p></h2>
               </div>

            </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: Object.values(state.user)
});

export default connect(mapStateToProps, {getUsers})(UserDetail);
