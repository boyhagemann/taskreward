import neo4j from 'neo4j-driver'
export { default as id } from 'uuid/v4'
import crypto from 'crypto'

const driver = neo4j.driver('bolt://neo4j:7687', neo4j.auth.basic('neo4j', 'admin'))
export const session = driver.session()

export const handleError = error => console.log('Handled error:', error)

function TransformException(message) {
  this.message = message
  this.name = 'TransformException'
}

export const mapRecord = ({ keys, _fields, _fieldLookup }) => keys
  .map(key => {
    const index = _fieldLookup[key]
    const field = _fields[index]
    const type = field.constructor.name

    switch(type) {
      case 'Node':
        return field.properties

      case 'Integer':
        return {[key]: field.low }

      case 'String':
        return {[key]: field}

      default:
        console.log(`Type "${type}" is not implemented yet`)
        return {[key]: null}
    }

  })
  .reduce( (current, next) => ({ ...current, ...next }), {})

export const transformMany = (result, session) => {

  session.close()

  return result.records.map(mapRecord)
}

export const transformOne = (result, session) => {

  session.close();

  const singleRecord = result.records[0]

  if(!singleRecord) throw new TransformException(`Record does not exist: ${ JSON.stringify(result)}`)

  return mapRecord(singleRecord)
}


export const encrypt = (string, salt) => crypto
  .createHmac('sha512', salt)
  .update(string)
  .digest('hex')
