import { NavigationItem } from '../navigationItem'
import { render, screen } from '@testing-library/react'

describe('NavigationItem', () => {
  it('should render a link', async () => {
    render(<NavigationItem slug={'url'} label={'homepage'} />)

    expect(screen.getByText('homepage'))
    expect(screen.getByRole('link', { name: 'homepage' })).toMatchSnapshot()
  })

  it('should render a link warning', async () => {
    render(<NavigationItem />)

    expect(screen.getByText('No link specified'))
  })

  it('should render a label warning', async () => {
    render(<NavigationItem slug={'test'} />)

    expect(screen.getByText('No label specified'))
  })
})
