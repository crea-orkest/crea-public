import { DefaultLayout } from './defaultLayout'
import React from 'react'
import { render } from '@testing-library/react'

jest.mock('../navigation', () => {
  const originalModule = jest.requireActual('../navigation')
  return {
    __esModule: true,
    ...originalModule,
    Navigation: jest.fn(() => <nav>[Navigation]</nav>),
  }
})

jest.mock('../footer', () => {
  const originalModule = jest.requireActual('../footer')
  return {
    __esModule: true,
    ...originalModule,
    Footer: jest.fn(() => <footer>[Footer]</footer>),
  }
})

describe('Default layout', () => {
  it('shows all the data', () => {
    const { container } = render(
      <DefaultLayout>
        <main>main content</main>
      </DefaultLayout>
    )
    expect(container).toMatchSnapshot()
  })
})
