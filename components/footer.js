import styles from '../styles/Home.module.css'

import Link  from 'next/link'

function Footer(){
    return (
        <>
            <footer className={styles.footer}>
                <Link  href="https://pt-br.facebook.com/"
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