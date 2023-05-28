import '@/styles/globals.css'
import { Amplify } from 'aws-amplify'
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react';
import awsmobile from '@/aws-exports';
import { AuthProvider } from '@/context/AuthProvider';

Amplify.configure(awsmobile);

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
