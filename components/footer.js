import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link  from 'next/link'

function Footer(){
    return (
        <>
            <footer className={styles.footer}>
                <Link      href="https://pt-br.facebook.com/"
                target="_blank"
                rel="noopener noreferrer">
               
           
               
                    <a className={styles.facebook}>facebook{' '}
                <span className={styles.logo}>
                    <Image src="/facebook(5).png" alt="Facebook Logo" width={15} height={15} />
                </span>
                </a>
                
                </Link>
                <Link      href="https://pt-br.facebook.com/"
                target="_blank"
                rel="noopener noreferrer">
               
           
               
                    <a className={styles.facebook}>facebook{' '}
                <span className={styles.logo}>
                    <Image src="/facebook(5).png" alt="instagra Logo" width={15} height={15} />
                </span>
                </a>
                
                </Link>
            </footer>
        </>
    )
}

export default Footer