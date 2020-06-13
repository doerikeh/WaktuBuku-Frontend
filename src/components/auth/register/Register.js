import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {Field,reduxForm} from 'redux-form';
import {register} from '../../../actions/auth';

class Register extends Component {

    renderField = ({ input, label, type, meta: { touched, error } }) => {
        return (
          <div className={`field ${touched && error ? 'error' : ''}`}>
            <label className="font-bold text-gray-500 mr-10">{label}</label>
            <input className="border-2 w-full mt-4" {...input} type={type} />
            {touched && error && (
              <span className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{error}</span>
            )}
          </div>
        );
      };

    onSubmit = formValues => {
    this.props.register(formValues);
    };
    


    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to='/' />;
          }
        return (
            <div className="">
                <div className="relative">
                    <div className="flex justify-center">
                        <img src={require("../../../assets/image/home/hoplle.jpg")} className="h-px8" alt="" />
                    </div>
                    <div className=" top-0 left-0 absolute">
                        <div className="border-2 w-px5 bg-white px-32 py-32 h-full">
                            <h2 className="mb-7"><p className="font-bold text-gray-800 text-4xl">Register</p></h2>  
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
                            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                                <div>
                                    <Field validate={[required, minLength3, maxLength15]} name="username_user" label='Username' component={this.renderField} type="text" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"  placeholder="username" />
                                </div>
                                <div className="mt-4">
                                    <Field name="email"  component={this.renderField} label="Email" validate={required} className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="email" placeholder="your email" />
                                </div>
                                <div className="mt-4">
                                    <Field name="password" component={this.renderField} validate={required} label="Password" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="password" placeholder="your password" />

                                </div>
                                <div className="mt-4">
                                    <Field name="password2" component={this.renderField} validate={[required, passwordsMatch]} label="Confirm Password" className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="password" placeholder="your password" />
                                </div>
                           
                        <div className="mt-6">
                                <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                    </svg>
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

const required = value => (value ? undefined : 'Required');

const minLength = min => value =>
  value && value.length < min
    ? `Must be at least ${min} characters`
    : undefined;

const minLength3 = minLength(3);const validate = formValues => {
  const errors = {};

  if (!formValues.task) {
    errors.task = 'Please enter at least 1 character';
  }

  return errors;
};

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

const maxLength15 = maxLength(15);

const passwordsMatch = (value, allValues) =>
  value !== allValues.password ? 'Passwords do not match' : undefined;

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

Register = connect(
  mapStateToProps,
  { register }
)(Register);

export default reduxForm({
  form: 'registerForm'
})(Register);

