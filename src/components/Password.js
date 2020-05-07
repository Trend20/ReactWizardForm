import React from 'react';
 
const Password = (props) => {
    if(props.currentStep !== 3){
        return null
    }
    return (
        <div className="form-group">
            <label for="password">Password</label>
            <input 
            type="text" 
            placeholder="Enter Password"
            name="password"
            id="password"
            className="form-control"
            value={props.password}
            onChange={props.handleChange} />
        </div>
    );
}
 
export default Password;