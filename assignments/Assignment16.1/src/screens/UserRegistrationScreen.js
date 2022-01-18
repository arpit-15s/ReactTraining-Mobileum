import React, {useState} from 'react';
import { withTitle } from '../hoc/with-title';
import withVisibility from '../hoc/with-visibility';

const UserRegistrationScreen = ({ now }) => {
  
  const [personDetails, setPersonDetails] = useState({name: "", email: "", password: ""});

  let confirm_password = "";
  const onRegister = () => {

  }

  const handleUpdate = (id, value) => {
    const updatedValue = {...personDetails};
    updatedValue[id] = value;
    setPersonDetails(updatedValue);
  }

  const handleSubmit = (e) => {
      // e.preventDefault();
      console.log(personDetails);
      onRegister();
  }

  const handlePasswordMatch = (e) => {
    if(personDetails["password"] === confirm_password){
      handleSubmit(e);
    }
    else{
      // e.preventDefault();
      alert("Password not matching");
    }
  }

  return (

    <div >
      <form>
          <div className="form-group">
            <label htmlFor="exampleInputName1">Name</label>
            <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter name" onChange={(e) => handleUpdate("name", e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => handleUpdate("email", e.target.value)}/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Set Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => handleUpdate("password", e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Confirm Password</label>
            <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Confirm Password" onChange={(e) => {confirm_password = e.target.value;}}/>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={(e) => handlePasswordMatch(e)}>Submit</button>
        </form>
    </div>

  );
}
//export default BookListScreen; 
export default
  withVisibility(
      withTitle(UserRegistrationScreen, "User Registration Screen")
  );


