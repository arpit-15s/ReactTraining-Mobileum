import React, {useState} from 'react';

const Login = () => {

    const [credentials, setCredentials] = useState({email: "", password: ""});

    const handleUpdate = (id, value) => {
        const updatedValue = {...credentials};
        updatedValue[id] = value;
        setCredentials(updatedValue);
    }

    const handleSubmit = () => {
        console.log(credentials);
    }

    return(
        <div className="login-screen ">
            <h1>User Login</h1>
            <div className="input-group mb-3">
                <form>
                    
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => handleUpdate("email", e.target.value)}/>
                    </div>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => handleUpdate("password", e.target.value)}/>
                    </div>


                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button> 

                </form>
            </div>
        </div>
    );
}

export default Login;
