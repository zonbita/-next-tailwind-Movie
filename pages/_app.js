import Layout from '../Components/Layout'
import '../styles/globals.css'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp