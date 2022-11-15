import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../Container/Container'
import styles from './Header.module.css'

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Link to='/'>
          <svg height="47" viewBox="0 0 33 50" width="34" data-test-id="Main-Header-Main-DesktopLogo"><path clipRule="evenodd" d="M0 49.982v-6.825h32.61v6.825H0zm11.646-28.764h9.064L16.39 7.526h-.17l-4.573 13.692h-.001zm10.587-16.22l9.615 28.887h-7.115l-2.16-6.866H9.698l-2.33 6.867H.679l10.09-28.887C11.746 2.197 12.887 0 16.559 0s4.744 2.206 5.674 4.999v-.001z" fill="currentColor" fillRule="evenodd"></path></svg>
        </Link>
      </Container>
    </header>
  )
}
