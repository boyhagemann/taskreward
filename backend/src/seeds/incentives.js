
export default [
  {
    id: 'incentive.1',
    profile: 'profile.1',
    action: 'action.1',
    name: 'First incentive',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus pulvinar eros, eget rhoncus orci consequat ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi a urna eu leo placerat finibus id ut metus. Fusce accumsan leo at dignissim molestie. ",
    value: 30000,
  },
  {
    id: 'incentive.2',
    profile: 'profile.1',
    action: 'action.2',
    name: 'Second incentive',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rhoncus pulvinar eros, eget rhoncus orci consequat ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi a urna eu leo placerat finibus id ut metus. Fusce accumsan leo at dignissim molestie. ",
    value: 50000,
  },
  {
    id: 'incentive.3',
    profile: 'profile.1',
    action: 'action.viewed-profile',
    name: 'Provide 1000 views',
    description: "Share this page on social media and get people to view this profile. You will receive 10 euro for every 1000 views.",
    value: 1000,
    operator: '=', // = or %
    count: 1000,
  }
]
