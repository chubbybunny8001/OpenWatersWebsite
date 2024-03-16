// Node Modules
import Link from 'next/link'
import PropTypes from 'prop-types'

// Components
import NavItem from './NavItem'

const NavGroup = ({
  content,
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

  return (
    <div className="flex flex-col justify-around group">
      <NavItem
        className={`navbar-item-header font-berkshire group-hover:pb-4`}
        buttonText={buttonText}
        linkAddress={linkAddress}
        openNewWindow={openNewWindow}
      />
      <div className="relative">
        <ul className="text-xl navbar-dropdown group-hover:scale-100 group-hover:top-[-16px]">
          {navGroupSubOptions.length && navGroupSubOptions.map((navOption, i) => (
            <li key={i}>
              <NavItem
                className={"text-brand-primary"}
                buttonText={navOption?.fields?.buttonText}
                linkAddress={navOption?.fields?.linkAddress}
                openNewWindow={navOption?.fields?.openNewWindow}
                />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

NavGroup.propTypes = {
  content: PropTypes.object,
}

export default NavGroup