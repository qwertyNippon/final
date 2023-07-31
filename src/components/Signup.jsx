import { Link, useNavigate } from "react-router-dom";
import React from "react";
import '../App.css'

function Signup() {
    const navigate = useNavigate()
    const handleSubmit = (e) => {  
        e.preventDefault();
        const formData = new FormData(e.target)
        const formJson = Object.fromEntries(formData.entries())
        const url = 'http://localhost:5000/register'
        navigate('/Login')

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
                            <label for="exampleFormControlInput1" className="form-label">Sign Up:</label>
                        </div>
                        <form method="POST" onSubmit={handleSubmit}>
                            <div className="pads">
                                <input
                                    name = 'email'
                                    type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div>
                                <label for="exampleFormControlInput1" className="form-label">Username:</label>
                            </div>
                            <div className="pads">
                                <input
                                    name = 'username'
                                    // type="email"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="row">
                                <div className="col-6">Password:</div>
                                {/* <div className="col-6"><Link to="#">Forgot Password</Link></div> */}
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
                            <button className="continue container" to="/Login" >Continue</button>
                        </div>
                        </form>
                        <div>
                            <Link to="#"><li className="ls">Need Help?</li></Link>
                        {/* <div className="create" to="/Signup"><button className="continue">No account? Create one</button></div> */}
                        </div>
                    </div>
                    </div>
                </div>
        </>
    )}

export default Signup;