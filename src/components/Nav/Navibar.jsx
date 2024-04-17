import { Link } from "react-router-dom";

const Navibar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/formulario">Contact</Link>
        </nav>
    );
}

export default Navibar;