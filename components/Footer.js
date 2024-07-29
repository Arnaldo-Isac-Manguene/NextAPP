import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer(){
    const year = new Date();
    return (
        <footer className={ styles.footer }>
            <p>Copyright &copy; { year.getUTCFullYear() }</p>
        </footer>
    )
}