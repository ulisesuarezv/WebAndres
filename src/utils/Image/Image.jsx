import './Image.css'

const Image = ({ src }) => {
  return (
    <>
      <img src={src} alt={src} />
    </>
  )
}

export default Image
