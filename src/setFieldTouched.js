// @flow
import type { MutableState, Mutator } from 'final-form'

type Args = [string, boolean]

const setFieldTouched: Mutator = (
  [name, touched]: Args,
  state: MutableState
) => {
  const field = state.fields[name]
  if (field) {
    field.touched = !!touched
  }
}

export default setFieldTouched
