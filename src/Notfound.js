import { Link } from "react-router-dom";

const Notfound = () => {
    return (
        <div className="not-found">
            <h1 align="center" id="h1">404: Page Not Found</h1>
            <h2 align="center" id="h2">The page you are looking for is no present in the current application <br /> please go back to home page </h2>
                <Link to="/"> Go to Home Page</Link>
        </div>
    );
}

export default Notfound;