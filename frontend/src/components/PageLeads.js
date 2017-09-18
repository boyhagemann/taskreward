import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Box from './UI/Box'
import MaxBox from './UI/MaxBox'
import Button from './UI/Button'
import Header from './UI/Header'
import TextInput from './UI/TextInput'
import Quote from './UI/Quote'
import Score from './UI/Score'

const SearchBox = styled.div`
  background: #ddd;
  margin: 10px 0 20px;
`

const Name = props => <Box width={1} fontSize={3} { ...props } />
const Email = props => <Box width={1} fontSize={1} color={`pencil+++`} { ...props } />

const Actions = Box.extend`
  text-align: right;

  > ${Button} {
    margin-left: 5px;
  }
`

const Row = props => <Box width={1} bg={`bleech`} p={1} mb={1} { ...props } />

const ClickableBox = styled(Box)`
  cursor: pointer;
`

export default ({ view, loading, leads = [] }) => loading ? null : (
  <MaxBox>
    <Header
      title={`Leads`}
    />
    <SearchBox>
    <TextInput name="q" placeholder="Search for email or telephone..." />
    </SearchBox>
    { leads.map(lead => (

      <Row key={lead.hash}>
        <ClickableBox width={[1, 2/8]} pt={1} onClick={ () => view(lead.id) }>
          <Name>{lead.user.name}</Name>
          <Email>{lead.user.email}</Email>
        </ClickableBox>
        <ClickableBox width={[1, 3/8]} pt={1} fontSize={0} color={`pencil+++`} onClick={ () => view(lead.id) }>
          { lead.parent && <Quote from={lead.parent.user.name} text={lead.motivation} /> }
        </ClickableBox>
        <Box width={[1, 1/8]} pt={1}>
          { lead.score && <Score value={lead.score} /> }
        </Box>
        <Actions width={2/8}>
        </Actions>
      </Row>
    )) }
  </MaxBox>
)
