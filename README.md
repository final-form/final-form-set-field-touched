# 🏁 Final Form Set Field Touched

[![NPM Version](https://img.shields.io/npm/v/final-form-set-field-touched.svg?style=flat)](https://www.npmjs.com/package/final-form-set-field-touched)
[![NPM Downloads](https://img.shields.io/npm/dm/final-form-set-field-touched.svg?style=flat)](https://www.npmjs.com/package/final-form-set-field-touched)
[![Build Status](https://travis-ci.org/final-form/final-form-set-field-touched.svg?branch=master)](https://travis-ci.org/final-form/final-form-set-field-touched)
[![codecov.io](https://codecov.io/gh/final-form/final-form-set-field-touched/branch/master/graph/badge.svg)](https://codecov.io/gh/final-form/final-form-set-field-touched)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Mutator for setting a field as "touched" in [🏁 Final Form](https://github.com/final-form/final-form).

---

## Installation

```bash
npm install --save final-form-set-field-touched
```

or

```bash
yarn add final-form-set-field-touched
```

## Usage

```js
import { createForm } from 'final-form'
import setFieldTouched from 'final-form-set-field-touched'

// Create Form
const form = createForm({
  mutators: { setFieldTouched },
  onSubmit
})

form.mutators.setFieldTouched('firstName', true)

form.registerField(
  'firstName',
  fieldState => {
    const { touched } = fieldState // true
  },
  {
    // ...other subscription items
    touched: true
  }
)
```

## Mutator

### `form.mutators.setFieldTouched(name: string, touched: boolean) => void`

Sets the specified field's `touched` flag to the boolean value provided.
