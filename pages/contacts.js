import Link from "next/link"

export default function Contacts(){
    return <>
            <h1>Nossos contactos</h1>
            <p>Contactos da empresa ou instituição: </p>
                voltar a página <Link href="/"> 
                    <a>Principal</a>
                </Link>
        
            </>
}
