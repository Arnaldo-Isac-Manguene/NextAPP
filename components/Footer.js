import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer(){
    const year = new Date();
    return (
        <footer className={ styles.footer }>
            <div className={ styles.informations }>
                <div className={ styles.logo }>
                    <img src="../techmodern_logo.png" alt="TechModern" />
                    <div className={ styles.address }>
                        <h2>TechModern</h2>
                        <p>123 Main Street</p>
                        <p>City, State, ZIP</p>
                    </div>
                </div>
                <div className={ styles.links }>
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/contact'>Contact</Link>
                    <Link href='/product'>Product</Link>
                </div>
                
            </div>
            <div className={ styles.social }>
                    <Link href='https://www.facebook.com/techmodern'>Facebook</Link>
                    <Link href='https://www.instagram.com/techmodern'>Instagram</Link>
                    <Link href='https://www.twitter.com/techmodern'>Twitter</Link>
                </div>
            <div className={ styles.copyright }>
                <p>Copyright &copy; { year.getUTCFullYear() } | TechModern</p>
            </div>
            
        </footer>
    )
}