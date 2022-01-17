import React from 'react';

class Login extends React.Component {

    state = {
        email: "",
        password: "",
    }

    handleEmail = (e) => {
        this.setState({email: e.target.value});
    }

    handlePassword = (e) => {
        this.setState({password: e.target.value});
    }

    handleSubmit = () => {
        console.log(this.state);
    }

    render(){
        return(
            <div className="login-screen ">
                <h1>User Login</h1>
                <div className="input-group mb-3">
                    <form>
                        
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => this.handleEmail(e)}/>
                        </div>

                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => this.handlePassword(e)}/>
                        </div>
    
    
                        <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button> 
    
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
