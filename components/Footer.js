import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer(){
    const year = new Date();
    return (
        <footer className={ styles.footer }>
            <div className={ styles.informations }>
                <Link href='/'>Home</Link>
                <Link href='/about'>About</Link>
                <Link href='/contact'>Contact</Link>
                <Link href='/product'>Product</Link>
            </div>
            <p>Copyright &copy; { year.getUTCFullYear() } | TechModern</p>
        </footer>
    )
}