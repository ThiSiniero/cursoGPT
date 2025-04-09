import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const ahthorizedUsers = [
  { username: "thiago", password: "123" },
  { username: "admin", password: "admin" },
  { username: "user", password: "user" },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const login = (username, password) => {
    const foundUser = ahthorizedUsers.find(
      (user) => user.username === username && user.password === password
    );
    if (foundUser) {
      setUser(foundUser);
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
