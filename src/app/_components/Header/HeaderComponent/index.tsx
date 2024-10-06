import React from 'react'
import { Header } from '../../../../payload/payload-types'
import Link from 'next/link'
import { Gutter } from '../../Gutter'

const HeaderComponent = ( {header}: { header: Header} ) => {
  return (
    <nav>
      <Gutter>
        <Link href="/">
          <img src="/logo-black.svg" alt="logo" />
        </Link>
      </Gutter>
    </nav>
  )
}

export default HeaderComponent