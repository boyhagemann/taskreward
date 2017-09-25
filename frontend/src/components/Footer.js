import React from 'react'
import MaxBox from './UI/MaxBox'
import Box from './UI/Box'
import Link from './UI/Link'
import Logo from './UI/Logo'

const renderLink = (to, label) => (
  <Box width={1} py={1}>
    <Link to={to} color={`night++++`} hoverColor={`bleech`}>{label}</Link>
  </Box>
)

export default () => (
  <Box width={1} bg={`night`} py={4}>
    <MaxBox>
      <Box width={[1, 1/3]}>
        { renderLink('', 'About us')}
        { renderLink('', 'Lead management')}
        { renderLink('', 'Crowd rewarding')}
        { renderLink('', 'Pricing')}
        { renderLink('', 'Payments')}
      </Box>
      <Box width={[1, 1/3]}>
        Second column
      </Box>
      <Box width={[1, 1/3]}>
        Third column
      </Box>
      <Box width={1} py={3} textAlign={`center`}>
        <Logo logoColor={`night++++`} color={`night++++`} />
      </Box>
    </MaxBox>
  </Box>
)
