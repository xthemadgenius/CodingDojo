import React from 'react';

const Form = (props) => {
    return (
        <div>
            <form action="">
                <div>
                    <label htmlFor="">FirstName</label>
                    <input type="text" name="firstname"/>
                </div>
                <div>
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="lastName"/>
                </div>
                <div>
                    <label htmlFor="">Sport</label>
                    <input type="text" name="team"/>
                </div>
                <div>
                    <label htmlFor="">Team</label>
                    <input type="text" name="team"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;