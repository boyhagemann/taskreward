import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Card from './UI/Card'
import Box from './UI/Box'
import Button from './UI/Button'
import Container from './UI/Container'
import Heading from './UI/Heading'
import TextInput from './UI/TextInput'

const SearchBox = styled(Container)`
  background: #ddd;
  margin: 10px 0 20px;
`

const Email = styled.span`
  color: #bbb;
  margin-left: 5px;
`

const Actions = styled(Box)`
  text-align: right;

  > ${Button} {
    margin-left: 5px;
  }
`

const Leads = styled(Container)``

export default ({ loading, leads = [] }) => loading ? null : (
  <Leads>
    <Heading>Leads</Heading>
    <SearchBox>
    <TextInput name="q" placeholder="Search..." />
    </SearchBox>
    { leads.map(lead => (

      <Card key={lead.hash}>
        <Box width={2/8}>
          {lead.user.name}
          <Email>({lead.user.email})</Email>
        </Box>
        <Box width={2/8}>{lead.status}</Box>
        <Box width={2/8}>{lead.depth}</Box>
        <Actions width={2/8}>
          <Button primary component={Link} to={`/leads/${lead.id}`}>Accept</Button>
          <Button component={Link} to={`/leads/${lead.id}`}>View page</Button>
        </Actions>
      </Card>
    )) }
  </Leads>
)
