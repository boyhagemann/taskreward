import React from 'react'
import styled from 'styled-components'
import Text from './UI/Text'
import Heading from './UI/Heading'
import SubHeading from './UI/SubHeading'
import Button from './UI/Button'
import MaxBox from './UI/MaxBox'
import Box from './UI/Box'
import Card from './UI/Card'
import Visual from './UI/Visual'
import Icon from './UI/Icon'
import { redirectUrl } from '../utils/routes'
import { valuta } from '../utils/numbers'

import background from '../assets/images/bg.jpg'

const Description = props => <Text { ...props } />

const VisualText = styled(props => (
  <Box { ...props } width={1} />
))`
  background: rgba(0,0,0,0.3);
  position: absolute;
  bottom: 0;
`

const VisualAction = styled(Box)`
  text-align: right;
`

const Actions = styled(props => (
  <Box { ...props } width={1} p={1} bg={`night`} c={`bleech`} pb={200} />
))`
  text-align: center;
`

export default ({ handleSubmit, loading, hash, profile, action, windowSize, openReferModal }) => loading ? null : (
  <Box width={1}>
    <Visual image={background} height={windowSize.height - 70}>
      <VisualText color={`bleech`}>
        <MaxBox>
          <Box width={[1, 3/4]}>
            <Heading fontSize={7}>{ profile.name }</Heading>
          </Box>

          <VisualAction width={[1, 1/4]}>
            <Button
              width={1}
              mt={3}
              primary
              huge
              onClick={openReferModal}
            >
              <Icon width={1/5} color={`ocean---`} name="thumbsup" size={6} pt={1} />
              <Box width={4/5} textAlign="left" pl={1}>
                <Text m={0}>Recommend a friend</Text>
                <Text m={0} color={`bleech`} opacity={0.5} fontSize={1}>You will be rewarded!</Text>
              </Box>
            </Button>
          </VisualAction>
        </MaxBox>
      </VisualText>
    </Visual>


    <MaxBox>
        <Description fontSize={4} my={4}>{ profile.description }</Description>
    </MaxBox>

    <MaxBox>
      { profile.incentives.map( incentive => (
        <Box key={incentive.id} bg={`bleech`} mb={3} width={1}>
          <Box width={[1, 1/6]}textAlign="center">
            <Box bg={`grass`} py={2} width={1}>
              <Icon name="reward" size={100} color={`bleech`} />
            </Box>
            <Box p={2} bg={`grass---`} color={`bleech`} width={1} fontSize={3}>{ valuta(incentive.value) } Euro</Box>
          </Box>
          <Box width={[1, 5/6]} p={3}>
            <SubHeading mt={0} mb={2} fontSize={5}>{ incentive.name }</SubHeading>
            <Text m={0} fontSize={2}>{ incentive.description }</Text>
          </Box>
        </Box>
      )) }
    </MaxBox>

    <Actions>
      <MaxBox>

          <Box width={[1]} p={1}>
            <SubHeading fontSize={6} color={`bleech`}>Let us know who is interested...</SubHeading>
            <Description>Tell here about the reward...</Description>
            <Button
              type="button"
              primary
              onClick={openReferModal}
              >Add a friend</Button>
          </Box>

          <Box width={[1]} p={1}>
            <SubHeading fontSize={5} color={`bleech`}>...or share this page</SubHeading>
            <Description>Tell here about the reward (10%) and show how you can share this page...</Description>
            <Text>{redirectUrl(hash)}</Text>
          </Box>


      </MaxBox>
    </Actions>

  </Box>
)
