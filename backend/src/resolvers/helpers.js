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

export const handleError = error => console.log(error)

export const transformMany = (result, session) => {

  session.close()

  return result.records.map(mapRecord)
}

export const transformOne = (result, session) => {

  session.close();

  const singleRecord = result.records[0];
  const node = singleRecord.get(0);
  console.log('Result!!!!!', node)

  return node.properties
}


export const encrypt = (string, salt) => crypto
  .createHmac('sha512', salt)
  .update(string)
  .digest('hex')
