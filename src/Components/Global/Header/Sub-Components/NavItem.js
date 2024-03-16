// Node Modules
import Link from 'next/link'
import PropTypes from 'prop-types'

const NavItem = ({
  buttonText,
  linkAddress,
  openNewWindow
}) => {
  console.log(openNewWindow)
  return (
    <Link
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