import { Link, useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate("/login");
    };
    return (
        <header className="topNav">
            <nav className="navbar navbar-expand-md navbar-dark d-flex">
                <div className="container-fluid algCentre col-lg-9 md-9 sm-9 xs-9">
                    <Link className="navbar-brand" to="/">
                        <img className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
                    </Link>

                    <div className="navbar">
                        <form className="d-flex" role="search">
                            <select>
                                <option>English</option>
                                <option>Hindi</option>
                            </select>
                            <button className="btn btn-danger" onClick={handleSignInClick}>
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
