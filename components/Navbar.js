import Image from 'next/image' 
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar(){
    return <>
        <div>
            <ul className={`${styles.navbar} d-flex justify-content-end`}>
                <il className={`${styles.item} `}>
                    <Link href="/"><a>
                        Home
                    </a></Link>
                </il>
                <il className={styles.item}>
                    <Link href="product"><a>
                        Produto
                    </a></Link>
                </il>
                <il className={styles.item}>
                    <Link href="about"><a>
                        About
                    </a></Link>
                </il>            
                <il className={styles.item}>
                    <Link href="contacts"><a>
                        Contactos
                    </a></Link>
                </il>
                <il>
                    <form className='input-group'>
                        <input type='search' className='form-control'/>
                        <button type='submit' className='input-group-text'>
                            <i class="material-icons">search</i>
                        </button>
                    </form>
                </il>
            </ul>
        </div>
    </>
}