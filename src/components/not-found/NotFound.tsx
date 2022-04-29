import { Link } from "react-router-dom"


export const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <p>Page not found</p>
            <Link to='/'>Go Home</Link>
        </div>
    )
}
