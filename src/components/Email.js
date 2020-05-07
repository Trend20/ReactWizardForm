import React from 'react';
 
const Email = (props) => {
    if(props.currentStep !== 1){
        return null
    }
    return (
        <div className="form-group">
            <label for="email">Email Address</label>
            <input 
            type="text" 
            placeholder="Enter Email"
            name="email"
            id="email"
            className="form-control"
            value={props.email}
            onChange={props.handleChange} />
        </div>
    );
}
 
export default Email;