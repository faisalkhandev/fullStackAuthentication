import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../firebase';

function OAuth() {
    async function handleGoogleAuth() {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            console.log(result);




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
