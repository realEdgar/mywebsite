import { NavLink } from 'react-router-dom'

export const Nav = () => {
    return (
        <menu className="Nav" >
            <ul className="ListUnorder" >
                <li>
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/projects">
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/education">
                        Education
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/experience">
                        Experience
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/contact">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </menu>
    )
}
