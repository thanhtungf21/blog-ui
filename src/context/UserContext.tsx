import { createContext, useState } from "react";

// Create the context
export const UserContext = createContext<any>(undefined);

// Provider component to manage user state and provide it to the app
export const UserProvider = ({ children }: any) => {
  // Initialize user state with name and login status
  const [user, setUser] = useState({ name: "", isLoggedIn: false });

  // Function to log in a user
  //   const login = (name) => {
  //     setUser({ name, isLoggedIn: true });
  //   };

  // Function to log out a user
  //   const logout = () => {
  //     setUser({ name: '', isLoggedIn: false });
  //   };

  // Value object to pass through the context
  const value = {
    user,
    setUser, // Current user state
    // login,     // Function to log in
    // logout     // Function to log out
  };

  // Provide the context value to child components
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
