import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li><NavLink to="/">Главная</NavLink></li>
                        <li><NavLink to="/about">О нас</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;