import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'

import Header from './Header'

const text = 'Alex Kessock Photography'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Header text={text} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders a header', () => {
  const { getByText } = render(<Header text={text} />)

  expect(getByText(text)).toBeInTheDocument()
})
