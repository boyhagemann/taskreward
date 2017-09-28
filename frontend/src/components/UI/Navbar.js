import React, { Component } from 'react'
import styled from 'styled-components'
import Tab from './Tab'
import MaxBox from './MaxBox'
import Link from './Link'
import Box from './Box'
import Badge from './Badge'
import Button from './Button'
import DropdownMenu from './DropdownMenu'
import Icon from './Icon'
import Logo from './Logo'

const Bar = Box.extend`
  position: fixed;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  z-index: 10;
`

const Account = Box.extend`
  text-align: right;
  position: relative;
`

const Name = styled.span`
  font-weight: bold;
`

const renderItem = ({ to, label, badge }) => <Tab key={to} to={to} activeBorder={`ocean`} >
  {label} { badge && <Badge bg={badge.background}>{badge.count}</Badge>}
</Tab>

export default class extends Component {

  constructor() {
    super()

    this.state = {
      showAccountMenu: false
    }

    this.toggleAccountMenu = this.toggleAccountMenu.bind(this)
    this.hideAccountMenu = this.hideAccountMenu.bind(this)
  }

  hideAccountMenu() {
    this.setState({
      showAccountMenu: false
    })
  }

  toggleAccountMenu() {
    this.setState({
      showAccountMenu: !this.state.showAccountMenu
    })
  }

  render() {

    const { items = [], accountItems = [], name } = this.props

    return (
      <Bar bg={`bleech`} pt={2} pb={0}>
        <MaxBox>
          <Box width={[1, 3/12]} mt={`-3px`} px={1} color={`night+++`}>
            <Logo />
          </Box>
          <Box width={[1, 6/12]} color={`night+++`} px={1}>
            { name && items.map(renderItem) }
          </Box>
          <Account width={[1, 3/12]} px={1}>
            { name
              ? (
                <div>
                  <div>
                    Logged in as <Button onClick={this.toggleAccountMenu}>
                      <Icon name='profile' color={'ocean'} size={2} mr={1} />
                      <Name>{name}</Name>
                    </Button>
                  { this.state.showAccountMenu && (
                    <DropdownMenu
                      items={accountItems}
                      onClickOutside={this.hideAccountMenu}
                      handleClick={this.hideAccountMenu}
                    />
                  ) }
                </div>

                </div>
              )
              : (
                <Button component={Link} to={`/login`}>Login</Button>
              )
            }
          </Account>
        </MaxBox>
      </Bar>
    )
  }
}
