import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class ProfileForm extends Component {

    renderField =({ input, label, type, meta: {touched, error } }) =>{
        return(
            <div className={`field ${touched && error ? `error` : ``}`}>
                <div className="mt-8 flex">
                    <div className="border-none w-32 flex justify-end">
                        <label className="font-semibold max-w-lg">{label}</label>
                        </div>
                        <input className="border w-full h-8 ml-10" {...input} type={type} />
                        {touched && error && (
                            <span className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{error}</span>
                        )}
                </div>
            </div>
        );
    };

    renderTextField =({ input, label, type, meta: {touched, error } }) =>{
        return(
            <div className={`field ${touched && error ? `error` : ``}`}>
                <div className="mt-8 flex">
                    <div className="border-none w-32 flex justify-end">
                        <label className="font-semibold max-w-lg">{label}</label>
                    
                </div>
                        <textarea className="border w-full h-24 ml-10" {...input} type={type} />
                        {touched && error && (
                            <span className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{error}</span>
                        )}
                    </div>
            </div>
        );
    };

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
      };
    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <Field name="username_user" component={this.renderField} label="Username"/>
                    <Field name="email" component={this.renderField} label="Email"/>
                    <Field name="no_telephon" component={this.renderField} label="Telephon"/>
                    <Field name="biografi" component={this.renderTextField} label="Biografi"/>
                    <Field name="alamat" component={this.renderTextField} label="Alamat"/>
                    <button type="submit" className="">Submit</button>
                </form>
            </div>
        );
    }
}

const required = value => (value ? undefined : "Required");

const minLength = min => value =>
    value && value.length < min
    ? `must be at last ${min} characters`
    :undefined;

const minLength3 = minLength(3);

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

const maxLength15 = maxLength(15);

const validate = formValues => {
    const errors = {};
  
    if (!formValues.user) {
      errors.user = 'Please enter at least 1 character';
    }
  
    return errors;
  };

export default reduxForm({
    form: 'userForm',
    touchOnBlur: false,
})(ProfileForm);
  
