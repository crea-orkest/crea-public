import { EventListItem } from './eventListItem'
import React from 'react'
import { getEvent } from 'graphql/getters/getEvent'
import { mockEvent } from './mocks/mockEvent'
import { render, screen } from '@testing-library/react'

jest.mock('../location/location', () => {
  const originalModule = jest.requireActual('../location/location')
  return {
    __esModule: true,
    ...originalModule,
    Location: jest.fn(() => <p>Location Component</p>),
  }
})

jest.mock('../../graphql/getters/getEvent', () => {
  const originalModule = jest.requireActual('../../graphql/getters/getEvent')
  return {
    __esModule: true,
    ...originalModule,
    getEvent: jest.fn(),
  }
})

const getEventMock = jest.mocked(getEvent)

describe('Concert component', () => {
  it('shows all the data', () => {
    getEventMock.mockResolvedValueOnce({
      data: mockEvent,
      error: undefined,
    })

    const { container } = render(<EventListItem data={mockEvent} />)

    expect(container).toMatchSnapshot()

    expect(screen.getByText('name')).toBeInTheDocument()
  })
})
