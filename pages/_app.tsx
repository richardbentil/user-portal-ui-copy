<<<<<<< HEAD
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
=======
import '../styles/styles.scss'
import type { AppProps } from 'next/app'
import ErrorBoundary from '../components/ErrorBoundary'

function MyApp({ Component, pageProps }: AppProps) {
  return  <ErrorBoundary><Component {...pageProps} /></ErrorBoundary>
>>>>>>> e940293b493fc37616b8785dad70c9172b4270b4
}

export default MyApp;
