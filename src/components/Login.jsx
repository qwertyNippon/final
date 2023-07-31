import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import '../App.css'


function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    function backTo(){
        navigate('/Signup')
    }
    const handleSubmit = (e) => {  
        e.preventDefault();
        const formData = new FormData(e.target)
        const formJson = Object.fromEntries(formData.entries())
        const url = 'http://localhost:5000/login'
        navigate('/Explore')

        return fetch(url, {
            'method' : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(formJson)
        })
    }
    return (
        <>
            <div className="Logcon">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6 justify-content-center mainCon">
                        <div>
                            <label for="exampleFormControlInput1" className="form-label">Login:</label>
                        </div>

                        <form method="POST" onSubmit={handleSubmit}>
                        <div className="pads">
                            <input
                                name = 'username'
                                // type="email"
                                className="form-control"
                                onChange={(e) => setEmail(e.target.value)}
                                id="exampleFormControlInput1"
                                placeholder="Username"
                            />
                        </div>
                        <div className="row">
                            <div className="col-6">Password:</div>
                            <div className="col-6"><Link to="#">Forgot Password</Link></div>
                        </div>
                        <div className="pads">
                            <input
                                name = 'password'
                                type="password"
                                id="inputPassword5"
                                className="form-control"
                                aria-labelledby="passwordHelpBlock"
                                placeholder="Password"
                            />
                        </div>
                        <div>
                            <button className="continue container" to="/Explore">Continue</button>
                        </div>
                        </form>
                        <div>
                            <Link to="#"><li className="ls">Need Help?</li></Link>
                        <div className="create" to="/Signup"><button className="continue" onClick={backTo}>No account? Create one</button></div>
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )}

export default Login;