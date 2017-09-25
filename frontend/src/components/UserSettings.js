import React from 'react'
import PaymentsContainer from './PaymentsContainer'
import PaymentContainer from './PaymentContainer'
import AccountContainer from './AccountContainer'
import PreferencesContainer from './PreferencesContainer'
import MaxBox from './UI/MaxBox'
import Box from './UI/Box'
import Tab from './UI/Tab'
import Icon from './UI/Icon'
import { Route } from 'react-router-dom'



const renderTab = (to, text, icon) => (
  <Tab width={1} fontSize={2} color={`pencil++++`} bg={`canvas-`} activeColor={`night`} activeBg={`canvas--`} p={1} mb={1} mr={3} to={to}>
    <Icon size={2} name={icon} color={`pencil++++`} activeColor={`pencil`} mr={1} />{text}
  </Tab>
)

export default () => (
  <MaxBox>
    <Box width={[1, 1/5]} mt={4}>
      { renderTab('/my/account', 'My account', 'profile') }
      { renderTab('/my/preferences', 'Preferences', 'cogwheel') }
      { renderTab('/my/payments', 'Payments', 'money') }
    </Box>
    <Box width={[1, 4/5]} pl={[0, 50]}>
      <Route path={`/my/account`} component={AccountContainer} />
      <Route path={`/my/preferences`} component={PreferencesContainer} />
      <Route exact path={`/my/payments`} component={PaymentsContainer} />
      <Route path={`/my/payments/:id`} component={PaymentContainer} />
    </Box>
  </MaxBox>
)
