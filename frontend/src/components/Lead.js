import React, { Component } from 'react'
import styled from 'styled-components'
import { Link, Route } from 'react-router-dom'
import Activity from './Lead/Activity'
import Conversation from './Lead/Conversation'
import History from './Lead/History'
import Rewards from './Lead/Rewards'
import Box from './UI/Box'
import Button from './UI/Button'
import Heading from './UI/Heading'
import MaxBox from './UI/MaxBox'
import TextArea from './UI/TextArea'
import Tab from './UI/Tab'

const Breadcrumb = props => <Box width={1} my={2} { ...props } />

const Name = props => <Box width={1} fontSize={5} { ...props } />
const Email = props => <Box width={1} fontSize={1} color={`pencil+++`} { ...props } />


const Tabs = props => <Box my={2} { ...props } />
const StyledTab = props => <Tab bg={`canvas-`} p={2} color={`pencil`} activeColor={`bleech`} activeBg={`ocean`} { ...props } />


export default class extends Component {

  componentDidMount() {
    this.props.subscribeToEvents()
  }

  render() {
    const { data, loading, profile, assignReward } = this.props

    return loading ? null : (
      <MaxBox>
        <Box p={1}>
          <Breadcrumb>
            <Link to={`/leads`}>Leads</Link>
          </Breadcrumb>

          <Name>{ profile.lead.user.name }</Name>
          <Email>{ profile.lead.user.email }</Email>

          <Tabs>
            <StyledTab exact to={`/leads/${profile.lead.id}`}>Activity</StyledTab>
            <StyledTab to={`/leads/${profile.lead.id}/history`}>History</StyledTab>
            <StyledTab to={`/leads/${profile.lead.id}/conversation`}>Conversation</StyledTab>
            <StyledTab to={`/leads/${profile.lead.id}/rewards`}>Rewards</StyledTab>
          </Tabs>

          <Route exact path={`/leads/${profile.lead.id}`} render={ () => <Activity {...this.props} /> } />
          <Route path={`/leads/${profile.lead.id}/history`} component={History} {...this.props} />
          <Route path={`/leads/${profile.lead.id}/conversation`} component={Conversation} {...this.props} />
          <Route path={`/leads/${profile.lead.id}/rewards`} render={ () => <Rewards {...this.props} /> } />

        </Box>
      </MaxBox>
    )
  }
}
