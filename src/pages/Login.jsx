import React, { useState } from 'react';
import assets from "../assets/assets"



const Login = () => {

const[currState, setCurrState] = useState("Sign Up");

  return (
    <div className='login'>
      <img src={assets.logo_big} alt="" className='logo' />
      <form className="login__form">
      <h2>{currState}</h2>
      {currState === "Sign Up"? <input type="text" placeholder='username' className="form__input" required />:null}
      <input type="email" placeholder='Email Address' className="form__input" required/>
      <input type="password" placeholder='password' className="form__input" required/>
      <button type='submit'>{currState === "Sign Up"?"Create Account":"Login Now"}</button>
      <div className="login__term">
        <input type="checkbox" />
        <p>Agree to the terms of use & privacy policy.</p>
      </div>
      <div className="login__forgot">
        {
          currState === "Sign Up"
          ?<p className='login__toggle'>Already have an account <span onClick={()=>setCurrState("Login")}>login here</span>.</p>
          :<p className='login__toggle'>Create an account <span onClick={()=>setCurrState("Sign Up")}>click here</span>.</p>
        }
      </div>
      </form>
    </div>
  );
}

export default Login


  
 
