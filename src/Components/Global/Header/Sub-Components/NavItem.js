// Node Modules
import Link from 'next/link'
import PropTypes from 'prop-types'

const NavItem = ({
  buttonText,
  className,
  linkAddress,
  openNewWindow
}) => {
  return (
    <Link className={className}
      href={linkAddress}
      target={openNewWindow ? "_blank" : "_self"}
    >
        {buttonText}
    </Link>
  )
}

NavItem.propTypes = {
  buttonText: PropTypes.string,
  linkAddress: PropTypes.string,
  openNewWindow: PropTypes.bool,
}

export default NavItem