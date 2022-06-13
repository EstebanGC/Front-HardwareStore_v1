import '../navigator/navbar.css'
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { RootState } from "../state/store"

export default function Navbar() {
    const { user } = useSelector((state: RootState) => state.logged)

    if (user !== null) {
        return (
            <nav className="nav">
                <Link to="/hardwastore/provider" className="site-title">
                    Welcome to Raul's Hardware Store!
                </Link>
                <ul>
                    <Link to="/hardwarestore/provider">Provider</Link>
                    <Link to="/hardwarestore/product">Product</Link>
                    <Link to="/hardwarestore/bill">Bill</Link>
                    <Link to="/hardwarestore/receipt">Receipt</Link>
                </ul>
            </nav>)
    }
    return (<nav className="nav">
        <Link to="/hardwastore/provider" className="site-title">
                    Welcome to Raul's Hardware Store!
                </Link>
        <ul>
            <Link to="/hardwarestore/signin">Sing in</Link>
            <Link to="/hardwarestore/googlelogin">Google log in</Link>
            <Link to="/" className="site-title">
            </Link>
        </ul>
    </nav>)

}