import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import MaxBox from './UI/MaxBox'
import Box from './UI/Box'
import Heading from './UI/Heading'
import SubHeading from './UI/SubHeading'
import Button from './UI/Button'

const PayoffContainer = props => <Box width={1} bg={`ocean`} color={`bleech`} { ...props} />

const Payoff = props => <Box width={1} p={1} { ...props } />

const Actions = Box.extend`
  margin-top: 60px;
  text-align: center;
`

const Info = props => <Box p={1} { ...props } />

const Text = styled.p``

export default () => (
  <div>
    <PayoffContainer>
      <MaxBox>
        <Payoff width={1/2}>
          <Heading>Easy lead management for small businesses or freelancers</Heading>
          <SubHeading>Reward the crowd that helps you find customers</SubHeading>
        </Payoff>
        <Actions width={1/2}>
          <Button positive huge component={Link} to={`/signup`}>Sign up for free</Button>
        </Actions>
      </MaxBox>
    </PayoffContainer>
    <MaxBox>
      <Info width={1/3}>
        <SubHeading>Some subheading</SubHeading>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu euismod nunc, vel tristique mi. Cras lobortis mi purus, quis commodo ex euismod in. Nulla facilisi. Mauris ipsum enim, rhoncus sed velit in, fringilla hendrerit enim. Aliquam venenatis, dolor sed tincidunt eleifend, metus nisi pulvinar purus, ac sodales ipsum velit ac nisi. Sed lobortis ultrices lacus, quis lacinia nulla ornare sed. In in neque ante. </Text>
      </Info>
      <Info width={1/3}>
        <SubHeading>Some subheading</SubHeading>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu euismod nunc, vel tristique mi. Cras lobortis mi purus, quis commodo ex euismod in. Nulla facilisi. Mauris ipsum enim, rhoncus sed velit in, fringilla hendrerit enim. Aliquam venenatis, dolor sed tincidunt eleifend, metus nisi pulvinar purus, ac sodales ipsum velit ac nisi. Sed lobortis ultrices lacus, quis lacinia nulla ornare sed. In in neque ante. </Text>
      </Info>
      <Info width={1/3}>
        <SubHeading>Some subheading</SubHeading>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu euismod nunc, vel tristique mi. Cras lobortis mi purus, quis commodo ex euismod in. Nulla facilisi. Mauris ipsum enim, rhoncus sed velit in, fringilla hendrerit enim. Aliquam venenatis, dolor sed tincidunt eleifend, metus nisi pulvinar purus, ac sodales ipsum velit ac nisi. Sed lobortis ultrices lacus, quis lacinia nulla ornare sed. In in neque ante. </Text>
      </Info>
    </MaxBox>
  </div>
)
