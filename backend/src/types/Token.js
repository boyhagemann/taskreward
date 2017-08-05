const Token = `

union RequestTokenResult = Token | RequestTokenInvalid

type RequestTokenInvalid {
  message: String!
}

type Token {
  token: ID!
  createdAt: Date
  lifetime: Second
}

`

export default Token
