import React from 'react'
import Heading from './UI/Heading'
import Box from './UI/Box'
import MaxBox from './UI/MaxBox'
import ProfileFormContainer from './ProfileFormContainer'
import RewardFormContainer from './RewardFormContainer'

const Reward = props => <Box { ...props } bg={`canvas-`} p={2} mb={2} />

export default ({ handleSubmit, loading, profile = {} }) => {

    const { id, name, description, rewards } = profile

    return loading ? null :
    <div>
      <MaxBox p={1}>

        <Box width={[1, 2/3]}>
          <ProfileFormContainer
            initialValues={{ id, name, description }}
          />
        </Box>
      </MaxBox>

      <MaxBox p={1}>
        <Box width={[1, 2/3]}>
          <Heading>Rewards</Heading>
          { rewards.map( reward => (
            <Reward key={reward.id}>
              <RewardFormContainer
                form={`reward-${reward.id}`}
                name={reward}
                initialValues={reward}
                remove={ () => {
                  console.log('remove...')
                } } />
            </Reward>
          )) }
        </Box>

      </MaxBox>
    </div>
}
