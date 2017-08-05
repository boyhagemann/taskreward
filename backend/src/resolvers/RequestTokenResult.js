

export default {
  __resolveType(obj, context, info) {

    if(obj.token){
      return 'Token';
    }

    return 'RequestTokenInvalid';
  },
}
