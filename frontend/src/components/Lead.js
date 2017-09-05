import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Event from './Event'
import Box from './UI/Box'
import Button from './UI/Button'
import MaxBox from './UI/MaxBox'

const Breadcrumb = props => <Box width={1} my={2} { ...props } />

export default class extends Component {

  componentDidMount() {
    this.props.subscribeToEvents()
  }

  render() {
    const { data, loading, profile, assignReward } = this.props
    console.log(data, loading, profile)

    return loading ? null : (
      <MaxBox>

        <Breadcrumb>
          <Link to={`/leads`}>Leads</Link>
        </Breadcrumb>

        <h2>{ profile.name }</h2>

        <h2>Stream</h2>
        { profile.lead.events.map(Event)}

        <h2>Reward</h2>
        <Box width={1}>
          { profile.rewards.map( reward => (
            <Button key={reward.id} onClick={ () => assignReward(profile.lead.id, reward.id) } type="button">Assign { reward.name }</Button>
          ))}
        </Box>
      </MaxBox>
    )
  }
}
