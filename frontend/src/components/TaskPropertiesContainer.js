import { reduxForm } from 'redux-form'
import RewardProperties from './RewardProperties'

export default reduxForm({
  form: "reward_properties",
  onSubmit: (values) => {
    console.log(values)
  }
})(RewardProperties)
