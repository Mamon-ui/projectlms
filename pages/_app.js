import { AuthContextProvider } from '../authContext'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </AuthContextProvider>
  )
}

export default MyApp
