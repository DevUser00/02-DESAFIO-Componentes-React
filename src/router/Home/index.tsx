import CardCar from '../../components/CardCar';
import CardComment from '../../components/CardComment';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './style.css'

export default function Home() {

   return (
      <>
         <Header></Header>

         <main className='container'>
            <section id='views'>
               <div className='title-1'>
                  <h1>Venha nos visitar</h1>
               </div>

               <div className='cards style-center'>
                  <CardCar></CardCar>
                  <CardCar></CardCar>
               </div>
            </section>

            <section id='comments'>
               <div className='title-2'>
                  <h2>O que estão dizendo</h2>
               </div>
               <div className='cards-comment style-center'>
                     <CardComment></CardComment>
                     <CardComment></CardComment>
                     <CardComment></CardComment>
                     <CardComment></CardComment>
                     <CardComment></CardComment>
                     <CardComment></CardComment>
               </div>
            </section>
         </main>
         <Footer></Footer>


      </>
   );
}