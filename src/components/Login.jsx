import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import '../App.css'

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const navigate = useNavigate()

    // const loginUser = async () => {
    //     try {
    //         const response = await httpClient.post("http://127.0.0.1:5000/Login", {
    //             email,
    //             password,
    //         });   
    //         window.location.href = "/Explore";
    //     }
    //     catch (error) {
    //         if (error.response.status === 401) {
    //             alert("Invalid Email, or Password")
    //         }
    //     }
    // };


    function backTo(){
        navigate('/Signup')
    }

    const navi = useNavigate()

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        console.log(form);
        let vals = {};
        vals['username']= e.target[0].value;
        vals['pass'] = e.target[1].value;
        console.log(vals);
        axios.post('http://127.0.0.1:5000/login', JSON.stringify(vals), {
            headers: { "Content-Type": "application/json" }
        }
        )
        .then(function (response) {
            console.log(response);
            navi('/explore')
        })
        .catch(function (error) {
            console.log(error);
        });
    // const 
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
                            <div className="col-6"><Link to="#">Forgot Password</Link></div>
                        </div>
                        <div className="pads">
                            <input
                                name = 'password'
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                id="inputPassword5"
                                className="form-control"
                                aria-labelledby="passwordHelpBlock"
                                placeholder="Password"
                            />
                        </div>
                        <div>
                            <button type="submit" className="continue container"  >Continue</button>
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