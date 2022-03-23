import React from 'react'
import Logo from './Logo'

const FormInstructions = (instruction) => {
  return (
    <aside className="host--acommodation">
        <Logo />
        <h2>{instruction}</h2>
    </aside>
  )
}

export default FormInstructions