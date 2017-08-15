import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Welcome } from '@storybook/react/demo'
import TextInput from '../components/UI/TextInput'
import TextArea from '../components/UI/TextArea'
import Button from '../components/UI/Button'
import Login from '../components/Login'
import LoginContainer from '../components/LoginContainer'
import Card from '../components/UI/Card'

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

storiesOf('TextArea', module)
  .addDecorator(getStory => <Card>{ getStory() }</Card>)
  .add('default', () => <TextArea />)
  .add('with label', () => <TextArea label="Email address" />)
  .add('with error', () => <TextArea error />)
  .add('with error message', () => <TextArea error="Some error message" />)
  .add('with warning', () => <TextArea warning />)
  .add('with warning message', () => <TextArea warning="Some warning here...." />)

storiesOf('Login', module)
  .addDecorator(getStory => (
    <Provider store={store}>
      <LoginContainer>
        { getStory() }
      </LoginContainer>
     </Provider>
   ))
  .add('default', () => <Login />)
