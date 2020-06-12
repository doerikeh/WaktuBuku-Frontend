import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { login } from '../../../actions/auth';


class Login extends Component {

    renderField =({ input, label, type, meta: {touched, error } }) =>{
        return(
            <div className={`field ${touched && error ? `error` : ``}`}>
                <label className="font-bold text-gray-500 mr-10">{label}</label>
                <input className="border-2 w-full mt-4" {...input} type={type} />
                {touched && error && (
                    <span className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{error}</span>
                )}
            </div>
        );
    };

    hiddenField = ({ type, meta: {error} }) => {
        return(
            <div className="field-light">
                <input type={type} />
                { error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{error}</div>}
            </div>
        );
    };

    onSubmit = formValues => {
        this.props.login(formValues);
    };

    render() {
        if(this.props.isAuthenticated){
            return <Redirect to='/' />;
        }
        const {handleSubmit} = this.props;
        return (
            <div className="">
                <div className="relative">
                    <div className="flex justify-center">
                        <img src={require("../../../assets/image/home/hoplle.jpg")} className=" h-px7" alt="" />
                    </div>
                    <div className=" top-0 left-0 absolute">
                        <div className="border-2 w-px5 bg-white px-32 py-32 h-full">
                            <h2 className="mb-7"><p className="font-bold text-gray-800 text-4xl">Sing In to Your Account</p></h2>  
                            <h2 className="mt-4"><p className="font-semibold text-gray-600">Sign in With</p></h2>
                            <div className="flex mt-4 justify-center">
                                <div className="border w-40 h-16 rounded-lg px-16 py-4">
                                    <img src={require("../../../assets/image/logo/facebook.svg")} className="h-8 w-8" alt=""/>
                                </div>
                                <div className="border w-40 h-16 rounded-lg px-16 py-4 mx-4">
                                    <img src={require("../../../assets/image/logo/github.svg")} className="h-8 w-8" alt=""/>
                                </div>
                                <div className="border w-40 h-16 rounded-lg px-16 py-4">
                                    <img src={require("../../../assets/image/logo/gmail.svg")} className="h-8 w-8" alt=""/>
                                </div>
                            </div>
                            <span className="block my-12">
                                <h2 className="text-center border-b-2 relative font-bold text-gray-600"><span className="bg-white relative top-4 px-4">Or Countinue With</span></h2>
                            </span>
                                <form onSubmit={handleSubmit(this.onSubmit)}>
                                    <div>
                                        <Field label="Email" name="email" component={this.renderField}  type="email" placeholder="your_email@gmail.com" />
                                    </div>
                                    <div className="mt-4">
                                        <Field label='Password' component={this.renderField}  name="password"  type="password" placeholder="your password" />
                                    </div>
                                        
                                    <div className="mt-6 flex items-center justify-between">
                                    <div className="flex items-center">
                                    <input id="remember_me" type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                                    <label className="ml-2 block text-sm leading-5 text-gray-900">
                                        Remember me
                                    </label>
                                    </div>

                                    <div className="text-sm leading-5">
                                    <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                        Forgot your password?
                                    </Link>
                                    </div>
                                    
                                </div>
                                <div className="mt-6">
                                        <button onClick={this.login} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                            
                                        </span>
                                        Sign in
                                        </button>
                                    </div>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
  
Login = connect(
    mapStateToProps,
    { login }
)(Login);

export default reduxForm({
    form: 'loginForm'
})(Login);