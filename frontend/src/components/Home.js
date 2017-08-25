import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Grid as Box } from 'grid-styled'
import MaxBox from './UI/MaxBox'
import Heading from './UI/Heading'
import SubHeading from './UI/SubHeading'
import Button from './UI/Button'

const PayoffContainer = styled.div`
  background: red;
`

const Payoff = Box.extend`
  padding: 10px;
`

const Actions = Box.extend`
  margin-top: 60px;
  text-align: center;
`

const Info = Box.extend`
  padding: 10px;
`

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
