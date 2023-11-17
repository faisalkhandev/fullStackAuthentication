import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import { updateUserFailure, updateUserInProcess, updateUserStart } from '../redux/user/userSlice';
import Loader from './../loader/Loader';



const Profile = () => {
    const [formData, setFormData] = useState([])
    const [image, setImage] = useState(null)
    const [updateInfo, setUpdateInfo] = useState(false)
    // console.log(image)
    const { loading, error, currentUser } = useSelector((state) => state.user)
    const fileRef = useRef()
    const dispatch = useDispatch()

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
        // console.log(formData)
    }
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            dispatch(updateUserStart())
            const res = await fetch(`/api/user/update/${currentUser._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await res.json()
            console.log("updated data: ", data)
            if (data.success === false) {
                dispatch(updateUserFailure(data))
            }
            setFormData(data)
            dispatch(updateUserInProcess(data))
            setUpdateInfo(true)


        } catch (error) {
            dispatch(updateUserFailure(error))
        }
    }


    return (
        <div className='flex flex-col max-w-lg mx-auto'>
            {currentUser &&
                <div className='text-center mt-9 flex justify-center items-center gap-2'>HEY <strong className='text-green-500'>{currentUser.username?.toUpperCase()} </strong>
                </div>
            }
            <input type="file"
                ref={fileRef}
                hidden
                accept='image/*'
                onChange={(e) => setImage(e.target.files[0])}

            />
            <img
                src={currentUser.profilePicture}
                className='rounded-full object-cover  h-13 w-16 block m-auto mt-2 cursor-pointer'
                onClick={() => fileRef.current.click()} />
            <p className='text-center'> You create this account at
                <strong > {new Date(currentUser?.createdAt).toLocaleDateString()}</strong>
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-4">

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

            </form>

            {loading ? <Loader /> : ""}



            <div className='flex justify-between text-red-600 mt-2 '>
                <span>Delete Account</span>
                <span>Logout</span>
            </div>

            <p className='text-red-600 mt-3' >{error ? "Something went wrong!" : ""}</p>
            <p className='text-green-600 mt-3 font-bold' >{updateInfo ? "Updated successfully!" : ""}</p>


        </div>
    )
}

export default Profile
