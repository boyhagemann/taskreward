import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Header from './UI/Header'
import SubHeading from './UI/SubHeading'
import MaxBox from './UI/MaxBox'
import Box from './UI/Box'
import Button from './UI/Button'

import PageImage from '../assets/images/bg.jpg'


const Item = props => <Box width={1} bg={`bleech`} mb={2}  { ...props } />

const Image = styled(props => <Box width={[1,1/6]} { ...props } />)`
  background: url(${PageImage});
  background-repeat: none;
  background-size: cover;
  height: 200px;
`
const Content = props => <Box width={[1,5/6]} p={2} { ...props } />
const Actions = props => <Box width={1} { ...props } />

export default ({ loading, leads = [] }) => loading ? null : (
  <MaxBox>
    <Header
      title={`Leads`}
    />
    { leads.map(lead => (
      <Item key={lead.id}>
        <Image />
        <Content>
          <SubHeading>{ lead.profile.name }</SubHeading>
          <p>{lead.profile.description}</p>
          <Actions>
            <Button component={Link} to={`/p/${lead.hash}`} mr={1}>View page</Button>
          </Actions>
        </Content>
      </Item>
    )) }
  </MaxBox>
)
