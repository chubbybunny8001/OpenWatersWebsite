import PropTypes from 'prop-types'

const WaterOverlay = ({
  children,
  className
}) => {
  return (
    <section className="flex flex-col-reverse items-center w-full h-screen md:justify-around bg-gradient-to-b md:from-brand-primary/30 md:to-brand-black/20 md:via-brand-white/40 md:flex-row from-brand-primary/50 via-brand-white/60 to-brand-black/30 justify-evenly">
      {children}
    </section>
  )
}

WaterOverlay.propTypes = {
  children: PropTypes.node,
}

export default WaterOverlay