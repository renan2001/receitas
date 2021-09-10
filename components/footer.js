import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link  from 'next/link'

function Footer(){
    return (
        <>
            <footer className={styles.footer}>
                <Link      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer">
                <a>
           
               
                    Powered by{' '}
                <span className={styles.logo}>
                    
                </span>
                </a>
                </Link>
            </footer>
        </>
    )
}

export default Footer