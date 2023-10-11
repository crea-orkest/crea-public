import { Footer } from './footer'
import React from 'react'
import { render } from '@testing-library/react'
import { resolvedComponent } from 'utils/testHelpers/resolvedComponent'

describe('Footer component', () => {
  it('shows all the data', async () => {
    const ResolvedFutureEvents = await resolvedComponent(Footer, {})

    const { container } = render(<ResolvedFutureEvents />)

    expect(container).toMatchSnapshot()
  })
})
