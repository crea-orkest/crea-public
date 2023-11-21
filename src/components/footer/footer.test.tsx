import { Footer } from './footer'
import React from 'react'
import { render } from '@testing-library/react'
import { resolvedComponent } from 'utils/testHelpers/resolvedComponent'

jest.mock('../../graphql/getters/getSiteMetadata', () => {
  const originalModule = jest.requireActual(
    '../../graphql/getters/getSiteMetadata'
  )
  return {
    __esModule: true,
    ...originalModule,
    getSiteMetadata: jest.fn(() => ({
      metadata: {
        title: 'Default title',
        description: 'Default description',
        base_url: 'https://example.com',
      },
      error: undefined,
    })),
  }
})

describe('Footer component', () => {
  it('shows all the data', async () => {
    const ResolvedFutureEvents = await resolvedComponent(Footer, {})

    const { container } = render(<ResolvedFutureEvents />)

    expect(container).toMatchSnapshot()
  })
})
