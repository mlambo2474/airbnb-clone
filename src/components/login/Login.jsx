import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { closeModal } from "../../actions/modalAction";
import { login } from "../../actions/userActions";
import { registerUser } from "../../actions/userRegisterActions";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin || {});
  const userRegister = useSelector( state => state.userRegister)

  const { error, userInfo, loading } = userLogin;
  const { registerError, registerLoading} = userRegister; 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //use useEffect to see whenever the component mounts if there is anything
  //inthe localStorage or if the user has successfully login before
  //so that we can display the userInfo
  const history = useHistory();
  useEffect(() => {
    if (userInfo) {
      //if there iis a user..push to home screen
      history.push("/");
    }
  }, [userInfo, history]);

  const handleLogIn = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., call an API or validate input)
    console.log("Dispatching login action...");
    dispatch(login(email, password));
    console.log("Logging in with:", email, password);
    // You could also close the modal here, if needed:
    dispatch(closeModal()); // Close the modal after successful login
    // setEmail("");
    // setPassword("");
  };
 
  const handleRegister =(e)=>{
    e.preventDefault();
     dispatch(registerUser(email, password))
     dispatch(closeModal());
  }
  return (
    <div className="login-container ">
      <div className="close-button" onClick={() => dispatch(closeModal())}>
        <p>×</p>
      </div>
      <div className="login-header ">
        <h3>Login or Sign Up</h3>
        {(error ||registerError) && <h2>{error}</h2>}
        {(loading || registerLoading) && <h2>loading...</h2>}
      </div>
      <div>
        <button className="facebook">connect with Facebook</button>
        <button className="google">connect with google </button>
      </div>

      <form >
        <div className="login-form ">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div className="login-form">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="submit" type="submit" onClick={handleLogIn}>
          Log In
        </button>

        <button className="submit" type="submit" onClick={handleRegister}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
