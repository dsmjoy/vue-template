import schema from 'async-validator'
import rules from './rules'
import { requiredUserInfoKeys } from './rules'

export function validate(value, keys = []) {
    let descriptor = getValidateRules(keys.length ? keys : Object.keys(value))
    let validator = new schema(descriptor)

    validator.validate(value, (errors, fields) => {
        if( errors ) {
            return errors
        }
        return []
    })
}

export function checkIfRequiredUserInfoFinished () {
    let descriptor = getValidateRules(requiredUserInfoKeys)
    let validator = new schema(descriptor)
    validator.validate(value, (errors, fields) => {
        if( errors ) {
            return errors
        }
        return []
    })
}

export function getValidateRules(keys = []) {
    let descriptor = {}
    keys.forEach(key => {
        descriptor[key] = rules[key]
    })
    return descriptor
}


