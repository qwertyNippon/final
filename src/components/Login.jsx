import { Link, useNavigate } from "react-router-dom";
import { useState, createContext, useContext } from "react";
import axios from "axios";
import { DataContext } from "../context/DataProvider";
import '../App.css'

const UserContext = createContext();

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { user, setUser } = useContext(DataContext);
    const navigate = useNavigate()
    
    function backTo(){
        navigate('/Signup')
    }

    // const showPassword = () => {
    //     let element = document.getElementById("login-pw")
    //     if (element.type === "password") {
    //         element.setAttribute("type", "text")
    //     } else if (element.type === "text") {
    //         element.setAttribute("type", "password")
    //     }
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        console.log(form);
        let vals = {};
        vals['username']= e.target[0].value;
        vals['pass'] = e.target[1].value;
        console.log(vals);
        const response = await axios.post('http://127.0.0.1:5000/login', JSON.stringify(vals), {
            headers: { "Content-Type": "application/json" },
        }
        )
        .then((response) => handleData(response.data))

    }
        const handleData = (data) => {
            if (data.message === "authenticated") {
                    setUser(data.data);
                    
                console.log(data)
                navigate('/explore')
                    
        } else if (data.message === "username not found"){
             alert('username not found')
        }
    }
        // }})
        // .catch(function (error) {
        //     console.log(error);
        //     alert('Error Detected!')
        // });
    // const 
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