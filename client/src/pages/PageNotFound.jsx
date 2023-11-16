import { Link } from "react-router-dom";

export default function PageNotFound() {


    return (
        <div className="flex items-center justify-center  h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-red-700 mb-4">Page Not Found</h1>
                <Link to="/">
                    <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
                        Go to Homepage
                    </button>
                </Link>
            </div>
        </div>

    )
}
