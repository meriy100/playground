import {createContext, useState, useContext, useEffect, ReactNode} from 'react';
import {User, getAuth} from "firebase/auth";

const AuthContext = createContext<User | null>(null);

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({children}: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribed = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => {
      unsubscribed();
    };
  }, []);

  return ( user === undefined ?
    <></> :
    <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
  )
}
