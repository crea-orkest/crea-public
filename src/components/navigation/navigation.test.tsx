import React from 'react'
import { Navigation } from './navigation'
import { resolvedComponent } from '../../utils/testHelpers/resolvedComponent'
import { render, screen } from '@testing-library/react'
import { mockMenuData } from './mocks/mockMenuData'

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

describe('Navigation component', () => {
  it('shows all the data', async () => {
    const Resolved = await resolvedComponent(Navigation, {
      generalInfo: mockMenuData.general,
      siteName: 'Default title',
    })

    const { container } = render(<Resolved />)

    expect(container).toMatchSnapshot()
    expect(screen.getByText('contact')).toBeTruthy()
  })
})
