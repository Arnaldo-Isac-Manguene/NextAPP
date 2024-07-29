import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function Home() {
    return <div className='container'>
        <div className='row'>
            <div className='col-6'>
                <h1 className={`'mt-2' ${styles.titulo}`} >PERFIL</h1>
                <p className={`'text-justify mt-5' ${styles.corpo}`}> 
                    Profissional em ascensão, com ética e responsabilidade, demonstro excelentes habilidades de 
                    trabalho em equipe e individual. Minha agilidade para me adaptar a novos ambientes e 
                    desafios se une à paixão por aprender e ensinar. Sou extremamente organizado e meticuloso, 
                    prezando pelo sigilo profissional com o mais alto rigor.
                </p>
                <strong><h3>Contactos</h3></strong>
                <ul className={styles.titulo}> 
                    <li className={styles.item}><strong>E-mail: </strong><a href='mailto:arnaldomanguene@gmail.com'>arnaldomanguene@gmail.com</a></li>
                    <li className={`${styles.item} 'row d-flex'`}><strong>Celular: </strong><label className=''>+258 879 428 034 &</label><label className='row ms-5 ps-4'> +258 848 428 034</label></li>
                    <li className={styles.item}><strong>Linked-in: </strong><a href='https://tinyurl.com/linkedin-arnaldo'>https://www.linkedin.com/in/arnaldo-manguene/</a></li>
                </ul>
            </div>
            <div className='col-6'>
                <div className=''>
                    <Image 
                        src="https://media.licdn.com/dms/image/D4D03AQES8Lb83arL4w/profile-displayphoto-shrink_800_800/0/1711032096319?e=1727913600&v=beta&t=MKcTbw5VT6jravmuGgQ-VNWAqZN8Wg12p1mZOHvJdJ8" 
                        height={300} 
                        unoptimized
                        width={280} 
                        alt="New Sitle" 
                        className='rounded-circle'
                    />
                    <button className='btn btn-secondary'>Entrar</button>
                </div>
            </div>
        </div>
        <div className=''>
            <h2>Formação</h2>
            <div>
                <p>
                    <strong>Universidade Eduardo Mondlane</strong>
                </p>
                <ul>
                    <li className={styles.item}>Faculdade de Engenharia</li>
                    <li className={styles.item}>Licenciatura em Engenharia informática</li>
                </ul>
            </div>
        </div>
    </div>
}

export default Home
