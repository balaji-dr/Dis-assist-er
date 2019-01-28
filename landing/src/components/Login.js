import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import Funds from "./Funds";



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password:''
        };

        this.handleChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        console.log('Change detected. State updated' + name + ' = ' + value);
    }

    handleSubmit(event) {
        if(this.state.name === "admin" && this.state.password === "admin")
            this.props.history.push('/funds');
        // event.preventDefault();
    }

    render() {
        return (
            <div style={{width: 500, alignSelf: "center", alignItems: "center", justifyContent: 'center', marginLeft: 450, marginTop: 120}}>
                <a href="#top" className="smooth"><img src={require("../assets/img/namelogo.png")} alt="" style={{width: 150, height: 170, marginLeft: 200}} /></a>

                <form onSubmit={this.handleSubmit} action="/funds" method={"get"} >
                    <center>
                        <label htmlFor="dashboard"  style={{marginLeft: 50, fontWeight: "600"}}>With great power comes great responsibilities.</label>
                    </center>
                    <center>
                        <label htmlFor="dashboard"  style={{marginLeft: 50, fontWeight: "600"}}>Funds dashboard login</label>
                    </center>
                    <div className="form-group">
                        <label for="nameImput">Username</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} className="form-control" id="nameImput" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input name="password" type="password" value={this.state.password} onChange={this.handleChange} className="form-control" id="emailImput" placeholder="Password" />
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary" />
                </form>
            </div>
        )
    }
}

export default Login;
