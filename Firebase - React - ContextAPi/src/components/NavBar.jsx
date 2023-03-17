import {NavLink, useNavigate} from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

const NavBar = () => {

   const {user, setUser} = useUserContext();

   const navigate = useNavigate();

   const handleLogout = () => {
    setUser(false)
    navigate('/')
   }

    return (
        <nav>
            <NavLink to="/">Home </NavLink> | 
            {
                user && 
                <>
                    <NavLink to="/dashboard"> Dashboard</NavLink>
                    <button onClick={handleLogout} >Logout</button>
                </>
            }
            
        </nav>
    )
}

export default NavBar;