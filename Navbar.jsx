import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar=()=>{
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                <span className="h1"></span>
            

                </Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                            <span className="h1">Home</span>
                                
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                <span className="h1">Contact</span>
                                    
                                </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">
                                    <span className="h1">About</span>
                                        
                                    </Link>

                        </li>
                    </ul>
                    <Link className="btn btn-primary mx-1" to="/login">
                        Student
                    </Link>
                    <Link className="btn btn-primary mx-1" to="/signup">
                        Teacher
                    </Link>
                    </div>
                </div>
        
        </nav>
        </>
    )
}
export default Navbar;