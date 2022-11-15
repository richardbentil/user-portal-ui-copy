import '../styles/styles.scss'
import type { AppProps } from 'next/app'
import ErrorBoundary from '../components/ErrorBoundary'

function MyApp({ Component, pageProps }: AppProps) {
  return  <ErrorBoundary><Component {...pageProps} /></ErrorBoundary>
}

export default MyApp
