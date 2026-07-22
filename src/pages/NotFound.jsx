import { Link } from "react-router-dom"
export default function NotFound(){
    return(
        <div>
            <h1>Page Doesn't Exist</h1>
            <Link to={'/'}>Back to home</Link>
        </div>
    )
}