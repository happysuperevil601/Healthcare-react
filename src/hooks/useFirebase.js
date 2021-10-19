import firebaseAppInit from "../Firebase/Firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

firebaseAppInit();
const useFirebase = () => {
    const [user, setUser] = useState({})

    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth()
    const logInusingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
            })
    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        })
            .catch((error) => {

            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)

            }
        });
    }, [])

    return {
        user,
        logInusingGoogle,
        logOut
    }

}
export default useFirebase;