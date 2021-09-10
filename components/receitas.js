import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Foto from '../imagens/abobrinha.jpg'
import Link  from 'next/link'
function Receitas(){
    return (
        <>           
        <div className={styles.grid}>
          <Link href="/">
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

export default Receitas