import firebaseAppInit from "../Firebase/Firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

firebaseAppInit();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] =

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


    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleUserRegister = (email, password) => {
        console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })

    }



    const handleRegister = () => {
        if (password.length < 6) {
            return;
        }
        handleUserRegister(email, password)
    }

    const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user)
            })
    }
    const handleRegistration = e => {
        e.preventDefault();

        console.log("registration will be added")

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
        logOut,
        handleEmailChange,
        handlePasswordChange,
        handleRegister,
        handleUserLogin,
        handleRegistration

    }

}
export default useFirebase;