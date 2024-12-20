import Barbers from './Barbers/Barbers'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import './Hero.css'
import LastContent from './LastContent/LastContent'
import MainHero from './MainHero/MainHero'
import Video from './Video/Video'

const Hero = () => {
  return (
    <div id='hero'>
      <Header />
      <MainHero />
      <Barbers />
      <Video />
      <LastContent />
      <Footer />
    </div>
  )
}

export default Hero
