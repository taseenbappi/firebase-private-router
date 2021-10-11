import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

import { useEffect, useState } from "react";
import initializeAuth from "../components/Firebase/firebase.init";

initializeAuth();
const useFirebase = () => {

    const [users, setUsers] = useState({});
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUsers(result.user);
            }).catch(error => {
                setError(error.message);
            })
    }
    const googleLogOut = () => {
        signOut(auth).then(() => {
            setUsers({});
        }).catch((error) => {
            setError(error.message);
        });
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user);
                console.log(user);
            } else {

            }
        });
    }, [])
    return { signInGoogle, users, googleLogOut, error };
}
export default useFirebase;