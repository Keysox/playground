import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

window.history.pushState({}, 'Alex Kessock Photography', '/photography')

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders a navbar', () => {
  const { container } = render(<App />)

  expect(container.querySelectorAll('a').length).toBeGreaterThan(0)
})

describe('renders images', () => {
  let allImagesCount: number

  it('on the All page', () => {
    const { container } = render(<App />)
    allImagesCount = container.querySelectorAll('img').length

    expect(allImagesCount).toBeGreaterThan(0)
  })

  it('on the Landscape page', () => {
    const { container, getByText } = render(<App />)

    getByText('Landscape').click()

    const landscapeImagesCount = container.querySelectorAll('img').length
    expect(landscapeImagesCount).toBeLessThan(allImagesCount)
    expect(landscapeImagesCount).toBeGreaterThan(0)
  })
})
