import styles from '../styles/Home.module.css'
import Link  from 'next/link'
import Image from 'next/image'
import Foto from '../imagens/abobrinha.jpg'

function Menu(){
    return (
        <>
      
        <div className={styles.navbar}>
            <Link href='/'>
             <h3>Receitas Rapidas</h3>
             
            
            </Link>
            <input 
            type="text"
            id="pesquisa" 
            name="pesquisa" 
            value="Pesquisar receita" />
           
           
          </div> 
            <div className={styles.grid}>
          <Link href="/home">
          <a className={styles.card}>
          <Image src={Foto}></Image >
            <h2>abobrinha assada </h2>
            <p>rapido e facil de ser preparada </p>
          </a>
          </Link>

         
        </div>        
         
         
    
        </>
    )
}

export default Menu