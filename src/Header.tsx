import React from 'react'

interface Props {
  text: string
}

function Header(props: Props) {
  return (
    <header>
      <h1>
        <a
          href="https://www.instagram.com/alexkessock/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.text}
        </a>
      </h1>
    </header>
  )
}

export default Header
