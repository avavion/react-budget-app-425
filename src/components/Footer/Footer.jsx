import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <nav>
                    <ul>
                        <li><NavLink to="/">Главная</NavLink></li>
                        <li><NavLink to="/about">О нас</NavLink></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;