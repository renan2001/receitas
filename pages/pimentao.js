import styles from '../styles/Home.module.css'
import Link  from 'next/link'
import Image from 'next/image'
import Menu from '../components/menu'
import Footer from '../components/footer'

function Pimentao(){
    return(
        <>
         <Menu />
        
       
        <div className={styles.div1}>
       

         <div className={styles.div3} >
        <Image src="/recheio.jpg" width={400} height={280} />
        </div>
       <br>

      
       </br>
        <div  className={styles.div2}  >
        <h1>PIMENTÃO RECHEADO COM QUEIJO COTTAGE</h1>
        </div> 
        <br>





        </br>

        <div className={styles.div2}>
       <h2>INGREDIENTES</h2>
       



<p>
<ul>
    <li>1 pimentão grande</li>
    <li>150 g de queijo cottage cerca de uma xícara</li>
    <li>2 colheres de sopa de molho de tomate</li>
    <li>2 fatias de muçarela</li>
    <li>Ervas à gosto</li >
    <li>Sal</li>
    <li>Pimenta do reino</li >
    

</ul>

<h2>MODO  DE  PREPARO</h2>

<ul>
    <li>Pré-aqueça o forno a 200ºC</li>
    <li>Limpe o pimentão, corte o top, remova o interior e faça uma base de queijo muçarela</li>
    <li>Em uma tigela, misture o queijo cottage, o molho de tomate, as ervas (eu usei manjericão e salsinha), sal e pimenta do reino à gosto.</li>
    <li>Depois, coloque o recheio no pimentão e cubra com uma fatia de queijo muçarela. Leve ao forno por 20 minutos</li>
    Bom apetite!


</ul>
</p>
</div>




        </div>
        <Footer />
        </>
    )
}

export default Pimentao