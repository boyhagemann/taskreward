import React from 'react'
import Heading from './UI/Heading'
import Box from './UI/Box'
import MaxBox from './UI/MaxBox'
import ProfileFormContainer from './ProfileFormContainer'
import IncentiveFormContainer from './IncentiveFormContainer'

const Incentive = props => <Box { ...props } bg={`canvas-`} p={2} mb={2} />

export default ({ handleSubmit, loading, profile = {} }) => {

    const { id, name, description, incentives } = profile

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
          { incentives.map( incentive => (
            <Incentive key={incentive.id}>
              <IncentiveFormContainer
                form={`incentive-${incentive.id}`}
                initialValues={incentive}
                remove={ () => {
                  console.log('remove...')
                } } />
            </Incentive>
          )) }
        </Box>

      </MaxBox>
    </div>
}
