import { useContext } from 'react';
import { AuthContext } from '@modules/context/auth';

export const useAuth = () => {
  return useContext(AuthContext);
}
