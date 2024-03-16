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
    <div>
      <header>
        <Link href={linkAddress}>
          {buttonText}
        </Link>
      </header>
      <nav>
        {navGroups.length && navGroups.map((navGroup, i) => (
          <NavGroup key={i} content={navGroup} />
        ))}
      </nav>
    </div>
  )
}

Header.propTypes = {}

export default Header