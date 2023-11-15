import { useState } from 'react';
import { useSelector } from 'react-redux';
const Profile = () => {
    const [formData, setFormData] = useState({})
    const { error, loading, currentUser } = useSelector((state) => state.user)
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    }
    return (
        <div className='flex flex-col max-w-lg mx-auto'>
            <div className='text-center mt-9 flex justify-center items-center gap-2'>HEY <strong className='text-green-500'>{currentUser.username.toUpperCase()} 😊</strong>
            </div>
            <img src={currentUser.profilePicture} className='rounded-full object-cover  h-13 w-16 block m-auto mt-2 cursor-pointer' />
            <p className='text-center'> You create this account at
                <strong > {new Date(currentUser.createdAt).toLocaleDateString()}</strong>
            </p>

            <form className="flex flex-col gap-4 pt-4">

                <input
                    type="text"
                    id="username"
                    placeholder="Your username"
                    className="bg-slate-100 p-3 rounded-lg"
                    onChange={handleChange}
                    defaultValue={currentUser.username}
                />
                <input
                    type="text"
                    id="email"
                    placeholder="Enter Your Email"
                    className="bg-slate-100 p-3 rounded-lg"
                    onChange={handleChange}
                    defaultValue={currentUser.email}
                />
                <input
                    type="password"
                    id="password"
                    placeholder="Change your password"
                    className="bg-slate-100 p-3 rounded-lg"
                    onChange={handleChange}

                />
                <button
                    disabled={loading}
                    type="submit"
                    className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-75 "
                > Update </button>
                <div className='flex justify-between  text-red-600 '>
                    <span>Delete Account</span>
                    <span>Logout</span>

                </div>

            </form>


        </div>
    )
}

export default Profile
