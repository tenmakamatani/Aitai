import React, { useState, useEffect } from 'react';
import { firebase } from '@libs/infrastructure/firebase';
import { AuthContext } from '@modules/context/auth';

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        setUser(null);
        // nookies.set(undefined, 'token', '');
      } else {
        // const token = await user.getIdToken();
        setUser(user);
        // nookies.set(undefined, 'token', token);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}