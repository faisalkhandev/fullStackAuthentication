import { Link } from "react-router-dom";
function Signup() {
    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl font-bold text-center">Sing Up</h1>

            <form action="" className="flex flex-col gap-4 pt-4">
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    id="username"
                    className="bg-slate-100 p-3 rounded-lg "
                />
                <input
                    type="text"
                    id="email"
                    placeholder="Enter Your Email"
                    className="bg-slate-100 p-3 rounded-lg"
                />
                <input
                    type="password"
                    id="password"
                    placeholder="Enter Your Password"
                    className="bg-slate-100 p-3 rounded-lg"
                />
                <button
                    type="button"
                    className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-75 "
                >
                    SignUp
                </button>
            </form>

            <div className="flex gap-2 mt-4">
                <p>Have an account</p>
                <Link to="/sign-in">
                    <span className="text-blue-500"> Sign in</span>
                </Link>
            </div>
        </div>
    );
}

export default Signup;
