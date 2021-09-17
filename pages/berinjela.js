
import styles from '../styles/Home.module.css'
import Link  from 'next/link'
import Image from 'next/image'
import Menu from '../components/menu'
import Footer from '../components/footer'

function Berinjela(){
    return(
        <>
         <Menu />
        
       
        <div className={styles.div1}>
       

        
        <div className={styles.div3} >

        </div>
       
       <br>

      
       </br>
        <div  className={styles.div2}  >
        <h1>BERINJELA RECHEADA</h1>
        </div> 
        <br>





        </br>

        <div className={styles.div2}>
       <h2>INGREDIENTES</h2>
       



<p>
<ul>
    <li>1 berinjela</li>
    <li>1 cebola</li>
    <li>2 dentes de alho</li>
    <li>2 tomates</li>
    <li>2 colheres (sopa) de azeite</li>
    <li>sal e pimenta-do-reino moída na hora a gosto</li>
    <li>folhas de manjericão a gosto</li>
    <li>queijo parmesão ralado a gosto</li>
    

    

</ul>

<h2>MODO  DE  PREPARO</h2>

<ul>

<li>Preaqueça o forno a 180 ºC (temperatura média). </li>
<li>Descasque e pique fino a cebola e os dentes de alho. Lave, seque e corte o tomate ao meio; descarte as sementes e corte em cubos pequenos. </li>
<li>Com uma escovinha para legumes, lave a casca da berinjela sob água corrente. Corte a berinjela ao meio, no sentido do comprimento, e, com a ponta da faca, retire a polpa de cada metade, deixando cerca de 1 cm de borda - a berinjela fica no formato de uma canoa. Pique a polpa da berinjela e reserve. </li>
<li>Leve uma frigideira ao fogo médio. Quando aquecer, regue o azeite, junte a cebola e o alho. Refogue por 3 minutos até murchar. Acrescente a polpa da berinjela picada e misture bem. Deixe cozinhar por cerca de 5 minutos até ficar macia. Junte o tomate e o manjericão e deixe cozinhar por mais 3 minutos. Tempere com sal e pimenta e desligue o fogo. </li>
<li>Com uma colher, preencha cada metade de berinjela com o refogado, polvilhe com o queijo parmesão ralado e transfira para uma assadeira. Leve ao forno para assar até dourar. Sirva a seguir.</li>


</ul>
</p>
</div>




        </div>
        <Footer />
        </>
    )
}

export default Berinjela