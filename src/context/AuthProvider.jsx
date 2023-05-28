import { createContext, useEffect, useReducer } from "react";
import { Auth } from 'aws-amplify';
import { useState } from 'react';
import { useRouter } from "next/router";
import { authReducer } from "./authReducer";
import Cookies from "js-cookie";

const AUTH_INITIAL_STATE = {
    isLoggedIn: false,
    user: undefined
}

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

    const [isError, setIsError] = useState({ error: false, msg: ''});
    const [isSending, setIsSending] = useState(false);

    const { push } = useRouter();

    const onSignUp = async({ name, email, password }) => {
        localStorage.setItem('email', email);
        setIsSending( true );
        const attributes = {
            email: email,
            picture: 'https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Image.png',
            name: name
          };

          try {
                await Auth.signUp({
                username: email,
                password: password,
                attributes
            });
            setIsSending(false);
            push('/auth/confirm');
          } catch (error) {
            setIsError({
                error: true,
                msg: error.message
            })
            setIsSending(false);
            onSignOut();
          };
    };

    const onSignIn = async({ email, password }) => {
        setIsSending( true );
        try {
            const resp = await Auth.signIn({
                username: email,
                password: password,
            });
            setIsSending(false);
            currentUser();
            push('/')
        } catch (error) {
            setIsError({
                error: true,
                msg: error.message
            })
            setIsSending(false);
            onSignOut();
        }
    }

    const onConfirmAccount = async( codigo ) => {
        setIsSending( true );
        try {
            await Auth.confirmSignUp( localStorage.getItem('email'), codigo );
            localStorage.removeItem('email');
            push('/auth/login');
        } catch (error) {
            setIsError({
                error: true,
                msg: error.message
            })
            setIsSending(false);
        }
    }

    const onLoginWithFacebook = async() => {
        setIsSending( true );
        try {
            const user = await Auth.federatedSignIn({ provider: 'Facebook' });
        } catch (error) {
            setIsError({
                error: true,
                msg: error.message
            })
            setIsSending(false);
            onSignOut();
        }
    }

    const onLoginWithGoogle = async() => {
        setIsSending( true );
        try {
            const user = await Auth.federatedSignIn({ provider: 'Google' });
        } catch (error) {
            setIsError({
                error: true,
                msg: error.message
            })
            setIsSending(false);
            onSignOut();
        }
    }

    const onSignOut = async() => {
        await Auth.signOut();
        Cookies.remove('token');
        dispatch({ type: '[Auth] - Logout' });
    }

    const currentUser = async() => {
        checkingAuth();
        try {
            const user = await Auth.currentSession();
            const userInfo = {
                sub: user?.idToken?.payload?.sub,
                email: user?.idToken?.payload?.email,
                name: user?.idToken?.payload?.name,
                picture: user?.idToken?.payload?.picture,
            }
            dispatch({ type: '[Auth] - Login', payload: userInfo });
            Cookies.set('token', user?.idToken?.jwtToken);
        } catch (error) {
            onSignOut();
        }
    };

    const refreshAuth = async() => {
        try {
            const refresh = await Auth.currentAuthenticatedUser();
            await Auth.updateUserAttributes(refresh, {});
        } catch (error) {
            onSignOut();
        }
    }

    const checkingAuth = () => {
        dispatch({ type: '[Auth] - Checking' })
    }

    useEffect(() => {
        currentUser();
        refreshAuth();
    }, [])
    

  return (
    <AuthContext.Provider value={{
        onSignUp,
        onConfirmAccount,
        onSignIn,
        onLoginWithFacebook,
        onLoginWithGoogle,
        currentUser,
        onSignOut,
        isError,
        isSending,
        ...state
    }}>
        { children }
    </AuthContext.Provider>
  )
}
