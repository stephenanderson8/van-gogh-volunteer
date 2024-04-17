import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

export const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };
        return (
            <section className="body">
            <div className="wrapper">
                    <form action="">
                        <h1>Login</h1>
                        <div className="input-box">
                            <input placeholder="Email" id="username" onChange={(e) => setEmail(e.target.value)} required/>
                            <box-icon type='solid' name='user-circle'></box-icon>
                            <i><span className="material-icons">account_circle</span></i>
                        </div>
                        <div className="input-box">
                            <input placeholder="Password" type= "password" onChange={(e) => setPassword(e.target.value)} required/>
                            <i><span className="material-icons">lock</span></i>
                        </div>
            
                        <div className="remember-forgot">
                            <label><input type="checkbox"/> Remeber me</label>
                            <a href="#">Forgot password?</a>
                        </div>
                            <button className = "sub" onClick={signIn}> Sign In</button>
                        <div className="register-link">
                            <p>Don't have an account? <a href="#">Register</a></p>
                        </div>
                    </form>
                </div>
            </section>
              );
};