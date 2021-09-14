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
          <Link href="/"> P</Link>
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
        <div className={styles.gridd}>
          <a href="/receita1" className={styles.card}>
            <h3>Receita de Abobrinha&rarr;</h3>
            <p>Rápido e Pratica.</p>
            <Image src="/abobrinha.jpg" width={940} height={480} />
          </a>

          <a href="/receita2" className={styles.card}>
            <h3>Receita de Frango &rarr;</h3>
            <p>Rápido e Pratica.</p>
            <Image src="/frango.png" width={900} height={480} />
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Receita de Abacaxi &rarr;</h3>
            <p>Rápido e Pratica.</p>
            <Image src="/abacaxi.jpg" width={900} height={480} />
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Receita de Pimentão &rarr;</h3>
            <p>
            Rápido e Pratica.
            </p>
            <Image src="/pimentao.jpg" width={900} height={480} />
          </a>
        

        </div>    
         
         
    
        </>
    )
}

export default Menu