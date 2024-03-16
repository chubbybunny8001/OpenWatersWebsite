// Node Modules
import Link from 'next/link'
import PropTypes from 'prop-types'

// Components
import NavItem from './NavItem'

const NavGroup = ({
  content
}) => {
  const {
    navGroupTopLink: {
      fields: {
        buttonText,
        linkAddress,
        openNewWindow
      }
    },
    navGroupSubOptions
  } = content?.fields || {}

  console.log(navGroupSubOptions)
  return (
    <>
      <NavItem
        buttonText={buttonText}
        linkAddress={linkAddress}
        openNewWindow={openNewWindow}
      />
      <ul>
        {navGroupSubOptions.length && navGroupSubOptions.map((navOption, i) => (
          <li key={i}>
            <NavItem
              buttonText={navOption?.fields?.buttonText}
              linkAddress={navOption?.fields?.linkAddress}
              openNewWindow={navOption?.fields?.openNewWindow}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

NavGroup.propTypes = {
  content: PropTypes.object,
}

export default NavGroup