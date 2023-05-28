import { createContext } from "react";
import { Auth } from 'aws-amplify';
import { useState } from 'react';
import { useRouter } from "next/router";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

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
          };
    };

    const onSignIn = async( email, password ) => {
        setIsSending( true );
        try {
            const resp = await Auth.signIn({
                username: email,
                password: password,
            });
            console.log(resp)
        } catch (error) {
            setIsError({
                error: true,
                msg: error.message
            })
            setIsSending(false);
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

  return (
    <AuthContext.Provider value={{
        onSignUp,
        onConfirmAccount,
        isError,
        isSending
    }}>
        { children }
    </AuthContext.Provider>
  )
}
