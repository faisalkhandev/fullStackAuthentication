import { Link } from "react-router-dom"

function Header() {
    return (
        <div className="bg-slate-800 text-white p-4 ">
            <div className="flex justify-between max-w-6xl mx-auto p-2 items-center">
                <Link to='/'>
                    <h1 className="font-bold">Full Stack Auth App</h1>
                </Link>
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
                    <Link to='sign-up'>
                        <li>Signup</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
export default Header
