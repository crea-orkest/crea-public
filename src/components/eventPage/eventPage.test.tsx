import { EventPage } from './eventPage'
import type { Props } from './eventPage'
import React from 'react'
import { resolvedComponent } from '../../utils/testHelpers/resolvedComponent'
import { render } from '@testing-library/react'

jest.mock('../../graphql/getters/getEventPage', () => {
  const originalModule = jest.requireActual(
    '../../graphql/getters/getEventPage'
  )
  return {
    __esModule: true,
    ...originalModule,
    getEventPage: jest.fn(),
  }
})

describe('Event page', () => {
  it('shows all the data', async () => {
    const Resolved = await resolvedComponent<Props>(EventPage, {
      data: {
        id: 'unique-id',
        title: 'title',
        image: null,
        locations: [],
        persons: [],
        program: [],
        url: '/some-slug',
        content: [],
      },
    })

    const { container } = render(<Resolved />)

    expect(container).toMatchSnapshot()
  })
})
