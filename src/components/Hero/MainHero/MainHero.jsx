import Button from '../../../utils/Button/Button'
import Title from '../../../utils/Title/Title'
import './MainHero.css'

const MainHero = () => {
  return (
    <section className='main_hero'>
      <div className='main_content'>
        <Title className='titulo_pricipal'>
          BRIDGING THE GAP BETWEEN TIMELESS INTERIOR DESIGN AND TRADITIONAL
          CRAFTSMANSHIP.
        </Title>
        <div id='principal_button_container'>
          <Button className='principal'>NOSOTROS</Button>
        </div>
      </div>
    </section>
  )
}

export default MainHero
