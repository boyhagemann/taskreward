import React from 'react'
import MaxBox from './UI/MaxBox'
import Heading from './UI/Heading'
import Text from './UI/Text'
import Link from './UI/Link'
import Button from './UI/Button'

export default ({ match }) => (
  <MaxBox>
    <Heading>Not allowed</Heading>
    <Text>You are not allowed to view this page <strong>{match.path}</strong></Text>
    <Button to={`/`} component={Link}>To the homepage</Button>
  </MaxBox>
)
