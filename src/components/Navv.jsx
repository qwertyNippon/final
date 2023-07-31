import { Link } from "react-router-dom";
import '../App.css'

function Navv() {
  return (
    <>
    <div className="nav">
      <Link className="LName textD" to="/">OtakuZone</Link>
      <ul>
        <li>
          <div className="exp">
            <Link className="textD" to="/Explore">EXPLORE</Link>
          </div>
        </li>
        <li>
          <div className="logsign">
            <Link className="textD" to="/Login">LOGIN</Link>
          </div>
        </li>
        <li>
          <div className="logsign">
            <Link className="textD " to="/Signup">SIGN UP</Link>
          </div>
        </li>
        <li>
          <div className="logsign">
            <Link className="textD " to="/">LOGOUT</Link>
          </div>
        </li>
      </ul>
    </div>
    </>
  );
}

export default Navv;