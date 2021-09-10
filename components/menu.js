import styles from '../styles/Home.module.css'
import Link  from 'next/link'
import Image from 'next/image'
import Foto from '../imagens/abobrinha.jpg'

function Menu(){
    return (
        <>
           <div>
        <navbar> 
            <Link href='/'>
             <a >colocar logo e input pesauisa

             </a>
             </Link>
             <input 
            type="text"
            id="pesquisa" 
            name="pesquisa" 
            value="Pesquisar receita" />
          
           
            </navbar>
            <div className={styles.grid}>
          <Link href="/home">
          <a className={styles.card}>
          <Image src={Foto}></Image >
            <h2>abobrinha assada </h2>
            <p>rapido e facil de ser preparada </p>
          </a>
          </Link>

         
        </div>        
        </div>  
         
    
        </>
    )
}

export default Menu