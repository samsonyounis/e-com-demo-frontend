import {Link, Outlet} from 'react-router-dom';
function NavBar(){
    return(
        <>
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/signup">Signup</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
        <Outlet></Outlet>
        </>
    )
}
export default NavBar;