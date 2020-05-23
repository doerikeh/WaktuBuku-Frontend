import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class ProfileForm extends Component {

    renderField =({ input, label, type, meta: {touched, error } }) =>{
        return(
            <div className={`field ${touched && error ? `error` : ``}`}>
                <div className="mt-8 flex">
                    <div className="border-none w-32 flex justify-end">
                        <label className="font-semibold max-w-lg">{label}</label>
                        <input className="border w-full h-8 ml-10" {...input} type={type} />
                        {touched && error && (
                            <span className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{error}</span>
                        )}
                    </div>
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
                        <textarea className="border w-full h-24 ml-10" {...input} type={type} />
                        {touched && error && (
                            <span className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{error}</span>
                        )}
                    </div>
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

export default reduxForm({
    touchOnBlur: false,
})(ProfileForm);
  
