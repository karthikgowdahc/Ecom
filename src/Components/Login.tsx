import React, { useState } from "react";
import "../LoginCss.scss";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        // Login successful
        // Redirect or perform any other actions here
        navigate("/Nav"); // Redirect to home page for example
      } else {
        // Login failed
        navigate("/error");
        console.log("please enter vaild email pas");
        console.error("Login failed:", data.error);
        // Handle error, show error message to user, etc.
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle network errors or other exceptions
    }
  };

  return (
    <body className="loginbody">
      <div className="container" id="container">
        <div className={`form-container ${isSignUp ? "sign-up" : "sign-in"}`}>
          <form onSubmit={handleSubmit}>
            <h1>{isSignUp ? "Create Account" : "Sign In"}</h1>
            {/* <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div> */}
            <span>
              {isSignUp
                ? "or use your email for registration"
                : "or use your email password"}
            </span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {isSignUp ? (
              <button type="submit">Sign Up</button>
            ) : (
              <>
                <a href="#">Forget Your Password?</a>
                <button type="submit">Sign In</button>
              </>
            )}
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back !</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="hidden" id="login" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Welcome, Friend!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button
                className="hidden"
                id="register"
                onClick={handleSignUpClick}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Login;
