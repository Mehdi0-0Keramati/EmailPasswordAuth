import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Protect from "./Components/Protect";
import Dashboard from "./Components/Dashboard";

import { auth } from "./Components/FirebaseEmailPassword";
import {
  createUserWithEmailAndPassword
  , signInWithEmailAndPassword
  , signOut
  , onAuthStateChanged
} from "firebase/auth";

import { useState, useEffect } from "react";
import ApiContext from "./context/context";
import Home from "./Components/Home";
const App = () => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [signin, setsignin] = useState(true)
  const [registerEmail, setregisterEmail] = useState('')
  const [registerPassword, setregisterPassword] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [user, setUser] = useState({})


  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
  })
  const register = () => {
    setLoading(true)

    createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    ).then(() => {
      setsignin(true)
      setLoading(false)
      setregisterEmail('')
      setregisterPassword('')
      window.location.replace('/dashboard')
    }).catch(() => {
      setsignin(false)
      setError(true)
      setLoading(false)
      console.log(error);
      setregisterEmail('')
      setregisterPassword('') 
    })
  }

  const login = () => {
    setLoading(true)

    signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    ).then(() => {
      setsignin(true)
      setLoading(false)
      setLoginEmail("")
      setLoginPassword("")
      window.location.replace('/dashboard')
    }).catch((err) => {
      setsignin(false)
      setError(true)
      setLoading(false)
      console.log(err);
      setLoginEmail("")
      setLoginPassword("")
    })
  }
  const logOut = async () => {
    await signOut(auth)
  }
  return (
    <>
      <BrowserRouter>
        <ApiContext.Provider
          value={{
            loading: loading,
            error: error,
            signin: signin,
            user: { ...user },
            logOut: logOut,
            login: login,
            register: register,
            registerPassword: registerPassword,
            registerEmail: registerEmail,
            setregisterEmail: setregisterEmail,
            setregisterPassword: setregisterPassword,
            loginEmail: loginEmail,
            loginPassword: loginPassword,
            setLoginEmail: setLoginEmail,
            setLoginPassword: setLoginPassword,
          }}>
          <Routes>
            <Route path=" " element={<Navigate to='/' />} />
            <Route path="/" element={<Navigate to='/home' />} />
            <Route path="/home" element={<Home />} />

            <Route path="/dashboard"
              element={
                <Protect signin={signin}>
                  <Dashboard />
                </Protect>
              }>
            </Route>

          </Routes>
        </ApiContext.Provider>
      </BrowserRouter>
    </>
  );
};

export default App;
