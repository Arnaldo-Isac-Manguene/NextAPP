import Link from "next/link"

export default function About(){
    return 
    <>
        <h1>Página Sobre nós</h1>
        <p>Acerca da empresa ou instituição</p>
            voltar a página 
            <Link href="/"> 
                <a>Principal</a>
        </Link>
    </>
}