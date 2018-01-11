import setFieldTouched from './setFieldTouched'

describe('setFieldTouched', () => {
  it('should not call any tools', () => {
    const setIn = jest.fn()
    const getIn = jest.fn()
    const changeValue = jest.fn()
    const shallowEqual = jest.fn()
    const state = { fields: { foo: { data: {} } } }
    const result = setFieldTouched(['foo', { cool: true }], state, {
      getIn,
      setIn,
      changeValue,
      shallowEqual
    })
    expect(result).toBeUndefined()
    expect(getIn).not.toHaveBeenCalled()
    expect(setIn).not.toHaveBeenCalled()
    expect(changeValue).not.toHaveBeenCalled()
    expect(shallowEqual).not.toHaveBeenCalled()
  })

  it('should mark field as touched', () => {
    const foo = { touched: false }
    const fields = { foo }
    const state = { fields }
    setFieldTouched(['foo', true], state, {})
    expect(state.fields).toBe(fields)
    expect(state.fields.foo).toBe(foo)
    expect(state.fields.foo.touched).toBe(true)
  })

  it('should mark field as untouched', () => {
    const foo = { touched: true }
    const fields = { foo }
    const state = { fields }
    setFieldTouched(['foo', false], state, {})
    expect(state.fields).toBe(fields)
    expect(state.fields.foo).toBe(foo)
    expect(state.fields.foo.touched).toBe(false)
  })

  it('should do nothing if field is not found', () => {
    const foo = {}
    const fields = { foo }
    const state = { fields }
    setFieldTouched(['bar', true], state, {})
    expect(state.fields).toBe(fields)
    expect(state.fields.foo).toBe(foo)
  })
})
