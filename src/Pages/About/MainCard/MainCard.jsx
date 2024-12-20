import Image from '../../../utils/Image/Image'
import Title from '../../../utils/Title/Title'
import AndresAguirre from './AndresAguirre/AndresAguirre'
import './MainCard.css'

const MainCard = () => {
  return (
    <div id='main_card'>
      <Title className='titulo_about'>ANDRES DE ARJONA</Title>
      <Image src={'./src/assets/polaroid.png'} />
      <Title className='titulo_about'>OF BARBERING</Title>
      <AndresAguirre />
    </div>
  )
}

export default MainCard
