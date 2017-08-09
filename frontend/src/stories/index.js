import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Welcome } from '@storybook/react/demo'
import TextInput from '../components/TextInput'
import Button from '../components/Button'
import Login from '../components/Login'
import LoginContainer from '../components/LoginContainer'
import Card from '../components/Card'

import store from '../configuration/redux'
import { Provider } from 'react-redux'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)
  .add('primary', () => <Button primary onClick={action('clicked')}>Primary action</Button>)
  .add('primary disabled', () => <Button primary disabled onClick={action('clicked')}>Primary action</Button>)
  .add('primary huge', () => <Button primary huge>Primary action</Button>)

storiesOf('TextInput', module)
  .addDecorator(getStory => <Card>{ getStory() }</Card>)
  .add('default', () => <TextInput />)
  .add('with label', () => <TextInput label="Email address" />)
  .add('with error', () => <TextInput error />)
  .add('with error message', () => <TextInput error="Some error message" />)
  .add('with warning', () => <TextInput warning />)
  .add('with warning message', () => <TextInput warning="Some warning here...." />)

storiesOf('Login', module)
  .addDecorator(getStory => (
    <Provider store={store}>
      <LoginContainer>
        { getStory() }
      </LoginContainer>
     </Provider>
   ))
  .add('default', () => <Login />)
