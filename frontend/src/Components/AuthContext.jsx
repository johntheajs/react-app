// AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Logic to set isAuthenticated to true
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Logic to set isAuthenticated to false
    setIsAuthenticated(false);
  };

  const contextValue = {
    isAuthenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
