import PropTypes from 'prop-types'

const WaterBackground = ({
  children,
  className
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

WaterBackground.propTypes = {
  children: PropTypes.node,
}

export default WaterBackground