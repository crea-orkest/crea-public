import { AuthorContainer } from './authorContainer'
import type { Props } from './authorContainer'
import React from 'react'
import { getAuthor } from '../../graphql/getters/getAuthor'
import { resolvedComponent } from 'utils/testHelpers/resolvedComponent'
import { render, screen } from '@testing-library/react'

jest.mock('../../graphql/getters/getAuthor', () => {
  const originalModule = jest.requireActual('../../graphql/getters/getAuthor')
  return {
    __esModule: true,
    ...originalModule,
    getAuthor: jest.fn(),
  }
})

const getAuthorMock = jest.mocked(getAuthor)

describe('Author component', () => {
  it('shows all the data', async () => {
    getAuthorMock.mockResolvedValueOnce({
      data: {
        id: 'id',
        name: 'name',
        description: 'role',
      },
      error: undefined,
    })

    const Resolved = await resolvedComponent<Props>(AuthorContainer, {
      id: 'some id',
    })

    const { container } = render(<Resolved />)

    expect(container).toMatchSnapshot()
    expect(screen.getByText('name')).toBeInTheDocument()
    expect(screen.getByText('role')).toBeInTheDocument()
  })
})
