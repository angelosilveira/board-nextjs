import { AppProps } from "next/app";
import '../styles/global.scss';

import { Header } from '../components/Header';
import { Provider as NextAuthProvider} from 'next-auth/client'

import { PayPalScriptProvider } from '@paypal/react-paypal-js';


const initialOptions = {
  "client-id": "Af97IkvRNEUBAIEdlqlI0Zlk90T07Ybt4ThDmbU5dMpd9vNMcsmHqBfSVatVIMqlesQHnVQyZwtBYzQL",
  currency: "BRL",
  intent: "capture"
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextAuthProvider session={pageProps.session}>
        <PayPalScriptProvider options={initialOptions}>
          <Header />
          <Component {...pageProps} />
        </PayPalScriptProvider>
      </NextAuthProvider>
    </>
  )
}

export default MyApp;
