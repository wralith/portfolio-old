import { IconMenu } from '@tabler/icons'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import IconButton from '../common/IconButton'
import NavbarSocials from './NavbarSocials'

interface NavbarItemType {
  text: string
  to: string
}

function Navbar() {
  const location = useLocation()

  useEffect(() => {
    toggle(false)
  }, [location])

  const [burger, toggle] = useState(false)

  const links: NavbarItemType[] = [
    { text: 'Home', to: '/' },
    { text: 'Projects', to: '/projects' },
    { text: 'About', to: '/about' },
  ]

  return (
    <nav className="sticky top-0 flex items-center justify-between px-4 py-4 bg-gray-900/30 backdrop-blur-sm shadow-md z-50">
      <h1 className="hidden lg:block text-3xl link">Wralith</h1>
      <ul className="hidden lg:block">
        {links.map(link => (
          <NavbarItem key={link.text} item={link} />
        ))}
      </ul>

      {/* Burger Menu */}
      <div className="lg:hidden">
        <div onClick={() => toggle(!burger)}>
          <IconButton>
            <IconMenu />
          </IconButton>
        </div>
        {burger && (
          <ul className="menu pt-10">
            {links.map(link => (
              <NavbarItem key={link.text} item={link} />
            ))}
          </ul>
        )}
      </div>

      <NavbarSocials />
    </nav>
  )
}

function NavbarItem({ item }: { item: NavbarItemType }) {
  return (
    <Link className="link" to={item.to}>
      {item.text}
    </Link>
  )
}

export default Navbar
