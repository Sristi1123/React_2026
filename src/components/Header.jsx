import { logo_url } from "../utilis/contant";
const Header=()=>{
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo_url} alt="logo"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>Login</li>
          <li>SignUp</li>
        </ul>
      </div>
    </div>
  )
}
export default Header;