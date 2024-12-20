import './Title.css'

const Title = ({ className = '', children }) => {
  return <h1 className={`Title ${className}`}>{children}</h1>
}

export default Title
