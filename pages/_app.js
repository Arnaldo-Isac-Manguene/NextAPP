import '../styles/globals.css'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-icons/iconfont/material-icons.css';

function MyApp({ Component, pageProps }) {
  return <>
            <Layout>
                <div className='container'>
                    <Component {...pageProps} />
                </div>
            </Layout>
        </>
        
        
        
}

export default MyApp
