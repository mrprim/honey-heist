import React from 'react'
import TextField from '@material-ui/core/TextField'
import { useField } from 'amiable-forms'
import { required as requiredValidator } from '../../utils/validators'

const DecoratedInput = props => {
  const validators = setupValidators(props)
  const { error, touched, value, onChange, submitted } = useField({ name: props.name, validators })
  const label = !props.unlabeled ? props.label : null
  const p = {
    ...cleanProps(props),
    style: { width: '100%' },
    label,
    value,
    onChange,
    error: !!((touched || submitted) && error),
    helperText: ((touched || submitted) && error) || ' ',
    InputLabelProps: { shrink: props.shrink },
    InputProps: props.InputProps
  }

  return <TextField {...p}>{props.children}</TextField>
}

const cleanProps = props => {
  const p = { ...props }
  delete p.unlabeled
  delete p.IconComponent
  delete p.generatorName
  delete p.validators
  delete p.required
  delete p.generatorOptions
  delete p.shrink
  return p
}

const setupValidators = ({ validators, required }) => {
  const v = validators || []
  if (required) {
    v.push(requiredValidator)
  }
  return v
}

export default DecoratedInput
