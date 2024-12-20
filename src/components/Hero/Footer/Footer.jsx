import { NavLink } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <section id='footer'>
      <div className='footer_container'>
        <div>
          <h2>
            I would like to receive communications about Hagis services, stores,
            events and matters of cultural interest.
          </h2>
        </div>
        <div>
          <div>
            <nav className='nav_container_footer'>
              <ul className='nav_list_footer'>
                <li className='nav_item_footer'>
                  <NavLink className='nav_link_footer'>NOSOTROS</NavLink>
                </li>
                <li className='nav_item_footer'>
                  <NavLink className='nav_link_footer'>UBICACION</NavLink>
                </li>
                <li className='nav_item_footer'>
                  <NavLink className='nav_link_footer'>PORTFOLIO</NavLink>
                </li>
                <li className='nav_item_footer'>
                  <NavLink className='nav_link_footer'>BARBERS</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <nav className='nav_container_footer'>
              <ul className='nav_list_footer'>
                <li className='nav_item_footer'>
                  <NavLink className='nav_link_footer'>INSTAGRAM</NavLink>
                </li>
                <li className='nav_item_footer'>
                  <NavLink className='nav_link_footer'>TIKTOK</NavLink>
                </li>
                <li className='nav_item_footer'>
                  <NavLink className='nav_link_footer'>WHATSAPP</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div>
        <p>Copyright © 2024 ANDRES DE ARJONA</p>
        <p>WEBSITE BY KAYAO STUDIO</p>
      </div>
    </section>
  )
}

export default Footer
