// LIB, HOOKS, ETC
import { Outlet } from 'react-router-dom'

// COMPONENTS
import { Header } from '../../components/Header'

// STYLE
import { LayoutContainer } from './styles'

// MAIN CODE
export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
