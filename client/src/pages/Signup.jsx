import { useState } from "react";
import { Link } from "react-router-dom";
function Signup() {

    const [formData, setFormData] = useState({})

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value

        })
    }
    async function handleData(event) {
        try {
            event.preventDefault();
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            setFormData(data);
            console.log(formData);
        } catch (error) {
            console.log("Error:", error);
        }
    }

    return (
        <div className="p-3 max-w-lg mx-auto">
            <h1 className="text-3xl font-bold text-center">Sing Up</h1>

            <form onSubmit={handleData} className="flex flex-col gap-4 pt-4">
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    id="username"
                    className="bg-slate-100 p-3 rounded-lg "
                    onChange={handleChange}

                />
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
                    type="submit"
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
