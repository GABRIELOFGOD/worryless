import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    const navlist =  [
        {
            name: 'home',
            path: '/'
        },
        {
            name: 'about',
            path: '/about'
        },
        {
            name: 'contact',
            path: '/contact'
        },
        {
            name: 'services',
            path: '/services'
        }
    ]
  return (
    <div className='header'>
        <div className='logo'>GearUp Logistics</div>
        <div>
            {
                navlist.map((item, i) => (
                    <Link to={item.path} key={i}>
                        {item.name}
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Header