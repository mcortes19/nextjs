/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

export default function Nav() {
  /** Styles */
  const headerStyles = {
    height: '60px',
    width: '100vw',
    bg: 'primary',
    borderBottom: '1px solid',
    borderColor: 'primary',
  };

  const navStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    variant: 'containers.page',
    height: '100%',
  };

  const linkStyle = {
    fontWeight: 'bold',
    color: 'text',
    fontSize: 4,
    cursor: 'pointer'
  };

  /** Functionality */
  return (
    <header sx={headerStyles}>
      <nav sx={navStyles}>
        <Link href="/">
          <a sx={linkStyle}>Note App</a>
        </Link>
        <Link href="/notes">
          <a sx={{...linkStyle, fontSize: 3, fontWeight: 'normal'}}>notes</a>
        </Link>
        <a sx={{
          color: 'text',
          fontSize: 3,
          cursor: 'pointer'
          }}
          href={process.env.HELP_APP_URL}
        >Help</a>
      </nav>
    </header>
  );
}
