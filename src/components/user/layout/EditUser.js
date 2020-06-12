import _ from 'lodash';

import React ,{ Component }  from 'react';
import {connect} from 'react-redux';
import {editUser} from '../../../actions/user';
import ProfileForm from './ProfileForm';

class ProfileEdit extends Component{

    onSubmit = formValues => {
        this.props.editUser(this.props.match.params.id, formValues);
    };

    render(){
        return(
            <div>
                <div className="flex justify-center mt-16 mb-10">
                <ul className="border h-screen p-8">
                    <li className="mb-6">
                        <h2 className="text-lg"><p className="text-gray-900 font-semibold">Edit Profile</p></h2>
                    </li>
                    <li className="mb-6">
                        <h2 className="text-lg"><p className="text-gray-700 font-semibold">Change Password</p></h2>
                    </li>
                    <li className="mb-6">
                        <h2 className="text-lg"><p className="text-gray-700 font-semibold">Privasi Dan Keamanan</p></h2>
                    </li>
                    <li className="mb-6">
                        <h2 className="text-lg"><p className="text-gray-700 font-semibold">Aktivitas Login</p></h2>
                    </li>
                    <li>
                        <h2 className="text-lg"><p className="text-gray-700 font-semibold">Email dan SMS</p></h2>
                    </li>
                </ul>
                <div className="border w-px3 pt-8 pr-24 px-10">
                    <div className="flex">
                        <img src={require('../../../assets/image/home/IMG_20200412_132558.jpg')} className="h-24 w-24 rounded-full" alt="" />
                        <div className="ml-8 mt-2">
                            <h2 className=""><p className="font-bold text-xl">Firdaus Alfajar</p></h2>
                            <h2 className="mt-4"><p className="font-bold text-blue-800 text-xl">Change Profile Image</p></h2>
                        </div>
                    </div>
                    <div>
                        <ProfileForm initialValues={_.pick(this.props.user, "profile")} enableReinitialize={true} onSubmit={this.onSubmit} />
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    user: state.auth[ownProps.match.params.id]
});

export default connect(
    mapStateToProps,
    {editUser}
)(ProfileEdit);