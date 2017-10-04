import React from 'react'
import { Flex } from 'grid-styled'
import Button from '../UI/Button'
import { Field } from 'redux-form'
import InlineWrapper from '../UI/InlineWrapper'
import RadioInput from '../UI/RadioInput'
import Box from '../UI/Box'
import Label from '../UI/Label'
import Heading from '../UI/Heading'
import Link from '../UI/Link'
import Text from '../UI/Text'
import Icon from '../UI/Icon'
import Header from './Header'
import { valuta } from '../../utils/numbers'


// <Button
//   key={action.id}
//   onClick={ () => {
//     assignAction(profile.lead.id, action.id)
//     close()
//   } }
//   >{ profile.lead.user.name || 'This person' } { action.name }
// </Button>

export default ({ loading, profile, assignAction, close, handleSubmit }) => loading ? null : (
  <form onSubmit={handleSubmit}>
    <Header title={`${profile.lead.user.name}...`} close={close} />
    <Flex direction={['column', 'column', 'row']}>
      <Box width={[1, 2/3]} p={3}>
          { profile.actions.map( action => (
            <Box key={action.id} width={1} mb={2}>
            <Field
              component={InlineWrapper}
              field={RadioInput}
              type="radio"
              name={`action`}
              id={action.id}
              value={action.id}
              wrapper={{
                width: 1/12
              }}
              />
            <Box width={11/12}>
              <Label htmlFor={action.id}>
                <Heading fontSize={4} m={0}>{action.name}</Heading>
                { action.incentives.map( incentive => (
                  <Text key={incentive.id} m={0}>Total rewards: { valuta(incentive.value) } euro</Text>
                ))}
              </Label>
            </Box>
          </Box>
        )) }
      </Box>
      <Box width={[1, 1/3]} p={3} bg={`canvas`}>
        <Text fontSize={0} mb={3}>
          By approving the action you agree with our <Link to={``}>Legal agreement</Link> and the total reward amount will be drawn from
          your creditcard thru the <Link to={``}>Stripe service</Link>.
        </Text>
        <Button primary large>
          <Icon name="success" color={`bleech`} opacity={0.5} size={4} mr={1} /> Confirm and save</Button>
      </Box>
    </Flex>
  </form>
)
