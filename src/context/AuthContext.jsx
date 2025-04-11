import { createContext, useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  
  const { items } = useSelector((state) => state.users);
  

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  
  const login = (username, password) => {
    const foundUser = items.find(
      (user) => user.name == username && user.id == password
    );
    if (foundUser) {
      const userDataToStore = { username: foundUser.username }; 
      setUser(userDataToStore);
      localStorage.setItem("user", JSON.stringify(userDataToStore));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
