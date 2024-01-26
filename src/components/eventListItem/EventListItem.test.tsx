import { EventListItem } from './eventListItem'
import React from 'react'
import { getEvent } from '../../graphql/getters/getEvent'
import { mockEvent } from './mocks/mockEvent'
import { render, screen } from '@testing-library/react'

jest.mock('../../graphql/getters/getEvent', () => {
  const originalModule = jest.requireActual('../../graphql/getters/getEvent')
  return {
    __esModule: true,
    ...originalModule,
    getEvent: jest.fn(),
  }
})

const getEventMock = jest.mocked(getEvent)

describe('EventListItem component', () => {
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
