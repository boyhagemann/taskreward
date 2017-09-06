import React, { Component } from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import Activity from './Lead/Activity'
import Conversation from './Lead/Conversation'
import History from './Lead/History'
import Rewards from './Lead/Rewards'
import Box from './UI/Box'
import Button from './UI/Button'
import MaxBox from './UI/MaxBox'
import Tab from './UI/Tab'
import Link from './UI/Link'

const Breadcrumb = props => <Box width={1} mt={3} mb={3} { ...props } />

const Name = props => <Box width={1} fontSize={5} { ...props } />
const Email = props => <Box width={1} fontSize={1} color={`pencil+++`} { ...props } />


const Tabs = props => <Box width={1} my={2} { ...props } />
const Profile = props => <Box width={1} my={2} { ...props } />
const Actions = props => <Box width={1} my={2} { ...props } />
const StyledTab = props => <Tab p={2} color={`pencil+++`} activeColor={`night`} { ...props } />


export default class extends Component {

  componentDidMount() {
    this.props.subscribeToEvents()
  }

  render() {
    const { loading, profile, openRewardModal } = this.props

    return loading ? null : (
        <MaxBox>
          <Box width={[1, 1/4]} p={1}>

            <Breadcrumb>
              <Link to={`/leads`}>Back to leads</Link>
            </Breadcrumb>

            <Profile>
              <Name>{ profile.lead.user.name }</Name>
              <Email>{ profile.lead.user.email }</Email>
            </Profile>

            <Actions>
              <Button positive mr={[0, 1]} onClick={openRewardModal}>Change status</Button>
              <Button negative>Reject</Button>
            </Actions>

          </Box>
          <Box width={[1, 3/4]} p={1}>

            <Tabs>
              <StyledTab to={`/leads/${profile.lead.id}/conversation`}>Conversation</StyledTab>
              <StyledTab to={`/leads/${profile.lead.id}/activity`}>Activity</StyledTab>
              <StyledTab to={`/leads/${profile.lead.id}/history`}>History</StyledTab>
            </Tabs>

            <Route path={`/leads/${profile.lead.id}/conversation`} render={ () => <Conversation {...this.props } /> } />
            <Route path={`/leads/${profile.lead.id}/activity`} render={ () => <Activity {...this.props} /> } />
            <Route path={`/leads/${profile.lead.id}/history`} component={History} {...this.props} />

          </Box>
        </MaxBox>
    )
  }
}
