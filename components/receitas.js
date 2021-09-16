import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Foto from '../imagens/abobrinha.jpg'
import Link  from 'next/link'
function Receitas(){
    return (
        <>           
  
        <div className={styles.gridd}>
          <a href="/berinjela" className={styles.card}>
            <h3>Receita de berinjela&rarr;</h3>
            <p>Rápido e Pratica.</p>
            <Image src="/berinjela.jpg" width={940} height={480} />
          </a>

          <a href="/frango" className={styles.card}>
            <h3>Receita de Frango &rarr;</h3>
            <p>Rápido e Pratica.</p>
            <Image src="/franguinho.jpg" width={900} height={480} />
          </a>

          <a
            href="/abacaxi"
            className={styles.card}
          >
            <h3>Receita de Abacaxi &rarr;</h3>
            <p>Rápido e Pratica.</p>
            <Image src="/abacaxi.jpg" width={900} height={480} />
          </a>


          <Link href='/pimentao'>
          <a className={styles.card}>
            <h3>Receita de Pimentão &rarr;</h3>
            <p>
            Rápido e Pratica.
            </p>
            <Image src="/pimentao.jpg" width={900} height={480} />
          </a>
          </Link>

        </div>    
        </>
    )
}

export default Receitas