import React, { Component } from 'react';
import Email from './Email';
import Username from './Username';
import Password from './Password';
 
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
    _next = () =>{
        let currentForm = this.state.currentForm;
        currentForm = currentForm >= 2? 3: currentForm + 1;
        this.setState({
            currentForm: currentForm
        });
    }
    _prev = () =>{
        let currentForm = this.state.currentForm;
        currentForm = currentForm <= 1? 1: currentForm - 1;
        this.setState({
            currentForm: currentForm
        });
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
              <h3>React Wizard Form</h3>
                <p>Step{this.state.currentForm}</p>
                <form onSubmit={this.handleSubmit}>
                    <Email 
                        currentForm={this.state.currentForm}
                        handleChange={this.handleChange}
                        email={this.state.email}
                    />
                    <Username 
                        currentForm={this.state.currentForm}
                        handleChange={this.handleChange}
                        username={this.state.username}
                    />
                    <Password 
                        currentForm={this.state.currentForm}
                        handleChange={this.handleChange}
                        password={this.state.password}
                    />
                </form>
            </div>
        );
    }
}
 
export default Form;