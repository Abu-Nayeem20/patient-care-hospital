import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";



initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [haveAccount, setHaveAccount] = useState(false);

    const auth = getAuth();

    const signInUsingGoogle = () =>{
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

        .catch(error =>{
            setError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    const logOut = () =>{
        setIsLoading(true);
        signOut(auth)
        .then( () =>{
            setUser({});
        })
        .finally( () => setIsLoading(false));
    }
    const haveAccountToggle = e =>{
        setHaveAccount(e.target.checked);
    } 
    const handleNameChange = e =>{
        setName(e.target.value);
    }
    
    const handleEmailChange = e =>{
          setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }  
    const handlePhotoChange = e =>{
        setPhoto(e.target.value);
    }
    const handleSubmitButton = e =>{
        e.preventDefault();
        // console.log(email, password);
        if(password.length < 6){
          setError('Password must be at least 6 characters');
          return;
        }
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
          setError('Password must contain two uppercase letters');
          return;
        }
        if(!/(?=.*[!@#$&*])/.test(password)){
          setError('Password must contain one special character');
          return;
        }
        if(!/(?=.*[0-9].*[0-9])/.test(password)){
          setError('Password must contain two digit');
          return;
        }
        haveAccount ? existingUserLogin(email, password) : signUpNewUser(email, password);
        
    }
    const signUpNewUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
          .then( result =>{
            const user = result.user;
            setError('');
            console.log(user);
            updateUserInfo();
          })
          .catch((error) => {
            setError(error.message);
          });
      }
      const existingUserLogin = (email, password) =>{
          signInWithEmailAndPassword(auth, email, password)
          .then( result =>{
            setUser(result.user);
            setError('');
          })
          .catch(error =>{
            setError(error.message);
          });
      }
      const updateUserInfo = () =>{
        updateProfile(auth.currentUser, {displayName: name, photoURL: photo})
        .then( result=>{ })
      }  

    useEffect( () =>{
        const unsubscribed = onAuthStateChanged(auth, user =>{
           if(user){
             setUser(user);
           }
           else{
               setUser({});
           }
           setIsLoading(false);
        })
        return () => unsubscribed;
    }, [])

    return{
        user,
        error,
        isLoading,
        signInUsingGoogle,
        logOut,
        haveAccountToggle,
        haveAccount,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handlePhotoChange,
        handleSubmitButton
    }

}

export default useFirebase;