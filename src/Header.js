import React from 'react'

import HeaderNavigation from './HeaderNavigation'
import HeaderHeading from './HeaderHeading'

const Header = () => {
  return (
    <div className="expanded row header">
      <HeaderNavigation />
      <HeaderHeading />
    </div>
  )
}

export default Header
