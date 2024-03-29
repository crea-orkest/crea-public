import { LoadMoreEvents } from './loadMoreEvents'
import React from 'react'
import { getEvents } from '../../graphql/getters/getEvents'
import { mockEvent } from './mocks/mockEvents'
import { render, screen } from '@testing-library/react'

jest.mock('../../graphql/getters/getEvents', () => {
  const originalModule = jest.requireActual('../../graphql/getters/getEvents')
  return {
    __esModule: true,
    ...originalModule,
    getEvents: jest.fn(),
  }
})

const getEventsMock = jest.mocked(getEvents)

describe('Events component', () => {
  it('shows all the data', () => {
    getEventsMock.mockResolvedValue({
      data: [mockEvent],
      error: undefined,
    })

    const { container } = render(
      <LoadMoreEvents initialSkip={1} numberOfEvents={10} />
    )

    expect(screen.getByText('1 van 10 concerten')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
