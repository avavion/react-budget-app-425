import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            Главная
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/about">
                            О нас
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;