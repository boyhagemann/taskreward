import React from 'react'
import PaymentsContainer from './PaymentsContainer'
import PaymentContainer from './PaymentContainer'
import AccountContainer from './AccountContainer'
import PreferencesContainer from './PreferencesContainer'
import MaxBox from './UI/MaxBox'
import Box from './UI/Box'
import Tab from './UI/Tab'
import { Route } from 'react-router-dom'



const renderTab = (to, text) => <Tab width={1} fontSize={3} color={`pencil++++`} activeColor={`pencil`} p={1} mb={1} to={to}>{text}</Tab>

export default () => (
  <MaxBox>
    <Box width={[1, 1/5]} mt={4}>
      { renderTab('/my/account', 'My account') }
      { renderTab('/my/preferences', 'Preferences') }
      { renderTab('/my/payments', 'Payments') }
    </Box>
    <Box width={[1, 4/5]} pl={[0, 3]}>
      <Route path={`/my/account`} component={AccountContainer} />
      <Route path={`/my/preferences`} component={PreferencesContainer} />
      <Route exact path={`/my/payments`} component={PaymentsContainer} />
      <Route path={`/my/payments/:id`} component={PaymentContainer} />
    </Box>
  </MaxBox>
)
