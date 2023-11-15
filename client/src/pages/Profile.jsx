import { useSelector } from 'react-redux';
import { useRef } from 'react';
const Profile = () => {
    const { loading, currentUser } = useSelector((state) => state.user)
    const fileRef = useRef()
    return (
        <div className='flex flex-col max-w-lg mx-auto'>
            <div className='text-center mt-9 flex justify-center items-center gap-2'>HEY <strong className='text-green-500'>{currentUser.username.toUpperCase()} </strong>
            </div>
            <input type="file" ref={fileRef} hidden />
            <img
                src={currentUser.profilePicture}
                className='rounded-full object-cover  h-13 w-16 block m-auto mt-2 cursor-pointer'
                onClick={() => fileRef.current.click()} />
            <p className='text-center'> You create this account at
                <strong > {new Date(currentUser.createdAt).toLocaleDateString()}</strong>
            </p>

            <form className="flex flex-col gap-4 pt-4">

                <input
                    type="text"
                    id="username"
                    placeholder="Your username"
                    className="bg-slate-100 p-3 rounded-lg"
                    defaultValue={currentUser.username}
                />
                <input
                    type="text"
                    id="email"
                    placeholder="Enter Your Email"
                    className="bg-slate-100 p-3 rounded-lg"
                    defaultValue={currentUser.email}
                />
                <input
                    type="password"
                    id="password"
                    placeholder="Change your password"
                    className="bg-slate-100 p-3 rounded-lg"
                />
                <button
                    disabled={loading}
                    type="submit"
                    className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-75 "
                > Update </button>

            </form>
            <div className='flex justify-between  text-red-600 '>
                <span>Delete Account</span>
                <span>Logout</span>

            </div>


        </div>
    )
}

export default Profile
