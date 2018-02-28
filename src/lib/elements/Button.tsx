import * as React from 'react'

interface ButtonProps {
  color: String,
  label: String
}

const Button = (prop: ButtonProps) => (
  <button>
    {prop.label}
  </button>
)


export default Button
