import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Box from './UI/Box'
import MaxBox from './UI/MaxBox'
import Button from './UI/Button'
import Heading from './UI/Heading'
import TextInput from './UI/TextInput'

const SearchBox = styled.div`
  background: #ddd;
  margin: 10px 0 20px;
`

const Email = styled.span`
  color: #bbb;
  margin-left: 5px;
`

const Actions = Box.extend`
  text-align: right;

  > ${Button} {
    margin-left: 5px;
  }
`

const Row = props => <Box width={1} bg={`bleech`} p={1} mb={1} { ...props } />

export default ({ loading, leads = [] }) => loading ? null : (
  <MaxBox>
    <Heading>Leads</Heading>
    <SearchBox>
    <TextInput name="q" placeholder="Search for email or telephone..." />
    </SearchBox>
    { leads.map(lead => (

      <Row key={lead.hash}>
        <Box width={2/8} pt={1}>
          {lead.user.name}
          <Email>({lead.user.email})</Email>
        </Box>
        <Box width={2/8} pt={1}>{lead.status}</Box>
        <Box width={2/8} pt={1}>{lead.depth}</Box>
        <Actions width={2/8}>
          <Button primary component={Link} to={`/leads/${lead.hash}`}>Accept</Button>
          <Button component={Link} to={`/leads/${lead.hash}`}>View page</Button>
        </Actions>
      </Row>
    )) }
  </MaxBox>
)
