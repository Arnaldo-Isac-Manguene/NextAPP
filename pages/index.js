import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function Home() {
    return <div className={styles.main}>
        <h1>Home</h1>
        <p>Verificado</p>
        <p>Aterroziznte </p>
        Visitar a página  <Link href="/about"><a>Sobre nós</a></Link> na empresa ou ir a <a href="product">Produtos</a>
        <br></br>
        <Image 
            src="/images/city.jpg" 
            height="600px" 
            width="400px" 
            alt="New Sitle" 
        />

    </div>
}

export default Home
