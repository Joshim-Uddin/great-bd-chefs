import React, { createContext, useEffect, useState } from "react";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { toast } from "react-hot-toast";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const githubProvider = new GithubAuthProvider();
const gProvider = new GoogleAuthProvider();

export const addedError = () => toast.error("Reciepe Already Added");

export const wave = () => toast.success("Recipe Added to Favorite");

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };
  const googleLogin = () => {
    return signInWithPopup(auth, gProvider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const logOut = () => {
    return auth.signOut(auth);
  };
  const authInfo = {
    user,
    loginUser,
    createUser,
    githubLogin,
    googleLogin,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
