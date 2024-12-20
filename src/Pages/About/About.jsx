import Header from '../../components/Hero/Header/Header'
import './About.css'
// import Card from './Card/Card'
import MainCard from './MainCard/MainCard'

const About = () => {
  return (
    <section id='nosotros'>
      <div id='about_barbers'>
        <Header />
        <MainCard />
        {/* <Card /> */}
        <div></div>
      </div>
    </section>
  )
}

export default About
