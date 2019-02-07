// @flow
import type { MutableState, Mutator } from 'final-form'

const setFieldTouched: Mutator = (args: any[], state: MutableState) => {
  const [name, touched] = args
  const field = state.fields[name]
  if (field) {
    field.touched = !!touched
  }
}

export default setFieldTouched
