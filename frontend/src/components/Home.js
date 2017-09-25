import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import MaxBox from './UI/MaxBox'
import Box from './UI/Box'
import Heading from './UI/Heading'
import SubHeading from './UI/SubHeading'
import Button from './UI/Button'
import Visual from './UI/Visual'
import crowd from '../assets/images/crowd-1.jpeg'

const Payoff = Box.extend`
`

const Actions = Box.extend`
`

const Info = props => <Box p={1} { ...props } />

const Text = styled.p``

export default ({ windowSize }) => (
  <div>
    <Visual image={crowd} height={windowSize.height - 200}>
      <MaxBox>
        <Payoff mt={windowSize.height - 500} px={1}>
          <Heading bg={`ocean`} color={`bleech`} px={1} my={0}>Easy lead management for small businesses or freelancers</Heading>
          <SubHeading bg={`love`} color={'bleech'} px={1} mt={0} mb={0}>Reward the crowd that helps you find customers</SubHeading>
          <Actions width={1}>
            <Button huge positive component={Link} to={`/signup`}>Sign up for free</Button>
          </Actions>
        </Payoff>
      </MaxBox>
    </Visual>
    <MaxBox>
      <Info width={[1, 1/3]}>
        <SubHeading>Some subheading</SubHeading>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu euismod nunc, vel tristique mi. Cras lobortis mi purus, quis commodo ex euismod in. Nulla facilisi. Mauris ipsum enim, rhoncus sed velit in, fringilla hendrerit enim. Aliquam venenatis, dolor sed tincidunt eleifend, metus nisi pulvinar purus, ac sodales ipsum velit ac nisi. Sed lobortis ultrices lacus, quis lacinia nulla ornare sed. In in neque ante. </Text>
      </Info>
      <Info width={[1, 1/3]}>
        <SubHeading>Some subheading</SubHeading>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu euismod nunc, vel tristique mi. Cras lobortis mi purus, quis commodo ex euismod in. Nulla facilisi. Mauris ipsum enim, rhoncus sed velit in, fringilla hendrerit enim. Aliquam venenatis, dolor sed tincidunt eleifend, metus nisi pulvinar purus, ac sodales ipsum velit ac nisi. Sed lobortis ultrices lacus, quis lacinia nulla ornare sed. In in neque ante. </Text>
      </Info>
      <Info width={[1, 1/3]}>
        <SubHeading>Some subheading</SubHeading>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu euismod nunc, vel tristique mi. Cras lobortis mi purus, quis commodo ex euismod in. Nulla facilisi. Mauris ipsum enim, rhoncus sed velit in, fringilla hendrerit enim. Aliquam venenatis, dolor sed tincidunt eleifend, metus nisi pulvinar purus, ac sodales ipsum velit ac nisi. Sed lobortis ultrices lacus, quis lacinia nulla ornare sed. In in neque ante. </Text>
      </Info>
    </MaxBox>
  </div>
)
