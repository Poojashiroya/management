import { createContext, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CryptoJs from "crypto-js";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loginError, setLoginError] = useState("");
  const [logoutError, setLogoutError] = useState("");
  const navigate = useNavigate();

  const login = async(email, password) => {
    const encryptedPwd = CryptoJs.AES.encrypt(password, 'login').toString();

     const response = await fetch(`${process.env.url}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": process.env.url
      },
      body: JSON.stringify({ email, password: encryptedPwd }),
      credentials: 'include',
    });

    if (response.ok) {
      const data = await response.json();
      if(data.code === "loggedIn"){
        navigate("/")
        setLoginError("")
      }
      if(data.code === "alreadyLoggedIn"){
        setLoginError("User Already LoggedIn");
      }
      if(data.code === "incorrectPassword"){
        setLoginError("Incorrect Password");
      }
      if(data.code === "userNotFound"){
        setLoginError("USer Not Found");
      }
    } else {
      // Handle authentication error
      setLoginError("Internal Error");
    }
  };

  const logout = async() => {
    
    const response = await fetch(`${process.env.url}/api/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": process.env.url
      },
      body: JSON.stringify({ email: user.email}),
      credentials: 'include',
    });

    if (response.ok) {
      const data = await response.json();
      if(data.code === "logout"){
        navigate("/")
        setLogoutError("")
      }
      if(data.code === "userNotFound"){
        setLogoutError("USer Not Found");
      }
    } else {
      // Handle authentication error
      setLogoutError("Internal Error");
    }
  };

  const value = useMemo(() => ({
    user, login, logout, loginError, setLoginError
  }), [])

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
