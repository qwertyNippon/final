import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import axios from "axios";
import '../App.css'

function Signup() {
    const [email, setEmail] = useState()
    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()
    const navi = useNavigate()

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        console.log(form);
        let vals = {};
        vals['email']= e.target[0].value;
        vals['username']= e.target[1].value;
        vals['pass'] = e.target[2].value;
        console.log(vals);
        axios.post('http://127.0.0.1:5000/signup', JSON.stringify(vals), {
            headers: { "Content-Type": "application/json" }
        }
        )
        .then(function (response) {
            // console.log(response);
            navi('/login')
        })
        .catch(function (error) {
            console.log(error);
        });

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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    type="text"
                                    className="form-control"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                aria-labelledby="passwordHelpBlock"
                                placeholder="Password"
                            />
                        </div>
                        <div>
                                <button className="continue container"  >Continue</button>
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