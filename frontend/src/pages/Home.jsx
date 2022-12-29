import NavBar from '../components/NavBar/NavBar';
import Hero from '../components/Hero';
import Footer from '../components/Footer/Footer';
import '../index.css'

const Home = () => {
  return (
    <div className='min-h-screen bg-background'>
      <NavBar />
      <Hero hero='./images/hero-image.png' alt="Iron vault with video games and console coming out"/>
      <Footer />
    </div>
  )
}

export default Home