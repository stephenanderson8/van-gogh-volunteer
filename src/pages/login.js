
import './styles/styles.css';

function login() {
  return (
<>
<section className="body">
<div className="wrapper">
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder="Username" value="" id="username" required/>
                <box-icon type='solid' name='user-circle'></box-icon>
                <i><span className="material-icons">account_circle</span></i>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Password" value="" id="password" required/>
                <i><span className="material-icons">lock</span></i>
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox"/> Remeber me</label>
                <a href="#">Forgot password?</a>
            </div>

            <input type="submit" className="sub" value="Login" id="submit"/>

            <div className="register-link">
                <p>Don't have an account? <a href="#">Register</a></p>
            </div>
        </form>
    </div>
</section>
</>
  );
}

export default login;
