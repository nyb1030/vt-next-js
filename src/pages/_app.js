import { usePageTransition } from '@/hooks/usePageTransition'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  usePageTransition();
  return <Component {...pageProps} />
}
