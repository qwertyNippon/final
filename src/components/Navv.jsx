import { Link } from "react-router-dom";
import '../App.css'
import { useState } from "react";

function Navv() {
  // const [user, setUser] = useState(null)
  // const log = () => {

  // }

  // const user = useContext(UserContext)
  

  // const logoutUser = async () => {
  //   await Client.post('http://localhost:5000/logout');
  //   window.location.href = "/Home";
  // } 
  return (
    <>
    <div className="nav">
      <Link className="LName textD" to="/">OtakuZone</Link>
      <ul>
        {/* <li>
          <div className="logsign">
            <Link className="textD" ><h2>{`Hello ${user} again!`}</h2></Link>
          </div>
        </li> */}
        <li>
          <div className="exp">
            <Link className="textD" to="/explore">EXPLORE</Link>
          </div>
        </li>
        <li>
          <div className="logsign">
            <Link className="textD" to="/watchlist">WATCH-LIST</Link>
          </div>
        </li>
        <li>
          <div className="logsign">
            <Link className="textD" to="/login">LOGIN</Link>
          </div>
        </li>
        <li>
          <div className="logsign">
            <Link className="textD " to="/signup">SIGN UP</Link>
          </div>
        </li>
        <li>
          <div className="logsign">
            <Link className="textD"  to="/">LOGOUT</Link>
          </div>
        </li>
      </ul>
    </div>
    </>
  );
}

export default Navv;