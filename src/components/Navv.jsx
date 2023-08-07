import { Link } from "react-router-dom";
import '../App.css'
import { useContext, useState } from "react";
import { DataContext } from "../context/DataProvider";

function Navv() {
  // const [user, setUser] = useState(null)
  const { user, setUser } = useContext(DataContext);
  // const log = () => {
  // }
  const logout = () => {
    setUser(null)
  }
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
          {user ?

            <>
              <li>
                <div className="exp">
                  <Link className="textD" to="/explore" >EXPLORE</Link>
                </div>
              </li>
              <li>
                <div className="logsign">
                  <Link className="textD" to="/watchlist">WATCH-LIST</Link>
                </div>
              </li>
            </>
            : null}

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
          
          {!user ? null :

            <>
              <li>
                <div className="logsign">
                  <Link className="textD" to="/" onClick={()=>logout()}>LOGOUT</Link>
                </div>
              </li>
            </>
          }

      </ul>
    </div>
    </>
  );
}

export default Navv;