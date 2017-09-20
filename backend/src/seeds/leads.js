export default [
  {
    id: 'lead.2',
    user: 'user.2',
    parent: 'lead.1', // in profiles seed
    hash: 'lead.2.hash',
    source: 'invitation',
    motivation: "This guy can really use your product.",
    status: 'some-status',
    score: 0.87,
  },
  {
    id: 'lead.3',
    user: 'user.3',
    parent: 'lead.2', // in profiles seed
    hash: 'lead.3.hash',
    source: 'invitation',
    motivation: "This guy can really use your product.",
    status: 'some-status',
    score: 0.87,
  },
  {
    id: 'lead.4',
    user: 'user.4',
    parent: 'lead.3',
    hash: 'lead.4.hash',
    source: 'page',
    motivation: "Don't know why",
    status: 'some-status',
    score: 0.3,
  },
]
