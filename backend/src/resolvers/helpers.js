import neo4j from 'neo4j-driver'
export { default as id } from 'uuid/v4'
import crypto from 'crypto'

const driver = neo4j.driver('bolt://neo4j:7687', neo4j.auth.basic('neo4j', 'admin'))
export const session = driver.session()

export const mapRecord = ({ keys, _fields, _fieldLookup }) => keys.map(key => {
  const index = _fieldLookup[key]
  const field = _fields[index]
  return field.properties
})[0]

export const handleError = error => console.log('Handled error:', error)

export const transformMany = (result, session) => {

  session.close()

  return result.records.map(mapRecord)
}

function TransformException(message) {
  this.message = message
  this.name = 'TransformException'
}

export const transformOne = (result, session) => {

  session.close();

  const singleRecord = result.records[0]

  if(!singleRecord) throw new TransformException('Record does not exist')

  const node = singleRecord.get(0)

  return node.properties
}


export const encrypt = (string, salt) => crypto
  .createHmac('sha512', salt)
  .update(string)
  .digest('hex')
