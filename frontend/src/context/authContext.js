import { useContext, createContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // states
  const [user1, setUser1] = useState({});

  //   functions

  //facebook signin
  const facebookSignIn = () => {
    try {
      const provider = new FacebookAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // The signed-in user info.
          const user = result.user;

          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;

          console.log("result##@@!", user);
        })
        .catch(function (error) {
          console.error(error);
        });
    } catch (error) {
      console.log("Error occurred during sign-in:", error);
    }
  };

  //google signin
  const googleSignIn = () => {
    try {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then(function (result) {
          console.log("result", result);
        })
        .catch(function (error) {
          console.error(error);
        });
    } catch (error) {
      console.log("Error occurred during sign-in:", error);
    }
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser1(currentUser);
      console.log("user##1KK", currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ googleSignIn, logOut, user1, facebookSignIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};
