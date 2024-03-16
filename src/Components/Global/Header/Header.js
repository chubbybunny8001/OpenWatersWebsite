// Node Modules
import React from 'react'
import PropTypes from 'prop-types'

// Services
import { getContentByEntryId } from '@/src/Services/contentfulService'
import { contentfulEntryIds } from '@/src/Constants/contentfulEntryIds'
import NavGroup from './Sub-Components/NavGroup'
import Link from 'next/link'

const Header = async () => {

  const {
    fields: {
      navBarHomeNavigation: {
        fields: {
          buttonText,
          linkAddress,
        }
      },
      navGroups,
    }
  } = await getContentByEntryId(contentfulEntryIds.headerNavigation)

  return (
    <div className="flex items-center justify-between w-screen xl:h-[10vh] sm:py-6 bg-brand-primary" >
      <header className="xl:w-[25vw] text-center">
        <Link
          className="w-full text-4xl font-berkshire text-brand-black"
          href={linkAddress}
        >
          {buttonText}
        </Link>
      </header>
      <nav className="flex items-center justify-around xl:w-[75vw]">
        {navGroups.length && navGroups.map((navGroup, i) => (
          <NavGroup key={i} content={navGroup} />
        ))}
      </nav>
    </div>
  )
}

Header.propTypes = {}

export default Header