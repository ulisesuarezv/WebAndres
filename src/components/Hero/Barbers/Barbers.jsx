import Image from '../../../utils/Image/Image'
import Title from '../../../utils/Title/Title'
import './Barbers.css'

const Barbers = () => {
  return (
    <section id='barbers'>
      <div className='barbers_content'>
        <Title className='titulo_barbers'>ANDRES DE ARJONA</Title>
        <div className='barbers_content_cards'>
          <Image src='./src/assets/polaroid.png' />
          <Image src='./src/assets/polaroid.png' />
          <Image src='./src/assets/polaroid.png' />
        </div>
      </div>
    </section>
  )
}

export default Barbers
