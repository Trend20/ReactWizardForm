import React from 'react';
 
const Email = () => {
    return (
        <div className="form-group">
            <label for="email">Email Address</label>
            <input 
            type="text" 
            placeholder="Enter Email"
            name="email"
            id="email"
            className="form-control"
            value={PaymentResponse.email}
            onChange={PaymentResponse.handleChange} />
        </div>
    );
}
 
export default Email;