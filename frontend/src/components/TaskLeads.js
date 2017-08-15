import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Card from './UI/Card'
import Box from './UI/Box'
import Button from './UI/Button'
import Container from './UI/Container'
import TextInput from './UI/TextInput'

const SearchBox = Box.extend`
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

const Leads = Container.extend``

export default ({ task }) => (
  <Box>

      <Container>
        <SearchBox max={1200}>
          <TextInput name="q" placeholder="Search..." />
        </SearchBox>
      </Container>

      <Leads>
        <Box max={1200}>
          { task.leads.map(lead => (

            <Card key={lead.id}>
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
        </Box>
      </Leads>

  </Box>
)
