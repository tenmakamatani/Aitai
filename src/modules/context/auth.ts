import { createContext } from 'react';
import { firebase } from '@libs/infrastructure/firebase';

interface IAuthContext {
  user: firebase.User | null;
}

export const AuthContext = createContext<IAuthContext>({
  user: null,
});
