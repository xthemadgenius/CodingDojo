import React from 'react';
import App from '../App';

const HookForm = props => {
    const { input, setInput } = props;
    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };
    return(
        <form>
            <div className="form-group">
                <label htmlFor="lastName">First Name</label>
                <input onChange={onChange} type="text" name="firstName" />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input onChange={onChange} type="text" name="lastName" />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Email</label>
                <input onChange={onChange} type="text" name="email" />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Password</label>
                <input onChange={onChange} type="password" name="password" />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Confirm Password</label>
                <input onChange={onChange} type="password" name="confirmPassword" />
            </div>
        </form>
    )
};
export default HookForm;