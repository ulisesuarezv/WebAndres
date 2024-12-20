import Header from '../../components/Hero/Header/Header'
import Title from '../../utils/Title/Title'
import './Location.css'

const Location = () => {
  return (
    <section id='location'>
      <Header />
      <div className='title_container'>
        <Title className='titulo_location'>TU HOGAR</Title>
        <Title className='titulo_location'>NUESTRO HOGAR</Title>
      </div>
    </section>
  )
}

export default Location
