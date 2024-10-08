import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import Formulario from '../components/Formulario'

function Home() {

    return <div className='container'>
        <div className='row'>
            <div className='col-7'>
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
            <div className='col-5'>
                <div className='d-flex justify-content-center'>
                    <Image 
                        src="./images/pict.png" 
                        height={300} 
                        unoptimized
                        width={280} 
                        alt="New Sitle" 
                        className='rounded-circle'
                    />
                    
                </div>
            </div>
        </div>
        <div className='row mb-3 d-flex justify-content-between'>
            <div className='col-7'>                
                <div>
                    <h2>Formação</h2>
                    <p>
                        <strong>Universidade Eduardo Mondlane</strong>
                    </p>
                    <ul>
                        <li className={styles.item}>Faculdade de Engenharia</li>
                        <li className={styles.item}>Licenciatura em Engenharia informática</li>
                    </ul>
                </div>
                <div>
                    <h2>Lista de projectos</h2>
                    <ul>
                        <li>Projecto de Escola de Condução 
                            (com <span className='text-decoration-underline fw-bolder'>Spring-boot</span> <i class="material-icons">arrow_forward</i>)
                        </li>
                        <li>Projecto de Atendimento ao Cliente 
                            (apelidado: <span className='text-decoration-underline fw-bolder'>Ficha de Trabalho</span> com o laravel)
                        </li>
                        <li>Projecto ToDo List 
                            (<span className='text-decoration-underline fw-bolder'>Full stack</span> com django) 
                        </li>
                        <li>Projecto Todo List 
                            (<span className='text-decoration-underline fw-bolder'>Backend</span> Django, <span className='text-decoration-underline fw-bolder'>Frontend</span> vuejs)
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-4"  >
                <Formulario />
            </div>
        </div>
        <div className='row mb-3'>
            <div>
                <h3>Catálogo</h3>
                <div class="row d-flex justify-content-around">
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title">WORDPRESS</h5>
                            </div>                            
                          <div class="card-body">                            
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                          </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title text-uppercase">Ficha de Trabalho</h5>
                            </div>                            
                            <div class="card-body">                                
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-header">
                                <h5 class="card-title text-uppercase">Projecto de salvaguarda</h5>
                            </div>                            
                            <div class="card-body">                                
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Home
