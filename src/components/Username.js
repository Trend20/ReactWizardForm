import React from 'react';
 
const Username = (props) => {
    if(props.currentStep !== 2){
        return null
    }
    return (
        <div className="form-group">
            <label for="username">Username</label>
            <input 
            type="text" 
            placeholder="Enter Username"
            name="username"
            id="username"
            className="form-control"
            value={props.username}
            onChange={props.handleChange} />
        </div>
    );
}
 
export default Username;