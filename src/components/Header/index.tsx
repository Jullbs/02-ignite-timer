// LIB, HOOKS, ETC
import { NavLink } from 'react-router-dom'

// ICONS
import { Timer, Scroll } from 'phosphor-react'
import logoIgnite from '../../assets/logo-ignite.svg'

// STYLES
import { HeaderContainer } from './styles'

// MAIN CODE
export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
