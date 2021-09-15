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
          <div>  
          <h1 className={styles.title}>
          <Link href="/"> A</Link> 
          <Link href="/"> B</Link>
          <Link href="/"> C</Link>
          <Link href="/"> D</Link>
          <Link href="/"> E</Link>
          <Link href="/"> F</Link>
          <Link href="/"> G</Link>
          <Link href="/"> H</Link>
          <Link href="/"> I</Link>
          <Link href="/"> J</Link>
          <Link href="/"> K</Link>
          <Link href="/"> L</Link>
          <Link href="/"> M</Link>
          <Link href="/"> N</Link>
          <Link href="/"> O</Link>
          <Link href="/pimentao"> P</Link>
          <Link href="/"> Q</Link>
          <Link href="/"> R</Link>
          <Link href="/"> S</Link>
          <Link href="/"> T</Link>
          <Link href="/"> U</Link>
          <Link href="/"> V</Link>
          <Link href="/"> W</Link>
          <Link href="/"> X</Link>
          <Link href="/"> Y</Link>
          <Link href="/"> Z</Link>
        </h1>

        <p className={styles.description}>
        (Clique na letra inicial do produto principal){' '}
        </p>
        </div>
       

          
         
         
    
        </>
    )
}

export default Menu