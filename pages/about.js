import Link from "next/link"
import MainContainer from '../components/MainContainer'

export default function About(){
    return <>
            <MainContainer/>
            <h1>Página Sobre nós</h1>
            <p>Acerca da empresa ou instituição</p>
                voltar a página <Link href="/"> 
                    <a>Principal</a>
                </Link>
        
            </>
}