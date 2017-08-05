import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export default new GraphQLScalarType({
  name: 'Email',
  description: 'The value must be a valid email address',
  serialize(value) {
    let result;
    // Implement your own behavior here by setting the 'result' variable
    return result;
  },
  parseValue(value) {
    let result;
    // Implement your own behavior here by setting the 'result' variable
    return result;
  },
  parseLiteral(ast) {
    if(ast.kind === Kind.STRING) return ast.value
    return null
  }
})
