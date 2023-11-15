import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInProcess } from '../redux/user/userSlice';


function OAuth() {
    const dispatch = useDispatch()
    async function handleGoogleAuth() {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            console.log(result);
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                }),
            });
            const data = await res.json();
            console.log(data);
            dispatch(signInProcess(data))



        } catch (error) {
            console.log(error);
        }
    }

    return (
        <button
            type="button"
            onClick={handleGoogleAuth}
            className="bg-red-600 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-75"
        >
            Sign in with Google
        </button>
    );
}

export default OAuth;