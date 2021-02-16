import { NavLink } from 'react-router-dom'

export const Nav = () => {
    return (
        <menu className="Nav" >
            <ul className="ListUnorder" >
                <li>
                    <NavLink exact to="/" activeClassName="mark">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/projects" activeClassName="mark">
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/education" activeClassName="mark">
                        Education
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/experience" activeClassName="mark">
                        Experience
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/contact" activeClassName="mark">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </menu>
    )
}
