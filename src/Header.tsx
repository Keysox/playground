import React from 'react'

interface Props {
  text: string
}

function Header(props: Props) {
  return (
    <header>
      <h1>{props.text}</h1>
    </header>
  )
}

export default Header
