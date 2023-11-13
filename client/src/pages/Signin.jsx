import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInFailure, signInProcess, signInStart } from "../redux/user/userSlice";


function Signin() {
    const [formData, setFormData] = useState({});
    const { error, loading } = useSelector((state) => state.user)
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    }
    async function handleData(event) {
        try {
            dispatch(signInStart());
            event.preventDefault();
            const response = await fetch("/api/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            // console.log(data)

            if (data.success === false) {
                dispatch(signInFailure());
                return;
            }
            dispatch(signInProcess(data))
            navigate('/')
        } catch (error) {
            dispatch(signInFailure(error));
        }
    }

    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl font-bold text-center my-7">Sing In</h1>

            <form onSubmit={handleData} className="flex flex-col gap-4 pt-4">

                <input
                    type="text"
                    id="email"
                    placeholder="Enter Your Email"
                    className="bg-slate-100 p-3 rounded-lg"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    id="password"
                    placeholder="Enter Your Password"
                    className="bg-slate-100 p-3 rounded-lg"
                    onChange={handleChange}
                />
                <button
                    disabled={loading}
                    type="submit"
                    className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-75 "
                >
                    {loading ? "loading..." : "Sign in"}
                </button>

            </form>

            <div className="text-red-600 font-bold">{error ? "Something went wrong! " : ""}</div>


            <div className="flex gap-2 mt-4">
                <p>Dont have an account!</p>
                <Link to="/sign-up">
                    <span className="text-blue-500"> Sign up</span>
                </Link>
            </div>
        </div>
    );
}

export default Signin;
