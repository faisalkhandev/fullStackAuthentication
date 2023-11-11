import { Link } from "react-router-dom"

function Header() {
    return (
        <div className="bg-orange-300 ">
            <div className="flex justify-between max-w-6xl mx-auto p-2 items-center">
                <h1 className="font-bold">Full Stack Auth App</h1>
                <ul className="flex gap-3">
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='about'>
                        <li>About</li>
                    </Link>
                    <Link to='/sign-in'>
                        <li>SignIn</li>
                    </Link>
                    <Link to='sign-out'>
                        <li>SignOut</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
export default Header
