import { createContext, useEffect, useState, useCallback } from "react";
import { AxiosResponse } from "axios";

import { signIn, signUp, SignInData, SignUpData, me } from '../controllers/user';

interface ContextData {
  user: UserDto;
  userSignIn: (userData: SignInData) => Promise<UserDto>;
  userSignUp: (userData: SignUpData) => Promise<UserDto>;
  getCurrentUser: () => Promise<UserDto>;
}

interface UserDto {
  id: string;
  firstName: string;
  lastName: string;
  accountNumber: number;
  accountDigit: number;
  wallet: number;
  email: string;
}

interface Props {
  children: React.ReactNode;
}


export const AuthContext = createContext<ContextData>({} as ContextData)

export const AuthProvider: React.FC<Props> = ({children}) => {

  const [user, setUser] = useState<UserDto>(() => {
    const user = localStorage.getItem('@Inter:User');

    if (user) {
      return JSON.parse(user);
    }

    return {} as UserDto
  });

  const userSignIn = async (userData: SignInData) => {
    const {data} = await signIn(userData);

    if (data?.status === 'error') {
      return data;
    }

    if (data.accessToken) {
      localStorage.setItem('@Inter:Token', data.accessToken)
    } 

    return getCurrentUser();
  }

  const userSignUp = async (userData: SignUpData) => {
    const {data} = await signUp(userData);

    if (data.accessToken) {
      localStorage.setItem('@Inter:Token', data.accessToken)
    }

    return getCurrentUser();
  }

  const getCurrentUser = async () => {
    const {data} = await me();
    setUser(data);
    localStorage.setItem('@Inter:User', JSON.stringify(user));

    return data;
  }

  return (
    <AuthContext.Provider value={{user, userSignIn, userSignUp, getCurrentUser}}>
        {children}
    </AuthContext.Provider>
  )
}