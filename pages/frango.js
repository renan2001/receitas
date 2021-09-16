import styles from '../styles/Home.module.css'
import Link  from 'next/link'
import Image from 'next/image'
import Menu from '../components/menu'
import Footer from '../components/footer'

function Frango(){
    return(
        <>
         <Menu />
        
       
        <div className={styles.div1}>
       

         <div className={styles.div3} >
        <Image src="/hamburguer.jpg" width={400} height={280} />
        </div>
       <br>

      
       </br>
        <div  className={styles.div2}  >
        <h1>Hamburguer de frango</h1>
        </div> 
        <br>





        </br>

        <div className={styles.div2}>
       <h2>INGREDIENTES</h2>
       



<p>
<ul>
    <li>400 g de peito de frango</li>
    <li> Sal a gosto</li>
    <li> Pimenta-do-reino a gosto</li>
    <li>Tempero de sua preferência a gosto</li>
    <li>1 cebola ralada</li>
    <li>5 colheres de sopa de farinha de aveia</li>
    
    

</ul>

<h2>MODO  DE  PREPARO</h2>

<ul>

<li>Em um processador, coloque o peito de frango sem osso e triture.</li>

<li>Transfira para um recipiente, tempere com sal, pimenta e outros temperos que preferir (alho ralado, chimichurri, pimenta caiena, páprica).</li>

<li>Adicione a cebola picada, uma colher de sopa da farinha de aveia e misture bem.</li>

<li>Molde a massa em formato de hambúrguer. Se preferir, use uma balança para deixar todos com a mesma quantidade.</li>

<li> Após fazer os hambúrgueres, empane cada um na farinha de aveia.</li>

<li>Congele ou frite na hora.</li>


</ul>
</p>
</div>




        </div>
        <Footer />
        </>
    )
}

export default Frango