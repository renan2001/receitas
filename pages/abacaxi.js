import styles from '../styles/Home.module.css'
import Link  from 'next/link'
import Image from 'next/image'
import Menu from '../components/menu'
import Footer from '../components/footer'

function Abacaxi(){
    return(
        <>
         <Menu />
        
       
        <div className={styles.div1}>
       

         <div className={styles.div3} >
        <Image src="/creme.jpg" width={400} height={280} />
        </div>
       <br>

      
       </br>
        <div  className={styles.div2}  >
        <h1>Creme de Abacaxi</h1>
        </div> 
        <br>





        </br>

        <div className={styles.div2}>
       <h2>INGREDIENTES</h2>
       



<p>
<ul>
    <li>Abacaxi em Calda 1 lata</li>
    <li>Creme de Leite 1 lata </li>
    <li>Mistura para Pudim sabor Baunilha 85 gramas</li>
    
    
    

</ul>

<h2>MODO  DE  PREPARO</h2>

<ul>

<li>Escorra o abacaxi e reserve a calda.Corte o abacaxi em cubinhos. Em uma panela,misture a calda do abacaxi com o pó para pudim, leve ao fogo até ferver,mexendo sempre.</li>
 <li>Misture o abacaxi em cubinhos ao creme que foi feito com a calda. Deixe esfriar.</li>
<li>Coloque em uma tigela,cubra com o creme de leite e leve à geladeira. Sirva gelado.</li>


</ul>
</p>
</div>




        </div>
        <Footer />
        </>
    )
}

export default Abacaxi