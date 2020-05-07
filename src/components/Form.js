import React, { Component } from 'react';
 
class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            currentForm: 1,
            email: '',
            username: '',
            password: ''
        }
    }
    // handleChange function
    handleChange = (event) =>{
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    }

    // submit function

    handleSubmit = (event) =>{
        // prevent default form submission
        event.preventDefault();
        // destructure the properties
        const { email, username, password } = this.state; 
        alert(`Your registration details: \n
              Email: ${email} \n
              Username: ${username} \n
              Password: ${password}`) 
    }
    render() { 
        return (
            <div>
                
            </div>
        );
    }
}
 
export default Form;